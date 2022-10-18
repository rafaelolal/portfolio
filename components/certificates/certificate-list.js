import Certificate from "./certificate";

export default function CertificateList(props) {
  const { certificates } = props;

  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      {certificates.map((certificate) => (
        <Certificate
          key={certificate.id}
          id={certificate.id}
          name={certificate.name}
          description={certificate.description}
          date={certificate.date}
          associated_with={certificate.associated_with}
          link={certificate.link}
        />
      ))}
    </div>
  );
}
