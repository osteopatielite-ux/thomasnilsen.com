export const metadata = {
  title: "Osteopati i Bodø | Moveo Klinikken",
  description:
    "Osteopati i Bodø med helhetlig behandling av muskel- og skjelettplager. Veiledning, manuelle teknikker og moderne smerteforståelse.",
};

export default function OsteopatiPage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Osteopati i Bodø</h1>
        <p style={styles.heroSubtitle}>
          Helhetlig behandling som kombinerer anatomi, fysiologi og moderne
          smerteforståelse.
        </p>
      </section>

      {/* CONTENT */}
      <section style={styles.container}>
        <h2 style={styles.heading}>Hva er osteopati?</h2>
        <p style={styles.text}>
          Osteopati er en moderne, vitenskapsbasert tilnærming som undersøker
          sammenhengen mellom muskler, ledd, bindevev, nervesystem og sirkulasjon.
          Målet er å finne årsaken til plagene – ikke bare behandle symptomene.
        </p>

        <h2 style={styles.heading}>Hvordan jobber en osteopat?</h2>
        <p style={styles.text}>
          Behandlingen starter med en grundig samtale og funksjonsundersøkelse.
          Osteopaten vurderer bevegelse, respirasjon, holdning og belastning for
          å se hvordan kroppen løser oppgavene sine – og hva som skaper smerte.
        </p>

        <h2 style={styles.heading}>Vanlige plager jeg behandler</h2>
        <ul style={styles.list}>
          <li>Spenningshodepine og migrene</li>
          <li>Nakke- og ryggsmerter</li>
          <li>Skulder- og armplager</li>
          <li>Bekkenplager og smerter i korsrygg</li>
          <li>Pustevansker, stress og muskulære spenninger</li>
          <li>Fordøyelsesrelaterte plager (ikke sykdom, men funksjonelle problem)</li>
          <li>Plager etter fall, traume eller overbelastning</li>
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
