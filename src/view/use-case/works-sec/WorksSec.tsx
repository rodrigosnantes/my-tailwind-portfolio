import SecContainer from '../../ui/sec-container/SecContainer';
import SecContent from '../../ui/sec-content/SecContent';
import SecTitle from '../../ui/sec-title/SecTitle';
import WorkItem from './components/WorkItem';

export default function WorksSec() {
  return (
    <SecContainer secId="works" className="mt-40">
      <SecTitle title="EXPERIENCES" />

      <SecContent>
        <ol className="border-l border-dark-font-light dark:border-dark-border md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
          <WorkItem
            title="Web Developer"
            date="10/02/2018 - 10/02/20120"
            description="Web Eccommerce de grande porte.
            Era encarregado por desenvolver soluções inteligentes e interfaces responsivas atraentes e intuitivas.
            Otimização de desempenho e compatibilidade com os mais diversos navegadores."
          />
          <WorkItem
            title="Web Developer"
            date="10/02/2018 - 10/02/20123"
            description="Sistema de gerenciamento de dados para controle de barragens.
            Encarregado de desenvolver soluções inteligentes para análise e acompanhamento de dados em tempo real.
            "
          />
        </ol>
      </SecContent>
    </SecContainer>
  );
}
