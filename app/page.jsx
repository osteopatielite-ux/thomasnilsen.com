import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.main}>

      {/* HERO */}
      <section style={styles.heroSection}>
        <div style={styles.heroInner}>

          {/* Venstre tekst */}
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>
              Smerter, stress eller<br />tankekjør? Jeg hjelper deg<br />videre.
            </h1>

            <p style={styles.heroSubtitle}>
              Fysioterapi • Osteopati • Kognitiv terapi i Bodø
            </p>

            <a href="mailto:thomas@moveoklinikken.no" style={styles.heroButton}>
              Bestill time
            </a>
          </div>

          {/* Høyre bilde */}
          <div style={styles.heroRight}>
            <img
              src="/portrett.jpg"
              alt="Thomas Nilsen"
              style={styles.heroImage}
            />
          </div>

        </div>
      </section>
    </main>
  );
}

//
// ---------------------------- STYLES ----------------------------
//
const styles = {
  main: {
    fontFamily: "Arial, sans-serif",
    color: "#000",
  },

  heroSection: {
    padding: "80px 20px",
    backgroundColor: "#f7f8fa",
  },

  heroInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
  },

  /* LEFT SIDE */
  heroLeft: {
    flex: 1,
  },

  heroTitle: {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.25",
    marginBottom: "25px",
  },

  heroSubtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },

  heroButton: {
    display: "inline-block",
    backgroundColor: "#00c8c8",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    textDecoration: "none",
  },

  /* RIGHT SIDE */
  heroRight: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  heroImage: {
    width: "420px",
    height: "520px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
};
