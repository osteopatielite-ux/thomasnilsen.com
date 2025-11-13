export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <img
            src="/hero.jpg"
            alt="Behandling hos Thomas Nilsen ved Moveoklinikken"
            className="hero-image"
            style={{
              borderRadius: "16px",
              maxHeight: "480px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <div style={{ textAlign: "center", maxWidth: "700px" }}>
            <h1 className="hero-title" style={{ fontSize: "40px", marginBottom: "10px" }}>
              Thomas Nilsen
            </h1>

            <p
              className="hero-subtitle"
              style={{
                fontSize: "18px",
                color: "#4B5563",
                marginBottom: "20px",
                lineHeight: "1.5",
              }}
            >
              Fysioterapeut, osteopat og kognitiv terapeut ved Moveoklinikken i Bodø. 
              Helhetlig behandling for smerter, stress og langvarige plager.
            </p>

            <div className="button-row" style={{ justifyContent: "center" }}>
              <a
                className="primary-button"
                href="mailto:post@moveoklinikken.no?subject=Timebestilling%20hos%20Thomas"
                style={{ padding: "12px 24px", fontSize: "16px" }}
              >
                Bestill time
              </a>

              <a
                className="secondary-button"
                href="/om-meg"
                style={{ padding: "12px 24px", fontSize: "16px" }}
              >
                Les mer om meg
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TJENESTER */}
      <section className="section">
        <h2 className="section-title">Tjenester</h2>
        <ul className="section-list" style={{ fontSize: "17px", lineHeight: "1.7" }}>
          <li>Fysioterapi for smerter, overbelastning og skader</li>
          <li>Osteopati for muskel- og skjelettplager</li>
          <li>Kognitiv terapi for stress, tankekjør og mentale belastninger</li>
          <li>Løpsanalyse og treningsveiledning</li>
          <li>Strukturert gruppeopplegg for personer med diabetes</li>
        </ul>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2 className="section-title">Helhetlig behandling</h2>
        <p className="section-text">
          Jeg kombinerer fysioterapi, osteopati og kognitiv terapi for å tilby en
          helhetlig tilnærming til plager som påvirker både kropp og sinn. Målet
          er å hjelpe deg tilbake til en hverdag med mindre smerter, bedre
          funksjon og økt forståelse for egen kropp.
        </p>
      </section>
    </>
  );
}
