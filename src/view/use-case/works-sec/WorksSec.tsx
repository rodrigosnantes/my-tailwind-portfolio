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
            date="10/02/2019 - 13/09/2021"
            description="Experiência em um Web E-commerce de grande porte, onde fui responsável pelo desenvolvimento de soluções inteligentes, bem como pela criação de interfaces responsivas, atraentes e intuitivas. Além disso, trabalhei na otimização de desempenho e na garantia de compatibilidade entre os navegadores."
          />
          <WorkItem
            title="Web Developer"
            date="27/09/2021 - atual"
            description="Participei ativamente do desenvolvimento de um sistema de gerenciamento de dados voltado para o controle de barragens. Minha atribuição era criar soluções inteligentes para análise e monitoramento de dados em tempo real, fornecendo insights cruciais para uma efetiva supervisão dessas estruturas.
Além disso, utilizei tecnologias como single-spa e Leaflet.js para aprimorar a experiência do produto e do usuário final."
          />
        </ol>
      </SecContent>
    </SecContainer>
  );
}
