import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <img src="/portrett.jpg" alt="Thomas Nilsen" className="hero-image" />

          <div className="hero-text">
            <h1 className="hero-title">Smerter, stress eller tankekjør?</h1>
            <p className="hero-subtitle">Jeg hjelper deg videre.</p>

            <a className="hero-button" href="mailto:thomas@moveoklinikken.no">
              Bestill time
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <h2 className="section-title">Velkommen</h2>
        <p className="section-text">
          Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø.  
          Jeg tilbyr fysioterapi, osteopati og kognitiv terapi – med fokus på smerter,
          stress, overbelastning og individuelt tilpasset behandling.
        </p>
      </section>

      {/* TJENESTER */}
      <section className="section">
        <h2 className="section-title">Tjenester</h2>

        <ul className="service-list">
          <li><Link href="/fysioterapi">Fysioterapi og manuell behandling</Link></li>
          <li><Link href="/osteopati">Osteopati</Link></li>
          <li><Link href="/kognitiv-terapi">Kognitiv terapi</Link></li>
          <li><Link href="/lopsanalyse">Løpsanalyse og teknikkvurdering</Link></li>
          <li><Link href="/terskel-laktat">Terskel- og laktattest</Link></li>
        </ul>
      </section>

      {/* KONTAKT */}
      <section className="section">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-text">
          For timeforespørsel eller spørsmål – send e-post til:
        </p>
        <p className="section-text">
          <a href="mailto:thomas@moveoklinikken.no">
            thomas@moveoklinikken.no
          </a>
        </p>
      </section>

    </div>
  );
}
