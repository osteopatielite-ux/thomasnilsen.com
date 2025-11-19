
import './globals.css';
import Link from "next/link";

export const metadata = {
  title: "Thomas Nilsen – Moveo",
  description: "Fysioterapi, osteopati og kognitiv terapi i Bodø.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>

        {/* HEADER */}
        <header className="header">
          <div className="header-inner">

            {/* LOGO + NAVN */}
            <div className="header-left">
              <img src="/moveo-logo.png" alt="Moveo" className="logo" />
              <span className="header-name">Thomas Nilsen</span>
            </div>

            {/* MENY */}
            <nav className="nav">
              <Link href="/">Hjem</Link>
              <Link href="/om-meg">Om meg</Link>
              <Link href="/kontakt">Kontakt</Link>

              <a href="mailto:thomas@moveoklinikken.no" className="header-button">
                Bestill time
              </a>
            </nav>

          </div>
        </header>

        {/* CONTENT */}
        <main>{children}</main>

      </body>
    </html>
  );
}
