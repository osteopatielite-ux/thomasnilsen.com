import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-inner">

          {/* VENSTRE – TEKST */}
          <div className="hero-left">
            <h1 className="hero-title">
              Smerter, stress eller<br />tankekjør? Jeg hjelper deg<br />videre.
            </h1>

            <p className="hero-subtitle">
              Fysioterapi • Osteopati • Kognitiv terapi i Bodø
            </p>

            <a href="mailto:thomas@moveoklinikken.no" className="hero-button">
              Bestill time
            </a>
          </div>

          {/* HØYRE – BILDE */}
          <div className="hero-right">
            <img
              src="/portrett.jpg"
              alt="Thomas Nilsen"
              className="hero-image"
            />
          </div>

        </div>
      </section>

      {/* HOVEDINNHOLD */}
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

          <ul className="service-list">
            <li><Link href="/fysioterapi">Fysioterapi og manuell behandling</Link></li>
            <li><Link href="/osteopati">Osteopati</Link></li>
            <li><Link href="/kognitiv-terapi">Kognitiv terapi</Link></li>
            <li><Link href="/lopsanalyse">Løpsanalyse og teknikkvurdering</Link></li>
            <li><Link href="/terskeltest">Terskel- og laktattest</Link></li>
          </ul>
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
