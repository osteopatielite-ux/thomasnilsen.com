export default function Home() {
  return (
    <div>

      {/* HERO VERSJON 2 – MOVEOKLINIKKEN STIL */}
      <section className="hero-v2">
        <div className="hero-v2-inner">

          {/* TEKST */}
          <div className="hero-v2-text">
            <h1 className="hero-v2-title">Thomas Nilsen</h1>
            <p className="hero-v2-subtitle">
              Fysioterapeut • Osteopat • Kognitiv terapeut
            </p>
            <p className="hero-v2-location">Moveoklinikken · Bodø</p>

            <a
              href="mailto:thomas@moveoklinikken.no?subject=Timebestilling"
              className="hero-v2-btn"
            >
              Bestill time
            </a>
          </div>

          {/* PORTRETTBILDE */}
          <div className="hero-v2-image-wrapper">
            <img
              src="/portrett.jpg"
              alt="Portrett av Thomas Nilsen"
              className="hero-v2-image"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2 className="section-title">Velkommen</h2>
        <p className="section-text">
          Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø.
          Jeg tilbyr fysioterapi, osteopati og kognitiv terapi med fokus på
          smerter, stress, overbelastning og individuell tilpasset behandling.
        </p>
      </section>

      {/* TJENESTER */}
      <section className="section">
        <h2 className="section-title">Tjenester</h2>

        <ul className="service-list">
          <li>Fysioterapi og manuell behandling</li>
          <li>Osteopati</li>
          <li>Kognitiv terapi</li>
          <li>Behandling av stress og overbelastning</li>
          <li>Løpsanalyse og teknikkvurdering</li>
          <li>Terskel- og laktattest</li>
        </ul>
      </section>

      {/* KONTAKT */}
      <section className="section">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-text">
          For timeforespørsel eller spørsmål – send e-post til:
        </p>
        <p className="section-text">
          <a href="mailto:thomas@moveoklinikken.no" className="link">
            thomas@moveoklinikken.no
          </a>
        </p>
      </section>

    </div>
  );
}
