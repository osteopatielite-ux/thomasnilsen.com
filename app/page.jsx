export default function Home() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>

          <img
            src="/portrett.jpg"
            alt="Thomas Nilsen"
            style={styles.heroImage}
          />

          <div style={styles.heroTextBlock}>
            <h1 style={styles.heroTitle}>Smerter, stress eller tankekjør?</h1>
            <p style={styles.heroSubtitle}>Jeg hjelper deg videre.</p>

            <a href="mailto:thomas@moveoklinikken.no" style={styles.heroButton}>
              Bestill time
            </a>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <div style={styles.content}>

        {/* Velkommen */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Velkommen</h2>
          <p style={styles.sectionText}>
            Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø.  
            Jeg tilbyr fysioterapi, osteopati og kognitiv terapi – med fokus på 
            smerter, stress, overbelastning og individuelt tilpasset behandling.
          </p>
        </section>

        {/* Tjenester */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tjenester</h2>

          <ul style={styles.list}>
            <li style={styles.listItem}>Fysioterapi og manuell behandling</li>
            <li style={styles.listItem}>Osteopati</li>
            <li style={styles.listItem}>Kognitiv terapi</li>
            <li style={styles.listItem}>Løpsanalyse og teknikkvurdering</li>
            <li style={styles.listItem}>Terskel- og laktattest</li>
          </ul>
        </section>

        {/* Kontakt */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Kontakt</h2>
          <p style={styles.sectionText}>
            For timeforespørsel eller spørsmål – send e-post:
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
// INLINE STYLES — HOLDER ALT STABILT OG LIKT OVERALT
//
const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    color: "#000",
    textAlign: "center",
  },

  /* HERO */
  heroSection: {
    backgroundColor: "#fafafa",
    padding: "60px 20px",
    borderBottom: "1px solid #eee",
  },
  heroContainer: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  heroImage: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  },
  heroTextBlock: {},
  heroTitle: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "25px",
  },
  heroButton: {
    display: "inline-block",
    background: "#00c8c8",
    padding: "12px 22px",
    borderRadius: "6px",
    color: "#000",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "16px",
  },

  /* CONTENT */
  content: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "0 20px",
    color: "#000",
  },
  section: {
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  sectionText: {
    fontSize: "18px",
    lineHeight: "1.6",
  },

  /* LIST */
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "18px",
  },
  listItem: {
    padding: "8px 0",
  },

  mailLink: {
    fontSize: "18px",
    color: "#000",
    fontWeight: "600",
    textDecoration: "none",
  },
};
