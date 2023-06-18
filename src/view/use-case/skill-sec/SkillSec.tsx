import HtmlIcon from '../../assets/html-icon';
import SecContainer from '../../ui/sec-container/SecContainer';
import SecTitle from '../../ui/sec-title/SecTitle';
import RatingItem from './components/rating-item';
import AngularIcon from '../../assets/angular-icon';
import JavascriptIcon from '../../assets/javascript-icon';
import CssIcon from '../../assets/css-icon';
import ReactIcon from '../../assets/react-icon';
import NodeIcon from '../../assets/node-icon';
import VueIcon from '../../assets/vue-icon';
import MongodbIcon from '../../assets/mongodb-icon';
import SecContent from '../../ui/sec-content/SecContent';

const STYLE =
  'hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1';

export default function SkillSec() {
  const skillList = [
    { title: 'html', value: 80, icon: <HtmlIcon />, class: STYLE },
    { title: 'css', value: 90, icon: <CssIcon />, class: STYLE },
    { title: 'JavaScript', value: 90, icon: <JavascriptIcon />, class: STYLE },
    { title: 'ReactJs', value: 90, icon: <ReactIcon />, class: STYLE },
    { title: 'Angular', value: 50, icon: <AngularIcon />, class: STYLE },
    { title: 'Node JS', value: 50, icon: <NodeIcon />, class: STYLE },
    { title: 'Vue', value: 40, icon: <VueIcon />, class: STYLE },
    { title: 'MongoDB', value: 60, icon: <MongodbIcon />, class: STYLE },
    { title: 'MaterialUi', value: 75, icon: <MongodbIcon />, class: STYLE },
    { title: 'git', value: 80, icon: <MongodbIcon />, class: STYLE },
  ];

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
