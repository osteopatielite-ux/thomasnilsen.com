import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <img
          src="/portrett.jpg"
          alt="Thomas Nilsen"
          className="hero-image"
        />

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
      </section>

      {/* CONTENT */}
      <main className="content">

        <section>
          <h2>Velkommen</h2>
          <p>
            Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø.
            Jeg tilbyr fysioterapi, osteopati og kognitiv terapi med fokus
            på smerter, stress og mestring.
          </p>
        </section>

        <section>
          <h2>Tjenester</h2>

          <ul className="services">
            <li><Link href="/fysioterapi">Fysioterapi</Link></li>
            <li><Link href="/osteopati">Osteopati</Link></li>
            <li><Link href="/kognitiv-terapi">Kognitiv terapi</Link></li>
            <li><Link href="/lopsanalyse">Løpsanalyse</Link></li>
            <li><Link href="/terskeltest">Terskeltest</Link></li>
          </ul>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Ta kontakt på e-post:
          </p>
          <a href="mailto:thomas@moveoklinikken.no">
            thomas@moveoklinikken.no
          </a>
        </section>

      </main>

    </div>
  );
}
