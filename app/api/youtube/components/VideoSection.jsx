"use client";

import { useEffect, useState } from "react";

export default function VideoSection() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    async function loadVideo() {
      const res = await fetch("/api/youtube");
      const data = await res.json();
      setVideo(data);
    }
    loadVideo();
  }, []);

  if (!video)
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        Laster podcast-video…
      </div>
    );

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Siste episode fra Moveoklinikken Podcast</h2>

      <div style={styles.videoWrapper}>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={styles.video}
        ></iframe>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "30px",
  },
  videoWrapper: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  video: {
    borderRadius: "12px",
  },
};

