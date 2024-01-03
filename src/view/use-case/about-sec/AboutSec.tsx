import SecContainer from '../../ui/sec-container/SecContainer';
import SecContent from '../../ui/sec-content/SecContent';
import SecTitle from '../../ui/sec-title/SecTitle';
import Typography from '../../ui/typography/Typography';

export default function AboutSec() {
  return (
    <SecContainer secId="about" className="mt-40">
      <SecTitle title="ABOUT" />

      <SecContent>
        <Typography CustomClass="md:text-xl text-center text-dark-font-night font-light">
          <p>Olá, eu sou Rodrigo! Eu sou densenvolvedor Web.</p>
          Sou apaixonado e experiente, especializado em
          criar soluções bonitas e inovadoras. Tenho habilidades sólidas em
          programação, design e resolução de problemas, entrego projetos de alta
          qualidade. Estou sempre motivado a oferecer resultados excepcionais.
        </Typography>
      </SecContent>
    </SecContainer>
  );
}
