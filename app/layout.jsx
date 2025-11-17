import "./globals.css";

export const metadata = {
  title: "Thomas Nilsen – Fysioterapi • Osteopati • Kognitiv terapi",
  description: "Smerter, stress eller tankekjør? Jeg hjelper deg videre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>

        {/* HEADER */}
        <header className="header">
          <div className="header-inner">
            <div className="header-left">
              <img src="/moveo-logo.png" className="header-logo" alt="Moveo" />
              <span className="header-name">Thomas Nilsen</span>
            </div>

            <nav className="nav">
              <a href="/">Hjem</a>
              <a href="/om-meg">Om meg</a>
              <a href="/kontakt">Kontakt</a>
              <a className="header-button" href="mailto:thomas@moveoklinikken.no">
                Bestill time
              </a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
