import "./globals.css";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://thomasnilsen.com"),

  title: {
    default: "Fysioterapi, Osteopati & Kognitiv Terapi i Bodø – Thomas Nilsen",
    template: "%s | Thomas Nilsen – Moveoklinikken Bodø",
  },

  description:
    "Profesjonell behandling innen fysioterapi, osteopati, kognitiv terapi, løpsanalyse og terskeltest i Bodø. Thomas Nilsen – 20 års erfaring innen muskel- og skjeletthelse, stressmestring og mental trening.",

  keywords: [
    "fysioterapi Bodø",
    "fysioterapeut Bodø",
    "osteopati Bodø",
    "osteopat Bodø",
    "kognitiv terapi Bodø",
    "kognitiv terapeut Bodø",
    "løpsanalyse Bodø",
    "terskeltest Bodø",
    "laktat test Bodø",
    "stress behandling Bodø",
    "tankekjør hjelp Bodø",
    "Moveoklinikken Bodø",
    "Thomas Nilsen"
  ],

  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://thomasnilsen.com",
    siteName: "Thomas Nilsen – Moveoklinikken Bodø",
    title: "Fysioterapi, Osteopati & Kognitiv Terapi i Bodø",
    description:
      "Behandling av smerter, stress, overbelastning og mentale plager. 20 års erfaring. Bestill time i dag.",
    images: [
      {
        url: "/portrett.jpg",
        width: 1200,
        height: 1600,
        alt: "Thomas Nilsen – Fysioterapi, osteopati og kognitiv terapi i Bodø",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fysioterapi, Osteopati & Kognitiv Terapi i Bodø – Thomas Nilsen",
    description:
      "Profesjonell behandling innen muskel- og skjeletthelse, stressmestring og mental helse.",
    images: ["/portrett.jpg"],
  },

  alternates: {
    canonical: "https://thomasnilsen.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

// -------------------- STRUCTURED DATA (SEO PRO) --------------------
const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Moveoklinikken Bodø – Thomas Nilsen",
  description:
    "Fysioterapi, osteopati, kognitiv terapi, løpsanalyse og terskeltest i Bodø.",
  image: "https://thomasnilsen.com/portrett.jpg",
  url: "https://thomasnilsen.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Storgata",
    addressLocality: "Bodø",
    addressRegion: "Nordland",
    postalCode: "8000",
    addressCountry: "NO",
  },
  medicalSpecialty: [
    "Physiotherapy",
    "Osteopathy",
    "CognitiveBehavioralTherapy",
    "SportsInjury",
  ],
  employee: {
    "@type": "Person",
    name: "Thomas Nilsen",
    jobTitle: "Fysioterapeut • Osteopat • Kognitiv terapeut",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>
        {/* Structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body>

        {/* ---------------- HEADER ---------------- */}
        <header className="header">
          <div className="header-inner">

            <div className="header-left">
              <img src="/moveo-logo.png" alt="Moveoklinikken logo" className="header-logo" />
              <span className="header-name">Thomas Nilsen</span>
            </div>

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

        {/* ---------------- PAGE CONTENT ---------------- */}
        <main>{children}</main>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-col">
              <img src="/moveo-logo.png" className="footer-logo" alt="Moveo logo" />
              <div className="footer-name">Thomas Nilsen</div>
              <div className="footer-role">
                Fysioterapi • Osteopati • Kognitiv terapi • Løpsanalyse
              </div>
            </div>

            <div className="footer-col">
              <h4>Behandlinger</h4>
              <Link href="/fysioterapi">Fysioterapi</Link>
              <Link href="/osteopati">Osteopati</Link>
              <Link href="/kognitiv-terapi">Kognitiv terapi</Link>
              <Link href="/lopsanalyse">Løpsanalyse</Link>
              <Link href="/terskeltest">Terskeltest</Link>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <a href="mailto:thomas@moveoklinikken.no">
                thomas@moveoklinikken.no
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
