interface PostSchema {
	id: string,
	title: string;
	slug: string;
	html: string;
	published_at: string;
	feature_image: string;
	excerpt: string;
	tags: Array<{
		id: string,
		name: string
	}>;
	authors: Array<String>;
	reading_time: number;
	featured: true;
}

interface SpotifyData {
	current_time?: number;
	duration: number;
	is_playing: boolean | null;
	title: string;
	artist: string;
	album: string;
	album_art: string;
	url: string;
	preview: string;
}

interface FlowData {
	title: string;
	description: string;
	emoji: string;
	single: boolean;
	time: string;
	order: number;
	image: {
		url: string;
		alternativeText: string;
	}
}

interface TravelLog {
	location: string;
	latestDate: string;
	visits: {
		date: string;
		status: string;
		link?: string;
	}[];
}

interface CurrentLocation {
	location: string;
	type: "weekday" | "weekend" | "override";
}

interface Movie {
	title: string;
	year: string;
	youtubeId: string;
}

interface Book {
	title: string;
	author: string;
	cover: string;
	rating: number;
}

interface Fact {
	icon: string;
	text: string;
}