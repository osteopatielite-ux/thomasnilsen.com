import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-wrapper">

          {/* Venstre: tekst */}
          <div className="hero-text">
            <h1 className="hero-title">
              Smerter, stress eller tankekjør? Jeg hjelper deg videre.
            </h1>

            <p className="hero-subtitle">
              Fysioterapi • Osteopati • Kognitiv terapi i Bodø
            </p>

            <a href="mailto:thomas@moveoklinikken.no" className="hero-button">
              Bestill time
            </a>
          </div>

          {/* Høyre: portrett */}
          <div className="hero-image-container">
            <img
              src="/portrett.jpg"
              alt="Thomas Nilsen"
              className="hero-image"
            />
          </div>

        </div>
      </section>

      {/* TJENESTER – KORTOVERSIKT */}
      <section className="services-section">
        <div className="page-wrapper">
          <h2 className="section-title section-title-center">Tjenester</h2>
          <p className="section-text section-text-center">
            En helhetlig tilnærming til smerter, stress, belastning og prestasjon –
            tilpasset deg, din kropp og din hverdag.
          </p>

          <div className="services-grid">

            <Link href="/fysioterapi" className="service-card">
              <h3>Fysioterapi</h3>
              <p>
                Undersøkelse, behandling og veiledet trening for akutte og
                langvarige muskel- og skjelettplager.
              </p>
              <span className="service-tag">Les mer</span>
            </Link>

            <Link href="/osteopati" className="service-card">
              <h3>Osteopati</h3>
              <p>
                Helhetlig behandling med fokus på sammenhengen mellom muskler,
                ledd, pust, stress og hverdagsbelastning.
              </p>
              <span className="service-tag">Les mer</span>
            </Link>

            <Link href="/kognitiv-terapi" className="service-card">
              <h3>Kognitiv terapi</h3>
              <p>
                For deg som står fast i stress, tankekjør, uro eller mentale
                belastninger – og ønsker nye verktøy.
              </p>
              <span className="service-tag">Les mer</span>
            </Link>

            <Link href="/lopsanalyse" className="service-card">
              <h3>Løpsanalyse</h3>
              <p>
                Videoanalyse og vurdering av løpeteknikk, belastning og
                løpsøkonomi – for mosjonister og løpere.
              </p>
              <span className="service-tag">Les mer</span>
            </Link>

            <Link href="/terskeltest" className="service-card">
              <h3>Terskel- og laktattest</h3>
              <p>
                Finn dine intensitetssoner og tren smartere – med bedre kontroll
                på puls, fart og belastning.
              </p>
              <span className="service-tag">Les mer</span>
            </Link>

          </div>
        </div>
      </section>

      {/* HOVEDINNHOLD – VELKOMMEN & KONTAKT */}
      <div className="page-wrapper">

        <section className="section">
          <h2 className="section-title">Velkommen</h2>
          <p className="section-text">
            Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø.
            Jeg tilbyr fysioterapi, osteopati og kognitiv terapi – med fokus på
            smerter, stress, overbelastning og individuelt tilpasset behandling.
          </p>
        </section>

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
