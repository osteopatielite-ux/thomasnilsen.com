export const metadata = {
  title: "Kontakt – Thomas Nilsen | Moveoklinikken Bodø",
  description:
    "Kontakt fysioterapeut, osteopat og kognitiv terapeut Thomas Nilsen ved Moveoklinikken i Bodø. Bestill time, send e-post eller finn adressen til klinikken.",
};

export default function KontaktPage() {
  return (
    <section className="section">
      <h1 className="section-title">Kontakt</h1>

      <p className="section-text">
        For timebestilling, spørsmål eller en uforpliktende vurdering kan du ta kontakt
        direkte via e-post eller besøke klinikken i Bodø. Jeg svarer som regel samme dag.
      </p>

      <p className="section-text">
        <strong>E-post:</strong>{" "}
        <a href="mailto:post@moveoklinikken.no?subject=Timebestilling%20hos%20Thomas">
          post@moveoklinikken.no
        </a>
      </p>

      <p className="section-text">
        <strong>Telefon:</strong>  
        (legg inn ditt nummer her – hvis du ønsker det med en gang kan jeg legge det inn for deg)
      </p>

      <p className="section-text">
        <strong>Adresse:</strong><br />
        Moveoklinikken  
        Stormyrveien 10
        8009 Bodø
      </p>

      <p className="section-text">
        <a
          className="primary-button"
          href="https://www.google.com/maps?q=Moveoklinikken+Bodø"
          target="_blank"
        >
          Åpne i Google Maps
        </a>
      </p>

      <p className="section-text">
        Gi gjerne beskjed på forhånd dersom du har spesielle behov eller ønsker en
        vurdering av om fysioterapi, osteopati eller kognitiv terapi passer for deg.
      </p>
    </section>
  );
}
