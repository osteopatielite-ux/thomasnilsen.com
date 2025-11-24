export const metadata = {
  title: "Fysioterapi i Bodø | Moveo Klinikken",
  description:
    "Profesjonell fysioterapi i Bodø. Individuell oppfølging, smertebehandling og moderne undersøkelse. Bestill time hos Thomas Nilsen.",
};

export default function FysioterapiPage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Fysioterapi i Bodø</h1>
        <p style={styles.heroSubtitle}>
          Trygg, faglig sterk og individuelt tilpasset hjelp for smerter og
          overbelastning.
        </p>
      </section>

      {/* CONTENT */}
      <section style={styles.container}>
        <h2 style={styles.heading}>Hva er fysioterapi?</h2>
        <p style={styles.text}>
          Fysioterapi er en sentral del av moderne medisin – fundert på anatomi,
          fysiologi, nevrologi og bevegelsesvitenskap. Målet er å hjelpe kroppen
          tilbake til normal funksjon gjennom undersøkelse, veiledet trening og
          manuelle teknikker.
        </p>

        <h2 style={styles.heading}>Hva gjør en fysioterapeut?</h2>
        <p style={styles.text}>
          En fysioterapeut forebygger og behandler plager som gir smerte eller
          nedsatt funksjon i muskler, ledd og nervesystem. Behandlingen starter
          alltid med samtale og en grundig funksjonsvurdering slik at vi forstår
          hvorfor plagene oppstår – og hvordan vi løser dem.
        </p>

        <h2 style={styles.heading}>Hva behandler jeg?</h2>
        <ul style={styles.list}>
          <li>Rygg- og nakkesmerter</li>
          <li>Skulder-, hofte- og kneplager</li>
          <li>Betennelser og overbelastning</li>
          <li>Idrettsskader</li>
          <li>KOLS, hjerte- og lungelidelser</li>
          <li>Plager etter operasjoner</li>
          <li>Stressrelaterte muskelspenninger</li>
        </ul>

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
    maxWidth: "600px",
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
