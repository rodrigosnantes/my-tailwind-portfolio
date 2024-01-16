import { GitBranch, Github, FormInput } from 'lucide-react';
import HtmlIcon from '../../assets/html-icon';
import SecContainer from '../../ui/sec-container/SecContainer';
import SecTitle from '../../ui/sec-title/SecTitle';
import RatingItem from './components/rating-item';
import AngularIcon from '../../assets/angular-icon';
import JavascriptIcon from '../../assets/javascript-icon';
import CssIcon from '../../assets/css-icon';
import ReactIcon from '../../assets/react-icon';
import NodeIcon from '../../assets/node-icon';
import TailwindIcon from '../../assets/tailwind-icon';
import MongodbIcon from '../../assets/mongodb-icon';
import SecContent from '../../ui/sec-content/SecContent';
import MaterialUi from '../../assets/MaterialUi';

const STYLE = 'hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1';

const skillList = [
  { title: 'html', value: 80, icon: <HtmlIcon />, class: STYLE },
  { title: 'css', value: 90, icon: <CssIcon />, class: STYLE },
  { title: 'JavaScript', value: 90, icon: <JavascriptIcon />, class: STYLE },
  { title: 'React JS', value: 90, icon: <ReactIcon />, class: STYLE },
  { title: 'Node JS', value: 50, icon: <NodeIcon />, class: STYLE },
  { title: 'MongoDB', value: 60, icon: <MongodbIcon />, class: STYLE },
  { title: 'MaterialUi', value: 75, icon: <MaterialUi />, class: STYLE },
  { title: 'Git', value: 80, icon: <GitBranch />, class: STYLE },
  { title: 'GitHub', value: 80, icon: <Github />, class: STYLE },
  { title: 'Tailwind', value: 60, icon: <TailwindIcon />, class: STYLE },
  { title: 'React-hook-form', value: 60, icon: <FormInput />, class: STYLE },
  { title: 'Single-SPA', value: 60, icon: <JavascriptIcon />, class: STYLE },
];

export default function SkillSec() {

  return (
    <SecContainer secId="skills" className="mt-40">
      <SecTitle title="SKILLS" />

      <SecContent>
        {skillList.map((item) => (
          <RatingItem
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </SecContent>
    </SecContainer>
  );
}
