export const metadata = {
  title: "Kognitiv terapi i Bodø | Moveo Klinikken",
  description:
    "Kognitiv terapi i Bodø – hjelp ved stress, tankekjør, angst, smerter og livsbelastninger. Trygge samtaler, strategier og mental styrke.",
};

export default function KognitivTerapiPage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Kognitiv terapi i Bodø</h1>
        <p style={styles.heroSubtitle}>
          For deg som sliter med stress, tankekjør, uro eller mentale
          belastninger – og ønsker ro, oversikt og bedre mestring.
        </p>
      </section>

      {/* CONTENT */}
      <section style={styles.container}>
        <h2 style={styles.heading}>Hva er kognitiv terapi?</h2>
        <p style={styles.text}>
          Kognitiv terapi handler om samspillet mellom tanker, følelser,
          kroppslige reaksjoner og handlinger. Målet er å hjelpe deg med å forstå
          egne mønstre og skape endring som gir mer ro, trygghet og kontroll i
          hverdagen.
        </p>

        <h2 style={styles.heading}>Vanlige tema vi jobber med</h2>
        <ul style={styles.list}>
          <li>Stress, indre uro og overtenking</li>
          <li>Engstelse, bekymringer og sosial uro</li>
          <li>Nedstemthet og lav motivasjon</li>
          <li>Søvnproblemer og tankekjør</li>
          <li>Smerter som påvirker tanker og følelser</li>
          <li>Belastninger i jobb, relasjoner eller hverdagen</li>
          <li>Perfeksjonisme og høye krav til seg selv</li>
        </ul>

        <h2 style={styles.heading}>Hvordan foregår terapien?</h2>
        <p style={styles.text}>
          Samtalene har en trygg, rolig og jordnær form. Vi starter med å kartlegge
          hva du står i, hva som stresser deg og hvordan dette påvirker hverdagen.
          Deretter jobber vi med konkrete teknikker, mental fleksibilitet,
          pust/tilstedeværelse og strategier som passer din situasjon.
        </p>

        <h2 style={styles.heading}>Trygt, folkelig og effektivt</h2>
        <p style={styles.text}>
          Kognitiv terapi handler ikke om å grave i fortiden – men om å forstå
          mønstrene som holder deg fast i stress, uro eller smerter, og om å bygge
          nye verktøy som gir bedre livskvalitet.
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
