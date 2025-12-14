"use client";

import { useEffect, useState } from "react";

export default function VideoSection() {
  const [videoId, setVideoId] = useState(null);

  // Din kanal-ID: @Moveoklinikken
  const CHANNEL_ID = "UCUTqE7YQDdyCjTiM_6zfoeQ"; 
  const API_KEY = "AIzaSyDCJsTu20f_SdvFDNxC4M6oiwYdjpj7bHM";

  useEffect(() => {
    async function fetchLatestVideo() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
        );
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          setVideoId(data.items[0].id.videoId);
        }
      } catch (error) {
        console.error("Kunne ikke hente YouTube-video:", error);
      }
    }

    fetchLatestVideo();
  }, []);

  return (
    <section className="video-section">
      <h2 className="section-title">Siste video</h2>

      {!videoId && <p>Laster video…</p>}

      {videoId && (
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
}

