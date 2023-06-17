import { TratingItem } from '../../../../app/data/t-rating-item';

export default function RatingItem({ title, value, icon }: TratingItem) {
  return (
    <div
      className="flex items-center content-center"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="mr-4">{icon}</div>

      <dl className="grow">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </dt>
        <dd className="flex items-center mb-3">
          <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded"
              style={{ width: `${value}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            {value}%
          </span>
        </dd>
      </dl>
    </div>
  );
}
