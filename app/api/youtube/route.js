import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const handle = process.env.YOUTUBE_CHANNEL_HANDLE;

    // 1) FINN KANAL-ID BASERT PÅ HANDLE
    const channelUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${handle}&key=${apiKey}`;
    const channelRes = await fetch(channelUrl);
    const channelData = await channelRes.json();

    if (!channelData.items || channelData.items.length === 0) {
      return NextResponse.json({ error: "Channel not found" }, { status: 404 });
    }

    const channelId = channelData.items[0].id.channelId;

    // 2) HENT SISTE VIDEO FRA KANALEN
    const videoUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;
    const videoRes = await fetch(videoUrl);
    const videoData = await videoRes.json();

    if (!videoData.items || videoData.items.length === 0) {
      return NextResponse.json({ error: "No videos found" }, { status: 404 });
    }

    const video = videoData.items[0];

    return NextResponse.json({
      videoId: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

