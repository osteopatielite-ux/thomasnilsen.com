// app/layout.jsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Thomas Nilsen – Moveoklinikken Bodø",
  description:
    "Fysioterapi, osteopati og kognitiv terapi for smerter, stress og tankekjør i Bodø.",
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
              <img src="/moveo-logo.png" alt="Moveo logo" className="header-logo" />
              <span className="header-name">Thomas Nilsen</span>
            </div>

            {/* Navigasjon */}
            <nav className="nav">
              <Link href="/">Hjem</Link>
              <Link href="/fysioterapi">Fysioterapi</Link>
              <Link href="/osteopati">Osteopati</Link>
              <Link href="/kognitiv-terapi">Kognitiv terapi</Link>
              <Link href="/kontakt">Kontakt</Link>
            </nav>

            {/* Knapp */}
            <a href="mailto:thomas@moveoklinikken.no" className="header-button">
              Bestill time
            </a>

          </div>
        </header>

        {/* Sideinnhold */}
        <main className="page-wrapper">{children}</main>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="footer">
          <div className="footer-inner">

            <div className="footer-col">
              <img src="/moveo-logo.png" className="footer-logo" />
              <p className="footer-name">Thomas Nilsen</p>
              <p className="footer-role">
                Fysioterapeut • Osteopat • Kognitiv terapeut
              </p>
            </div>

            <div className="footer-col">
              <h4>Behandling</h4>
              <Link href="/fysioterapi">Fysioterapi</Link>
              <Link href="/osteopati">Osteopati</Link>
              <Link href="/kognitiv-terapi">Kognitiv terapi</Link>
              <Link href="/lopsanalyse">Løpsanalyse</Link>
              <Link href="/laktat">Laktattest</Link>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <a href="mailto:thomas@moveoklinikken.no">
                thomas@moveoklinikken.no
              </a>
              <a
                href="https://instagram.com/osteopat_thomas"
                target="_blank"
              >
                @osteopat_thomas
              </a>
              <p>Moveoklinikken, Bodø</p>
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
