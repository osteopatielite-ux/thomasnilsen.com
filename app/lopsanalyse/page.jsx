export const metadata = {
  title: "Løpsanalyse i Bodø | Moveo Klinikken",
  description:
    "Profesjonell løpsanalyse i Bodø – optimaliser teknikk, forebygg skader og forbedre løpsøkonomi. For nybegynnere, mosjonister og erfarne løpere.",
};

export default function LopsanalysePage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Løpsanalyse i Bodø</h1>
        <p style={styles.heroSubtitle}>
          Optimaliser løpeteknikken, forebygg skader og få mest mulig ut av
          treningen – uansett nivå.
        </p>
      </section>

      {/* CONTENT */}
      <section style={styles.container}>
        <h2 style={styles.heading}>Hva er løpsanalyse?</h2>
        <p style={styles.text}>
          Løpsanalyse handler om å kartlegge hvordan du beveger deg når du
          løper. Med videoanalyse og faglig vurdering ser vi på teknikk,
          bevegelsesmønster, belastning og hvilke faktorer som påvirker din
          løpsøkonomi og skadebelastning.
        </p>

        <h2 style={styles.heading}>Hvorfor ta en løpsanalyse?</h2>
        <ul style={styles.list}>
          <li>For å forbedre løpeteknikk og utnytte energien bedre</li>
          <li>For å redusere risikoen for belastningsskader</li>
          <li>For å forstå hva som skjer når du blir sliten</li>
          <li>For å tilpasse trening, intensitet og stegfrekvens</li>
          <li>For å få en plan som passer din kropp og dine mål</li>
        </ul>

        <h2 style={styles.heading}>Hva inkluderer en analyse?</h2>
        <ul style={styles.list}>
          <li>Videoanalyse i flere vinkler</li>
          <li>Gjennomgang av teknikk og bevegelsesmønster</li>
          <li>Vurdering av belastning, fotisett, steglengde og kadens</li>
          <li>Testing av styrke, mobilitet og stabilitet</li>
          <li>Konkrete tiltak og teknikkøvelser</li>
          <li>Individuell plan for videre trening</li>
        </ul>

        <h2 style={styles.heading}>Hvem passer det for?</h2>
        <p style={styles.text}>
          Løpsanalyse passer for alle – enten du er helt ny som løper eller
          ønsker å finjustere teknikken før konkurranse. Det er også svært nyttig
          for deg som sliter med gjentakende smerter, tung løpsfølelse eller vil
          finne ut hva som hemmer deg.
        </p>

        <a href="mailto:thomas@moveoklinikken.no" style={styles.button}>
          Bestill time
        </a>
      </section>
    </main>
  );
}

/* -------------------- STYLES -------------------- */

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    color: "#111",
  },

  hero: {
    padding: "90px 20px 60px",
    textAlign: "center",
    background: "#f7f8fa",
  },

  heroTitle: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "15px",
  },

  heroSubtitle: {
    fontSize: "20px",
    color: "#555",
    maxWidth: "650px",
    margin: "0 auto",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
    textAlign: "center",
  },

  heading: {
    fontSize: "32px",
    margin: "40px 0 15px",
    fontWeight: "700",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.7",
    marginBottom: "30px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: "40px",
    fontSize: "18px",
    lineHeight: "1.9",
  },

  button: {
    display: "inline-block",
    backgroundColor: "#00c8c8",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    textDecoration: "none",
    marginTop: "20px",
  },
};
