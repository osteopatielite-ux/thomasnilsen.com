export const metadata = {
  title: "Fysioterapi i Bodø – Moveoklinikken | Thomas Nilsen",
  description:
    "Profesjonell fysioterapi i Bodø. Undersøkelse, behandling og veiledning basert på bevegelse, funksjon og vitenskapelig tilnærming.",
};

export default function Fysioterapi() {
  return (
    <div>

      {/* HERO */}
      <section className="sub-hero">
        <div className="sub-hero-content">
          <h1>Fysioterapi i Bodø</h1>
          <p>Trygg, faglig sterk og individuell oppfølging</p>
        </div>
      </section>

      <div className="page-wrapper">

        {/* INTRO */}
        <section className="section">
          <h2 className="section-title">Hva er fysioterapi?</h2>
          <p className="section-text">
            Fysioterapi er en sentral del av moderne medisin – fundert på
            anatomi, fysiologi, nevrologi og bevegelsesvitenskap. Målet er å
            hjelpe kroppen tilbake til normal funksjon gjennom undersøkelse,
            veiledet trening og manuelle teknikker.
          </p>
        </section>

        {/* BLOCK SECTION */}
        <section className="info-block">
          <h3 className="info-title">Hva gjør en fysioterapeut?</h3>
          <p>
            En fysioterapeut forebygger og behandler plager som gir smerte eller
            nedsatt funksjon i muskler, ledd og nervesystem. Behandlingen starter
            alltid med en grundig samtale og funksjonsundersøkelse slik at du
            forstår hvorfor plagene oppstår – og hvordan vi løser dem.
          </p>
          <p>
            Fokus ligger på riktige bevegelser, progresjon og å gi deg trygghet
            i egen kropp. Vi vet at langsiktige resultater kommer når du forstår
            hvordan du skal håndtere hverdagen, stress og belastning.
          </p>
        </section>

        {/* BLOCK SECTION */}
        <section className="info-block">
          <h3 className="info-title">Hva behandler vi?</h3>
          <ul className="clean-list">
            <li>Rygg- og nakkesmerter</li>
            <li>Skulder-, hofte- og kneplager</li>
            <li>Betennelser og overbelastning</li>
            <li>Idrettsskader</li>
            <li>Kreftrelaterte plager – trening under/etter behandling</li>
            <li>KOLS og hjertesykdom</li>
            <li>Rehabilitering etter operasjoner</li>
            <li>Artrose og stivhet</li>
          </ul>
        </section>

        {/* BLOCK SECTION */}
        <section className="info-block">
          <h3 className="info-title">Vår tilnærming</h3>
          <p>
            Hos Moveoklinikken jobber vi med en aktiv tilnærming: riktig
            belastning, styrke, kontroll og trygghet er nøkkelen til varig
            bedring. Passiv behandling brukes kun når det gir mening som del av
            en større plan.
          </p>
        </section>

        {/* CONTACT */}
        <section className="section">
          <h2 className="section-title">Bestill time</h2>
          <p className="section-text">
            Har du smerter eller er usikker på hva som skjer i kroppen?
            Send meg en e-post, så finner vi en løsning.
          </p>

          <a href="mailto:thomas@moveoklinikken.no" className="hero-button">
            Bestill time
          </a>
        </section>

      </div>
    </div>
  );
}
