export const metadata = {
  title: "Podcast – Moveoklinikken Bodø | Thomas Nilsen",
  description:
    "Se podcastepisoder, faglige videoer og samtaler med Thomas Nilsen ved Moveoklinikken i Bodø. Fysioterapi, osteopati, kognitiv terapi og helse.",
};

export default function PodcastPage() {
  return (
    <div className="page-wrapper" style={{ paddingBottom: "80px" }}>
      <h1 className="page-title">Podcast & Video</h1>

      <p className="page-intro">
        Her finner du podcastepisoder, faglige videoer og samtaler med Thomas
        Nilsen – med temaer innen fysioterapi, osteopati, kognitiv terapi, 
        smerter, stress, mental helse og prestasjon.
      </p>

      <div className="video-grid">
        {/* VIDEO 1 */}
        <div className="video-card">
          <iframe
            src="https://www.youtube.com/embed?listType=user_uploads&list=Moveoklinikken"
            title="Moveoklinikken YouTube"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p className="video-note">
        Flere episoder kommer fortløpende. Følg gjerne kanalen på YouTube for oppdateringer!
      </p>
    </div>
  );
}

