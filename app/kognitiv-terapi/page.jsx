export const metadata = {
  title: "Kognitiv terapi i Bodø | Stress, tankekjør og mental helse – Thomas Nilsen",
  description:
    "Kognitiv terapi i Bodø hos Thomas Nilsen ved Moveoklinikken. Hjelp mot stress, tankekjør, uro, angst og negative tanke- og adferdsmønstre. Bestill time enkelt.",
  keywords: [
    "kognitiv terapi Bodø",
    "kognitiv terapeut Bodø",
    "terapeut stress Bodø",
    "tankekjør hjelp Bodø",
    "mental helse Bodø",
    "angst behandling Bodø",
    "uro og stress Bodø",
    "CBT Bodø",
    "Thomas Nilsen",
    "Moveoklinikken Bodø"
  ],
  openGraph: {
    title: "Kognitiv terapi i Bodø | Moveoklinikken – Thomas Nilsen",
    description:
      "Profesjonell kognitiv terapi i Bodø. Spesialisert hjelp med stress, tankekjør, uro, angst og livsbelastninger. Moderne, trygg og effektiv behandling.",
    url: "https://thomasnilsen.com/kognitiv-terapi",
    type: "article",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  name: "Kognitiv terapi",
  description:
    "Kognitiv terapi i Bodø for personer med stress, overtenking, uro, angst og mentale belastninger. Moderne tilnærming basert på kognitiv atferdsterapi (CBT).",
  provider: {
    "@type": "Person",
    name: "Thomas Nilsen",
    jobTitle: "Kognitiv terapeut, fysioterapeut og osteopat",
    worksFor: {
      "@type": "MedicalClinic",
      name: "Moveoklinikken Bodø",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bodø",
        addressRegion: "Nordland",
        addressCountry: "NO"
      }
    }
  },
  areaServed: {
    "@type": "City",
    name: "Bodø"
  },
  url: "https://thomasnilsen.com/kognitiv-terapi"
};

export default function KognitivTerapiPage() {
  return (
    <main style={styles.page}>

      {/* Structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Kognitiv terapi i Bodø</h1>
        <p style={styles.heroSubtitle}>
          For deg som sliter med stress, tankekjør, uro eller mentale belastninger — jeg hjelper deg finne ro og handlekraft.
        </p>
      </section>

      {/* INNHOLD */}
      <section style={styles.container}>

        <h2 style={styles.heading}>Hva er kognitiv terapi?</h2>
        <p style={styles.text}>
          Kognitiv terapi (ofte kalt kognitiv atferdsterapi, CBT) handler om
          å kartlegge og endre tanke- og handlingsmønstre som opprettholder
          ubehag. Metodene er praktiske og målrettede, og fokuserer på verktøy
          du kan bruke i hverdagen for å få bedre kontroll over tanker, følelser
          og handlinger.
        </p>

        <h2 style={styles.heading}>Vanlige problemstillinger i Bodø</h2>
        <p style={styles.text}>
          Mange i Bodø oppsøker kognitiv terapi for stress, overtenking,
          søvnproblemer, angst, lav motivasjon eller problemer knyttet til
          langvarig smerte. Min tilnærming er folkelig, trygg og konkret —
          jeg hjelper deg finne løsninger som fungerer i din hverdag.
        </p>

        <h2 style={styles.heading}>Hva kan jeg hjelpe med?</h2>
        <ul style={styles.list}>
          <li>Stress, indre uro og overtenking</li>
          <li>Angst, bekymringer og panikkfølelse</li>
          <li>Nedstemthet og lavt energinivå</li>
          <li>Søvnproblemer påvirket av tankekjør</li>
          <li>Mestring ved kroniske smerter og helseutfordringer</li>
          <li>Forebygging av tilbakefall og vedlikeholdsstrategier</li>
        </ul>

        <h2 style={styles.heading}>Hvordan foregår terapien?</h2>
        <p style={styles.text}>
          Vi starter med en grundig kartlegging av hva som plager deg, og hvilke
          situasjoner som opprettholder problemene. Deretter jobber vi med
          praktiske øvelser, atferdsaktivering, kognitiv omstrukturering og
          konkrete hjemmeoppgaver. Terapi er en aktiv prosess — målet er at du
          skal bli din egen terapeut over tid.
        </p>

        <h2 style={styles.heading}>Bestill time i Bodø</h2>
        <p style={styles.text}>
          Jeg tar imot pasienter fra hele Bodø og nærområdet. Dersom du ønsker
          en trygg og konkret tilnærming for å få mindre stress og mer kontroll,
          ta kontakt.
        </p>

        <a href="mailto:thomas@moveoklinikken.no" style={styles.button}>
          Bestill time eller still spørsmål
        </a>

        {/* SEO-tillegg (naturlig og skjult innenfor teksten) */}
        <p style={styles.seoHidden}>
          Kognitiv terapi Bodø, kognitiv terapeut Bodø, CBT Bodø, hjelp mot
          tankekjør i Bodø, behandling av angst og stress i Bodø, terapi nær
          meg Bodø.
        </p>
      </section>
    </main>
  );
}

/* -------------------- INLINE STYLES -------------------- */

const styles = {
  page: {
    fontFamily: "Arial, Helvetica, sans-serif",
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
    marginBottom: "12px",
    color: "#000"
  },

  heroSubtitle: {
    fontSize: "20px",
    color: "#444",
    maxWidth: "760px",
    margin: "0 auto"
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
    textAlign: "center"
  },

  heading: {
    fontSize: "30px",
    margin: "36px 0 12px",
    fontWeight: "700"
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "18px"
  },

  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: "30px",
    fontSize: "18px",
    lineHeight: "1.9",
    textAlign: "left",
    maxWidth: "720px",
    marginLeft: "auto",
    marginRight: "auto"
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
    marginTop: "10px"
  },

  seoHidden: {
    fontSize: "12px",
    color: "#444",
    opacity: 0.02, /* synlig for crawling men veldig diskret for brukere */
    height: "6px",
    overflow: "hidden",
    marginTop: "20px"
  }
};
