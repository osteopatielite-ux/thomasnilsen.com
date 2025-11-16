export default function Home() {
  return (
    <div>

      {/* NY PORTRETT-HERO */}
      <section className="hero-portrait">
        <div className="hero-portrait-inner">

          <div className="hero-text">
            <h1 className="hero-title">Thomas Nilsen</h1>
            <p className="hero-subtitle">
              Fysioterapeut • Osteopat • Kognitiv terapeut
            </p>
            <p className="hero-location">Moveoklinikken · Bodø</p>
          </div>

          <div className="hero-image-container">
            <img
              src="/portrett.jpg"
              alt="Portrett av Thomas Nilsen"
              className="hero-image"
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
          For timeforespørsel eller spørsmål – kontakt meg via Instagram:
        </p>
        <p className="section-text">
          <a href="https://instagram.com/osteopat_thomas" target="_blank" className="link">
            @osteopat_thomas
          </a>
        </p>
      </section>

    </div>
  );
}
