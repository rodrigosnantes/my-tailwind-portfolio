import Typography from '../../../ui/typography/Typography';
import HashtagItem from './HastagItem';

export default function ProjectItemCard() {
  return (
    <div
      className="
      w-52
      grow
      rounded
      overflow-hidden 
      shadow-md
      border
      border-dark-border
      hover:bg-dark-pink 
      dark:bg-dark-background-card
      dark:hover:bg-dark-pink
      "
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="p-4">
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sunset in the mountains"
        />

        <div className="pt-4">
          <HashtagItem title="#react" />
          <HashtagItem title="#ts" />
          <HashtagItem title="#reactquery" />
        </div>
      </div>
    </div>
  );
}
