import { getCurrentlyPlaying } from "@/utils/spotify"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const data = await getCurrentlyPlaying()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Spotify API error:", error)
    return NextResponse.json({ is_playing: null }, { status: 500 })
  }
} 