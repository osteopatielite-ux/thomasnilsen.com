export const metadata = {
  title: "Terskel- og laktattest i Bodø | Moveo Klinikken",
  description:
    "Terskel- og laktattest i Bodø for løpere og mosjonister. Få kontroll på intensitetssoner, tren smartere og unngå overbelastning.",
};

export default function TerskeltestPage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Terskel- og laktattest</h1>
        <p style={styles.heroSubtitle}>
          Få presise intensitetssoner, tren smartere og forstå kroppen din bedre –
          enten du er mosjonist eller konkurranseløper.
        </p>
      </section>

      {/* CONTENT */}
      <section style={styles.container}>
        <h2 style={styles.heading}>Hva er terskel- og laktattest?</h2>
        <p style={styles.text}>
          En terskel- og laktattest kartlegger hvordan kroppen din reagerer på
          ulike intensiteter. Ved å måle laktat (melkesyre) i blodet under
          gradvis økende belastning, finner vi dine individuelle terskelverdier
          og intensitetssoner. Det gir et mye tryggere grunnlag for effektiv og
          skånsom trening.
        </p>

        <h2 style={styles.heading}>Hvorfor ta en slik test?</h2>
        <ul style={styles.list}>
          <li>For å finne dine personlige intensitetssoner</li>
          <li>For å unngå å trene for hardt – eller for lett</li>
          <li>For å få bedre kontroll på formutvikling og progresjon</li>
          <li>For å tilpasse treningsplanen til din hverdag og kapasitet</li>
          <li>For å redusere risikoen for overbelastning og utmattelse</li>
        </ul>

        <h2 style={styles.heading}>Hvordan foregår testen?</h2>
        <ul style={styles.list}>
          <li>Vi tar en kort samtale om mål, trening og eventuelle plager</li>
          <li>
            Du løper (eller går) i flere trinn med gradvis økende fart eller
            motbakke
          </li>
          <li>
            Mellom hvert trinn tar vi en liten blodprøve fra fingertuppen og
            måler laktat
          </li>
          <li>
            Vi registrerer puls, opplevd anstrengelse og tempo for hvert trinn
          </li>
          <li>
            Etterpå går vi gjennom resultatene sammen og forklarer hva tallene
            betyr
          </li>
          <li>
            Du får konkrete pulssoner, fartssoner og råd til videre trening
          </li>
        </ul>

        <h2 style={styles.heading}>Hvem passer testen for?</h2>
        <p style={styles.text}>
          Terskel- og laktattest passer både for deg som er nysgjerrig på hvordan
          kroppen reagerer på belastning, og for deg som vil trene mer målrettet
          mot løp, turer eller generell form. Den er spesielt nyttig hvis du:
        </p>

        <ul style={styles.list}>
          <li>Trener jevnlig, men opplever lite fremgang</li>
          <li>Blir ofte veldig sliten eller tung mellom øktene</li>
          <li>Opplever tilbakevendende overbelastningsplager</li>
          <li>Vil ha bedre kontroll på intensitet i intervaller og langturer</li>
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
    maxWidth: "700px",
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
    marginBottom: "35px",
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
    marginTop: "10px",
  },
};
