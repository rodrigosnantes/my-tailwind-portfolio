import { TworkItem } from '../../../../app/data/t-work-item';
import Typography from '../../../ui/typography/Typography';

export default function WorkItem({
  date = '10/02/2018 - ---',
  description,
}: TworkItem) {
  return (
    <li data-aos="fade-down" data-aos-duration="1000">
      <div className="flex-start flex items-center pt-2 md:block md:pt-0">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full md:-mt-[5px] md:ml-0 md:mr-0 hover:bg-blue-500"></div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{date}</p>
      </div>
      <div className="ml-4 mt-2 pb-5 md:ml-0">
        <Typography
          text="Font-End Developer"
          CustomClass="mb-1.5 text-xl font-semibold"
        />

        <Typography text={description} CustomClass="font-light" />
      </div>
    </li>
  );
}
