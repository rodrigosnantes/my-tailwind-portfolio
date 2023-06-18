import SecContainer from '../../ui/sec-container/SecContainer';
import SecContent from '../../ui/sec-content/SecContent';
import SecTitle from '../../ui/sec-title/SecTitle';
import ProjectItemCard from './components/ProjectItemCard';

export default function ProjectSec() {
  return (
    <SecContainer secId="projects" className="mt-40">
      <SecTitle title="PROJECTS" />

      <SecContent customClass="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-6">
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
      </SecContent>
    </SecContainer>
  );
}
