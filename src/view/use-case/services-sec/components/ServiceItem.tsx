import { cloneElement, ReactNode } from 'react';
import Typography from '../../../ui/typography/Typography';

export default function ServiceItem({
  title,
  icon,
}: {
  title: string;
  icon: any;
}) {
  return (
    <div
      className="
      w-52 
      grow 
      rounded 
      shadow-md
      border
      border-dark-border
      dark:bg-dark-background-card 
      hover:bg-dark-pink 
      hover:text-white 
      dark:hover:bg-dark-pink 
      dark:text-dark-font-light 
      dark:hover:text-white"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="p-8 flex  flex-col text-center items-center">
        {cloneElement(icon, {
          className: 'w-10 h-10 dark:hover:text-dark-pink dark:hover:text-white',
        })}
        <Typography text={title} />
      </div>
    </div>
  );
}
