import "./globals.css";

export const metadata = {
  title: "Fysioterapi, Osteopati og Kognitiv Terapi i Bodø – Thomas Nilsen",
  description:
    "Thomas Nilsen ved Moveoklinikken i Bodø tilbyr fysioterapi, osteopati, kognitiv terapi og løpsanalyse – med fokus på smerter, stress, overbelastning og personlig oppfølging.",
  keywords: [
    "fysioterapi Bodø",
    "osteopat Bodø",
    "kognitiv terapi Bodø",
    "fysioterapeut Bodø",
    "løpsanalyse Bodø",
    "laktat test Bodø",
    "stress og smerter behandling",
    "Thomas Nilsen fysioterapeut",
    "Moveoklinikken Bodø"
  ],
  openGraph: {
    title: "Thomas Nilsen – Fysioterapi, Osteopati og Kognitiv Terapi i Bodø",
    description:
      "Profesjonell behandling for smerter, stress, overbelastning og løpsrelaterte plager.",
    url: "https://thomasnilsen.com",
    siteName: "Thomas Nilsen",
    images: [
      {
        url: "/portrett.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Nilsen – fysioterapeut i Bodø"
      }
    ],
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>
        {/* HEADER */}
        <header className="header">
          <div className="header-inner">

            <div className="header-left">
              <img src="/moveo-logo.png" alt="Moveo logo" className="header-logo" />
              <div className="header-name">Thomas Nilsen</div>
            </div>

            <nav className="nav">
              <a href="/">Hjem</a>
              <a href="/om-meg">Om meg</a>
              <a href="/kontakt">Kontakt</a>
            </nav>

            <a href="mailto:thomas@moveoklinikken.no" className="header-button">
              Bestill time
            </a>

          </div>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">

            <div className="footer-col">
              <img src="/moveo-logo.png" className="footer-logo" />
              <div className="footer-name">Thomas Nilsen</div>
              <div className="footer-role">
                Fysioterapi • Osteopati • Kognitiv terapi
              </div>
            </div>

            <div className="footer-col">
              <h4>Behandling</h4>
              <a href="/fysioterapi">Fysioterapi</a>
              <a href="/osteopati">Osteopati</a>
              <a href="/kognitiv-terapi">Kognitiv terapi</a>
              <a href="/lopsanalyse">Løpsanalyse</a>
              <a href="/terskeltest">Laktat/terskeltest</a>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <a href="mailto:thomas@moveoklinikken.no">thomas@moveoklinikken.no</a>
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
