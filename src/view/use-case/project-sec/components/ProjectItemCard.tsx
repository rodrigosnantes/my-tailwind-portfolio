import Typography from '../../../ui/typography/Typography';
import HashtagItem from './HastagItem';

export default function ProjectItemCard() {
  return (
    <div
      className="w-52 grow rounded overflow-hidden shadow-md border dark:border-cyan-500 dark:shadow-blue-600"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <img
        className="w-full"
        src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Sunset in the mountains"
      />

      <div className="px-6 py-4">
        <Typography
          text="The Coldest Sunse"
          CustomClass="text-xl mb-2 font-semibold text-center"
        />
      </div>

      <div className="px-6 pt-4 pb-2">
        <HashtagItem title="#react" />
        <HashtagItem title="#ts" />
        <HashtagItem title="#reactquery" />
      </div>
    </div>
  );
}
