import Typography from '../../../ui/typography/Typography';

export default function HashtagItem({ title }: { title: string }) {
  return (
    <span className="inline-block bg-dark-pink text-white rounded px-3 py-1 mr-2 mb-2 dark:bg-dark-pink">
      <Typography
        text={title}
        CustomClass="text-sm font-semibold text-gray-200 dark:text-white"
      />
    </span>
  );
}
