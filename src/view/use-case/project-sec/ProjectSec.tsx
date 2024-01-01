import SecContainer from '../../ui/sec-container/SecContainer';
import SecContent from '../../ui/sec-content/SecContent';
import SecTitle from '../../ui/sec-title/SecTitle';
import ProjectItemCard from './components/ProjectItemCard';

import anubisPreview from '../../../view/assets/anubis.png'
import symbolyPreview from '../../../view/assets/symboly.png'
import netflixPreview from '../../../view/assets/netflix.png'
import githubPreview from '../../../view/assets/github01.png'
import cardPreview from '../../../view/assets/cardpreview.png'

export default function ProjectSec() {
  return (
    <SecContainer secId="projects" className="mt-40">
      <SecTitle title="PROJECTS" />
      

      <SecContent customClass="flex flex-col flex-wrap justify-center md:flex-row items-center gap-6">
        <ProjectItemCard
          redirectUrl='https://www.anubisgames.com.br/'
          image={
            <img
              className="w-full h-full rounded object-cover"
              src={anubisPreview}
              alt="anubis project"
            />
          } />

        <ProjectItemCard
          redirectUrl='https://beta-simboly-so.netlify.app/'
          image={
            <img
              className="w-full h-full rounded object-cover"
              src={symbolyPreview}
              alt="Symboly project"
            />
          } />

        <ProjectItemCard redirectUrl=''
          image={
            <img
              className="w-full h-full rounded object-cover"
              src={netflixPreview}
              alt="netflix project"
            />
          } />

        <ProjectItemCard redirectUrl='https://codepen.io/rodrigo-nantes/pen/yLjLPbw'
          image={
            <img
              className="w-full h-full rounded object-cover"
              src={githubPreview}
              alt="github project"
            />
          } />

        <ProjectItemCard redirectUrl='https://codepen.io/rodrigo-nantes/pen/yLQvPJG'
          image={
            <img
              className="w-full h-full rounded object-cover"
              src={cardPreview}
              alt="card project"
            />
          } />

      </SecContent>
    </SecContainer>
  );
}
