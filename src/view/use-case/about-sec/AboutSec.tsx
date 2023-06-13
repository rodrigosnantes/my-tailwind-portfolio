import SecContainer from '../../ui/sec-container/SecContainer';
import SecTitle from '../../ui/sec-title/SecTitle';
import Typography from '../../ui/typography/Typography';

export default function AboutSec() {
  return (
    <SecContainer secId="about" className="mt-40">
      <SecTitle title="ABOUT" />

      <div
        className="max-w-2xl mx-auto"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Typography CustomClass="md:text-xl text-center">
          <p>Olá, eu sou web developer.</p>
          Sou um desenvolvedor web apaixonado e experiente, especializado em
          criar soluções bonitas e inovadoras. Tenho habilidades sólidas em
          programação, design e resolução de problemas, entrego projetos de alta
          qualidade. Estou sempre motivado a oferecer resultados excepcionais
          aos clientes.
        </Typography>
      </div>
    </SecContainer>
  );
}
