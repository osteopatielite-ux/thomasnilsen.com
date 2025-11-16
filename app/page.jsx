import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-section" style={styles.heroSection}>
        <div style={styles.heroWrapper}>
          <img
            src="/portrett.jpg"
            alt="Thomas Nilsen"
            style={styles.heroImage}
          />

          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Smerter, stress eller tankekjør?
            </h1>
            <p style={styles.heroSubtitle}>
              Jeg hjelper deg videre.
            </p>

            <a href="mailto:thomas@moveoklinikken.no" style={styles.heroButton}>
              Bestill time
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div style={styles.pageContainer}>
        
        {/* VELKOMMEN */}
        <section>
          <h2 style={styles.sectionTitle}>Velkommen</h2>
          <p style={styles.sectionText}>
            Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø. 
            Jeg tilbyr fysioterapi, osteopati og kognitiv terapi – med fokus på 
            smerter, stress, overbelastning og individuelt tilpasset behandling.
          </p>
        </section>

        {/* TJENESTER */}
        <section>
          <h2 style={styles.sectionTitle}>Tjenester</h2>

          <ul style={styles.ul}>
            <li><Link href="/fysioterapi">Fysioterapi og manuell behandling</Link></li>
            <li><Link href="/osteopati">Osteopati</Link></li>
            <li><Link href="/kognitiv-terapi">Kognitiv terapi</Link></li>
            <li><Link href="/lopsanalyse">Løpsanalyse og teknikkvurdering</Link></li>
            <li><Link href="/terskeltest">Terskel- og laktattest</Link></li>
          </ul>
        </section>

        {/* KONTAKT */}
        <section>
          <h2 style={styles.sectionTitle}>Kontakt</h2>
          <p style={styles.sectionText}>
            For timeforespørsel eller spørsmål – send e-post til:
          </p>
          <a href="mailto:thomas@moveoklinikken.no" style={styles.mailLink}>
            thomas@moveoklinikken.no
          </a>
        </section>

      </div>
    </div>
  );
}

//
// INLINE STYLES
//
const styles = {
  heroSection: {
    width: "100%",
    padding: "60px 0",
    display: "flex",
    justifyContent: "center",
    background: "#fafafa",
    borderBottom: "1px solid #eee",
  },
  heroWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "20px",
    maxWidth: "600px",
    padding: "0 20px",
  },
  heroImage: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  heroText: {
    maxWidth: "500px",
  },
  heroTitle: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#444",
    marginBottom: "25px",
  },
  heroButton: {
    background: "#00c8c8",
    color: "#000",
    padding: "12px 22px",
    borderRadius: "6px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "16px",
  },
  pageContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  sectionText: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "25px",
  },
  ul: {
    listStyle: "disc",
    paddingLeft: "20px",
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "30px",
  },
  mailLink: {
    fontSize: "18px",
    color: "#0066cc",
  },
};
