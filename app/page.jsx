import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <img
            src="/portrett.jpg"
            alt="Thomas Nilsen"
            className="hero-image"
          />

          <div className="hero-text">
            <h1 className="hero-title">Smerter, stress eller tankekjør?</h1>
            <p className="hero-subtitle">Jeg hjelper deg videre.</p>

            <a href="mailto:thomas@moveoklinikken.no" className="hero-button">
              Bestill time
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
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
              <p>Undersøkelse, behandling og oppfølging.</p>
            </Link>

            <Link href="/osteopati" className="service-card">
              <h3>Osteopati</h3>
              <p>Helhetlig forståelse av kroppen og årsak til smerte.</p>
            </Link>

            <Link href="/kognitiv-terapi" className="service-card">
              <h3>Kognitiv terapi</h3>
              <p>Håndtering av tanker, stress og emosjonelle plager.</p>
            </Link>

            <Link href="/lopsanalyse" className="service-card">
              <h3>Løpsanalyse</h3>
              <p>For bedre teknikk, fart og skadeforebygging.</p>
            </Link>

            <Link href="/terskeltest" className="service-card">
              <h3>Terskeltest</h3>
              <p>Testing for optimal treningsstyring.</p>
            </Link>

            <Link href="/podcast" className="service-card">
              <h3>Podcast</h3>
              <p>Samtaler om helse, trening og mestring.</p>
            </Link>
          </div>
        </section>

        {/* KONTAKT */}
        <section className="section">
          <h2 className="section-title">Kontakt</h2>
          <p className="section-text">
            For timeforespørsel eller spørsmål – send e-post til:
          </p>

          <a className="contact-email" href="mailto:thomas@moveoklinikken.no">
            thomas@moveoklinikken.no
          </a>
        </section>

      </div>
    </div>
  );
}

