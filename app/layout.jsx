import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Thomas Nilsen – Fysioterapi, Osteopati & Kognitiv Terapi i Bodø",
  description:
    "Behandling innen fysioterapi, osteopati, kognitiv terapi, løpsanalyse og terskeltest. Moveoklinikken Bodø – med fokus på smerte, stress og mestring.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>

        {/* ---------------- HEADER ---------------- */}
        <header className="header">
          <div className="header-inner">

            {/* Logo + navn */}
            <div className="header-left">
              <img src="/moveo-logo.png" alt="Moveoklinikken Logo" className="header-logo" />

              <div className="header-text">
                <div className="header-name">Thomas Nilsen</div>
                <div className="header-role">
                  Fysioterapeut • Osteopat • Kognitiv terapeut
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="nav">
              <Link href="/">Hjem</Link>
              <Link href="/fysioterapi">Fysioterapi</Link>
              <Link href="/osteopati">Osteopati</Link>
              <Link href="/kognitiv-terapi">Kognitiv terapi</Link>
              <Link href="/lopsanalyse">Løpsanalyse</Link>
              <Link href="/terskeltest">Terskeltest</Link>
              <Link href="/podcast">Podcast</Link>
              <Link href="/kontakt">Kontakt</Link>
            </nav>

            {/* Book time */}
            <a href="mailto:thomas@moveoklinikken.no" className="header-button">
              Bestill time
            </a>

          </div>
        </header>

        {/* ---------------- CONTENT ---------------- */}
        <main>{children}</main>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="footer">
          <div className="footer-inner">

            <div className="footer-col">
              <img src="/moveo-logo.png" className="footer-logo" alt="Moveoklinikken logo" />
              <div className="footer-name">Thomas Nilsen</div>
              <div className="footer-role">
                Fysioterapeut • Osteopat • Kognitiv terapeut
              </div>
            </div>

            <div className="footer-col">
              <h4>Behandling</h4>
              <Link href="/fysioterapi">Fysioterapi</Link>
              <Link href="/osteopati">Osteopati</Link>
              <Link href="/kognitiv-terapi">Kognitiv terapi</Link>
              <Link href="/lopsanalyse">Løpsanalyse</Link>
              <Link href="/terskeltest">Terskeltest</Link>
              <Link href="/podcast">Podcast</Link>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <a href="mailto:thomas@moveoklinikken.no">E-post</a>
              <a
                href="https://www.instagram.com/osteopat_thomas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Thomas Nilsen – Moveoklinikken Bodø
          </div>
        </footer>

      </body>
    </html>
  );
}
