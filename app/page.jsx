export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Bevegelse. Mestring. Helse.</h1>
          <p className="hero-subtitle">
            Fysioterapi • Osteopati • Kognitiv terapi i Bodø
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2 className="section-title">Velkommen</h2>
        <p className="section-text">
          Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø.
          Jeg tilbyr fysioterapi, osteopati og kognitiv terapi – med fokus på
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
          <li>Løpsanalyse og skadeforebygging</li>
          <li>Diabetesgruppe – trening og livsstil</li>
        </ul>
      </section>

      {/* KONTAKT */}
      <section className="section">
        <h2 className="section-title">Kontakt</h2>

        <p className="section-text">
          Du kan ta kontakt via Instagram:
        </p>

        <p className="section-text">
          <a
            href="https://instagram.com/osteopat_thomas"
            className="contact-link"
            target="_blank"
          >
            @osteopat_thomas
          </a>
        </p>
      </section>

    </div>
  );
}
