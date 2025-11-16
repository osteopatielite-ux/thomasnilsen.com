import Link from "next/link";

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

          <Link href="mailto:thomas@moveoklinikken.no" className="hero-button">
            Bestill time
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2 className="section-title">Velkommen</h2>
        <p className="section-text">
          Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø.  
          Jeg tilbyr fysioterapi, osteopati og kognitiv terapi – med fokus på 
          smerter, stress, overbelastning, og individuell tilpasset behandling.
        </p>
      </section>

      {/* TJENESTER */}
      <section className="section">
        <h2 className="section-title">Tjenester</h2>

        <ul className="service-list">

          <li>
            <Link href="/fysioterapi" className="service-link">
              Fysioterapi og manuell behandling
            </Link>
          </li>

          <li>
            <Link href="/osteopati" className="service-link">
              Osteopati
            </Link>
          </li>

          <li>
            <Link href="/kognitiv-terapi" className="service-link">
              Kognitiv terapi
            </Link>
          </li>

          <li>
            <Link href="/lopsanalyse" className="service-link">
              Løpsanalyse og teknikkvurdering
            </Link>
          </li>

          <li>
            <Link href="/terskeltest" className="service-link">
              Terskel- og laktattest
            </Link>
          </li>

        </ul>
      </section>

      {/* KONTAKT */}
      <section className="section">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-text">
          For timeforespørsel eller spørsmål – send e-post til:
        </p>

        <a href="mailto:thomas@moveoklinikken.no" className="contact-email">
          thomas@moveoklinikken.no
        </a>
      </section>

    </div>
  );
}
