import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO – portrett + tekst */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Bevegelse. Mestring. Helse.</h1>
            <p>Fysioterapi • Osteopati • Kognitiv terapi i Bodø</p>

            <a href="mailto:thomas@moveoklinikken.no" className="hero-button">
              Bestill time
            </a>
          </div>

          <div className="hero-image">
            <Image
              src="/portrett.jpg"
              width={420}
              height={420}
              alt="Thomas Nilsen"
              className="portrait-img"
              priority
            />
          </div>
        </div>
      </section>

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
          <li><Link href="/laktat">Terskel- og laktattest</Link></li>
        </ul>
      </section>

      {/* KONTAKT */}
      <section className="section">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-text">
          For timeforespørsel eller spørsmål – send e-post til:
        </p>

        <p className="section-text">
          <a href="mailto:thomas@moveoklinikken.no" className="contact-link">
            thomas@moveoklinikken.no
          </a>
        </p>
      </section>

    </div>
  );
}
