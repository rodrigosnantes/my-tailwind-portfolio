import SecContainer from '../../ui/sec-container/SecContainer';
import SecTitle from '../../ui/sec-title/SecTitle';
import ProjectItemCard from './components/ProjectItemCard';

export default function ProjectSec() {
  return (
    <SecContainer secId="projects" className="mt-40">
      <SecTitle title="PROJECTS" />

      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-6">
          <ProjectItemCard />
          <ProjectItemCard />
          <ProjectItemCard />
          <ProjectItemCard />
          <ProjectItemCard />
        </div>
      </div>
    </SecContainer>
  );
}
