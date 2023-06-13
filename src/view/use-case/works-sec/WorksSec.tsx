import SecContainer from '../../ui/sec-container/SecContainer';
import SecTitle from '../../ui/sec-title/SecTitle';
import WorkItem from './components/WorkItem';

export default function WorksSec() {
  return (
    <SecContainer secId="works" className="mt-40">
      <SecTitle title="EXPERIENCES" />

      <div className="max-w-2xl mx-auto">
        <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
          <WorkItem
            description="Inicialmente atuei como desenvolvedor Back-End utilizando a
                linguagem Java e posteriormente migrei para Front-End para
                trabalhar com VueJs e JavaScript, segmento no qual me encontro
                até os dias de hoje, porém atualmente utilizo com muita
                frequencia ReactJs para desenvolmento web."
          />
          <WorkItem
            description="Inicialmente atuei como desenvolvedor Back-End utilizando a
                linguagem Java e posteriormente migrei para Front-End para
                trabalhar com VueJs e JavaScript, segmento no qual me encontro
                até os dias de hoje, porém atualmente utilizo com muita
                frequencia ReactJs para desenvolmento web."
          />
        </ol>
      </div>
    </SecContainer>
  );
}
