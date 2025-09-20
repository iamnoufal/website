import { getTopTrack } from "@/utils/spotify"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const data = await getTopTrack()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Top track API error:", error)
    return NextResponse.json(null, { status: 500 })
  }
} 