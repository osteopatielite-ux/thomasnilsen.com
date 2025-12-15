import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-wrapper">

          <img
            src="/portrett.jpg"
            alt="Thomas Nilsen"
            className="hero-image"
          />

          <div className="hero-text">
            <h1 className="hero-title">
              Smerter, stress eller tankekjør?
            </h1>
            <p className="hero-subtitle">
              Jeg hjelper deg videre.
            </p>

            <a
              href="mailto:thomas@moveoklinikken.no"
              className="hero-button"
            >
              Bestill time
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <div className="page-wrapper">

        {/* INTRO */}
        <section className="section">
          <h2 className="section-title">Velkommen</h2>
          <p className="section-text">
            Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø.
            Jeg tilbyr fysioterapi, osteopati og kognitiv terapi – med fokus på
            smerter, stress, overbelastning og individuelt tilpasset behandling.
          </p>
        </section>

        {/* TJENESTER */}
        <section className="section">
          <h2 className="section-title">Tjenester</h2>

          <div className="service-grid">
            <Link href="/fysioterapi" className="service-card">
              <h3>Fysioterapi</h3>
              <p>Undersøkelse, behandling og aktiv oppfølging.</p>
            </Link>

            <Link href="/osteopati" className="service-card">
              <h3>Osteopati</h3>
              <p>Helhetlig behandling av kropp og funksjon.</p>
            </Link>

            <Link href="/kognitiv-terapi" className="service-card">
              <h3>Kognitiv terapi</h3>
              <p>Arbeid med tanker, stress og mestring.</p>
            </Link>

            <Link href="/lopsanalyse" className="service-card">
              <h3>Løpsanalyse</h3>
              <p>Teknikk, skadeforebygging og prestasjon.</p>
            </Link>

            <Link href="/terskeltest" className="service-card">
              <h3>Terskeltest</h3>
              <p>Testing for bedre treningsstyring.</p>
            </Link>

            <Link href="/podcast" className="service-card">
              <h3>Podcast</h3>
              <p>Samtaler om helse, smerte og mestring.</p>
            </Link>
          </div>
        </section>
      </div>

     {/* ================= PODCAST ================= */}
<section className="podcast-section">
  <div className="podcast-inner">

    <h2 className="podcast-title">Podcast & faglige samtaler</h2>

    <p className="podcast-intro">
      Her deler jeg samtaler og refleksjoner rundt smerter, stress,
      helse og mestring.
    </p>

    <div className="podcast-video">
      <iframe
        src="https://www.youtube.com/embed?listType=user_uploads&list=Moveoklinikken"
        title="Moveoklinikken Podcast"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

  </div>
</section>
