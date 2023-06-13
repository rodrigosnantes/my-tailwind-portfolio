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

export default function SkillSec() {
  return (
    <SecContainer secId="skills" className="mt-40">
      <SecTitle title="SKILLS" />

      <div className="max-w-2xl mx-auto">
        <RatingItem
          title="html"
          value={80}
          icon={
            <HtmlIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
        <RatingItem
          title="css"
          value={90}
          icon={
            <CssIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
        <RatingItem
          title="JavaScript"
          value={90}
          icon={
            <JavascriptIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
        <RatingItem
          title="ReactJs"
          value={90}
          icon={
            <ReactIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
        <RatingItem
          title="Angular"
          value={50}
          icon={
            <AngularIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
        <RatingItem
          title="Node JS"
          value={50}
          icon={
            <NodeIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
        <RatingItem
          title="Vue"
          value={50}
          icon={
            <VueIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
        <RatingItem
          title="MongoDb"
          value={70}
          icon={
            <MongodbIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
        <RatingItem
          title="MaterialUi"
          value={70}
          icon={
            <MongodbIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
        <RatingItem
          title="Git"
          value={70}
          icon={
            <MongodbIcon className="hover:text-teal-500 dark:text-cyan-500 w-5 h-5 dark:bg-blue-600 rounded-full dark:px-1" />
          }
        />
      </div>
    </SecContainer>
  );
}
