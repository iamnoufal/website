// All types are declared globally in utils/types.d.ts

// ---------------------------------------------------------------------------
// Shared CSV helper
// ---------------------------------------------------------------------------

function parseCsvRow(row: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (const char of row) {
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  fields.push(current.trim());
  return fields;
}

async function fetchSheetCsv(gid: string): Promise<string[][]> {
  const baseUrl = process.env.GOOGLE_SHEET_CSV_URL;
  if (!baseUrl) {
    console.warn("GOOGLE_SHEET_CSV_URL not set");
    return [];
  }

  // Append gid to the published CSV URL
  // Base format: https://docs.google.com/spreadsheets/d/e/.../pub?output=csv
  const url = `${baseUrl}&gid=${gid}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) {
      console.error(`Failed to fetch sheet gid=${gid}:`, response.status);
      return [];
    }
    const csv = await response.text();
    const lines = csv.trim().split("\n");
    if (lines.length < 2) return [];
    // Return data rows (skip header), each parsed into columns
    return lines.slice(1).map(parseCsvRow);
  } catch (error) {
    console.error(`Error fetching sheet gid=${gid}:`, error);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Travel Logs
// ---------------------------------------------------------------------------

interface RawTravelEntry {
  location: string;
  year: string;
  fromDate: string;
  toDate: string;
  status: string;
  link: string;
  isCurrent: boolean;
}

function getDefaultCurrentLocation(): CurrentLocation {
  const now = new Date();
  const day = now.getDay();
  const isWeekend = day === 0 || day === 6;
  return {
    location: isWeekend ? "Karur" : "Madurai",
    type: isWeekend ? "weekend" : "weekday",
  };
}

export async function getTravelLogs(): Promise<{
  logs: TravelLog[];
  currentLocation: CurrentLocation;
}> {
  const gid = process.env.SHEET_GID_TRAVEL;
  if (!gid)
    return { logs: [], currentLocation: getDefaultCurrentLocation() };

  const rows = await fetchSheetCsv(gid);
  if (!rows.length)
    return { logs: [], currentLocation: getDefaultCurrentLocation() };

  const entries: RawTravelEntry[] = rows
    .map((cols) => ({
      location: cols[0] || "",
      year: cols[1] || "",
      fromDate: cols[2] || "",
      toDate: cols[3] || "",
      status: cols[4] || "",
      link: cols[5] || "",
      isCurrent:
        (cols[6] || "").toUpperCase() === "TRUE" ||
        (cols[6] || "").toUpperCase() === "YES",
    }))
    .filter((e) => e.location);

  // Current location override
  const overrideEntry = entries.find((e) => e.isCurrent);
  const currentLocation: CurrentLocation = overrideEntry
    ? { location: overrideEntry.location, type: "override" }
    : getDefaultCurrentLocation();

  // Group by location
  const grouped = new Map<string, { entries: RawTravelEntry[] }>();
  for (const entry of entries) {
    const key = entry.location.toLowerCase();
    if (!grouped.has(key)) grouped.set(key, { entries: [] });
    grouped.get(key)!.entries.push(entry);
  }

  const logs: TravelLog[] = [];
  for (const [, group] of grouped) {
    const sortedEntries = [...group.entries].sort(
      (a, b) => getEntryTimestamp(b) - getEntryTimestamp(a)
    );

    const first = sortedEntries[0];
    const visits: TravelLog["visits"] = sortedEntries.map((e) => ({
      date: formatTravelDate(e),
      status: e.status,
      link: e.link || undefined,
    }));

    logs.push({
      location: first.location,
      latestDate: formatTravelDate(first),
      visits,
    });
  }

  logs.sort((a, b) => {
    const aLatest = getLatestTimestamp(
      grouped.get(a.location.toLowerCase())!.entries
    );
    const bLatest = getLatestTimestamp(
      grouped.get(b.location.toLowerCase())!.entries
    );
    return bLatest - aLatest;
  });

  return { logs, currentLocation };
}

function formatTravelDate(entry: RawTravelEntry): string {
  if (entry.fromDate) {
    const from = new Date(entry.fromDate);
    const fromStr = from.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    if (entry.toDate) {
      const to = new Date(entry.toDate);
      const toStr = to.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      const year = to.getFullYear();

      if (from.getTime() === to.getTime()) return `${fromStr}, ${year}`;
      if (
        from.getMonth() === to.getMonth() &&
        from.getFullYear() === to.getFullYear()
      )
        return `${fromStr} – ${to.getDate()}, ${year}`;
      return `${fromStr} – ${toStr}, ${year}`;
    }
    return `${fromStr}, ${from.getFullYear()}`;
  }
  return entry.year || "";
}

function getEntryTimestamp(entry: RawTravelEntry): number {
  if (entry.toDate) return new Date(entry.toDate).getTime();
  if (entry.fromDate) return new Date(entry.fromDate).getTime();
  if (entry.year) return new Date(`${entry.year}-01-01`).getTime();
  return 0;
}

function getLatestTimestamp(entries: RawTravelEntry[]): number {
  let latest = 0;
  for (const entry of entries) {
    latest = Math.max(latest, getEntryTimestamp(entry));
  }
  return latest;
}

// ---------------------------------------------------------------------------
// Recently Watched
// ---------------------------------------------------------------------------

export async function getRecentMovies(): Promise<Movie[]> {
  const gid = process.env.SHEET_GID_MOVIES;
  if (!gid) return [];

  const rows = await fetchSheetCsv(gid);
  return rows
    .map((cols) => {
      let youtubeId = cols[2] || "";
      const match = youtubeId.match(
        /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
      );
      if (match && match[1]) {
        youtubeId = match[1];
      }
      return {
        title: cols[0] || "",
        year: cols[1] || "",
        youtubeId: youtubeId,
      };
    })
    .filter((m) => m.title && m.youtubeId);
}

// ---------------------------------------------------------------------------
// Library
// ---------------------------------------------------------------------------

export async function getLibrary(): Promise<Book[]> {
  const gid = process.env.SHEET_GID_LIBRARY;
  if (!gid) return [];

  const rows = await fetchSheetCsv(gid);
  return rows
    .map((cols) => ({
      title: cols[0] || "",
      author: cols[1] || "",
      cover: cols[2] || "",
      rating: parseInt(cols[3] || "0", 10) || 0,
    }))
    .filter((b) => b.title);
}

// ---------------------------------------------------------------------------
// Random Facts
// ---------------------------------------------------------------------------

export async function getRandomFacts(): Promise<Fact[]> {
  const gid = process.env.SHEET_GID_FACTS;
  if (!gid) return [];

  const rows = await fetchSheetCsv(gid);
  return rows
    .map((cols) => ({
      icon: cols[0] || "✨",
      text: cols[1] || "",
    }))
    .filter((f) => f.text);
}
