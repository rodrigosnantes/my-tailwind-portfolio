import Typography from '../../../ui/typography/Typography';
import HashtagItem from './HastagItem';

export default function ProjectItemCard() {

  const handleOpen = () => {
      const link = document.createElement('a');
      // link.setAttribute('target', '_blank');
      // link.click();
      alert('abre aqui')
  }
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
      hover:border-white
      hover:cursor-pointer
      dark:bg-dark-background-card
      dark:hover:bg-dark-pink
      dark:hover:border-dark-pink
      "
      data-aos="fade-down"
      data-aos-duration="1000"
      onClick={handleOpen}
    >
      <div className="p-4">
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sunset in the mountains"
        />

        {/* <div className="pt-4">
          <HashtagItem title="#react" />
          <HashtagItem title="#ts" />
          <HashtagItem title="#reactquery" />
        </div> */}
      </div>
    </div>
  );
}
