import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Thomas Nilsen – Fysioterapeut, Osteopat og Kognitiv terapeut i Bodø",
  description:
    "Behandling av smerter, stress og overbelastning. Fysioterapi, osteopati og kognitiv terapi hos Thomas Nilsen ved Moveoklinikken i Bodø.",
  keywords: [
    "Fysioterapi Bodø",
    "Osteopati Bodø",
    "Kognitiv terapi Bodø",
    "Thomas Nilsen",
    "Moveoklinikken",
    "Fysioterapeut",
    "Osteopat",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>

        {/* PAGE WRAPPER */}
        <div className="page-wrapper">

          {/* HEADER */}
          <header className="site-header">
            <div className="header-inner">

              {/* BRAND + LOGO */}
              <div className="brand-wrapper">
                <img
                  src="/moveo-logo.png"
                  alt="Moveo logo"
                  className="moveo-logo"
                />

                <div className="brand-text">
                  <div className="brand-name">Thomas Nilsen</div>
                  <div className="brand-role">
                    Fysioterapeut • Osteopat • Kognitiv terapeut
                  </div>
                  <div className="brand-clinic">Moveoklinikken · Bodø</div>
                </div>
              </div>

              {/* NAV */}
              <nav className="main-nav">
                <Link className="nav-link" href="/">Hjem</Link>
                <Link className="nav-link" href="/om-meg">Om meg</Link>
                <Link className="nav-link" href="/kontakt">Kontakt</Link>
              </nav>

            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="page-inner">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="site-footer">
            <div className="footer-inner">
              <span>© {new Date().getFullYear()} Thomas Nilsen – Moveoklinikken</span>
              <span>Fysioterapi • Osteopati • Kognitiv terapi • Bodø</span>
            </div>
          </footer>

        </div>

      </body>
    </html>
  );
}
