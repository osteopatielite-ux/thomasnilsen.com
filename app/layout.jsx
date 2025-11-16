import "./globals.css";

export const metadata = {
  title: "Thomas Nilsen – Fysioterapi, Osteopati, Kognitiv Terapi",
  description: "Moveoklinikken Bodø – behandling, bevegelse og helse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>

        <header className="site-header">
          <div className="header-inner">

            {/* LOGO + NAVN */}
            <div className="header-left">
              <img src="/moveo-logo.png" alt="Moveoklinikken logo" className="header-logo" />
              <span className="header-name">Thomas Nilsen</span>
            </div>

            {/* NAV + BOOKING */}
            <nav className="header-nav">
              <a href="/" className="nav-link">Hjem</a>
              <a href="/om-meg" className="nav-link">Om meg</a>
              <a href="/kontakt" className="nav-link">Kontakt</a>

              <a
                href="https://instagram.com/osteopat_thomas"
                className="nav-book"
                target="_blank"
              >
                Bestill time
              </a>
            </nav>

          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} Thomas Nilsen · Moveoklinikken Bodø
        </footer>

      </body>
    </html>
  );
}
