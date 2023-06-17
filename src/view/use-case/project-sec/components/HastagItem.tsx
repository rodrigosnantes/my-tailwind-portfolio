import Typography from '../../../ui/typography/Typography';

export default function HashtagItem({ title }: { title: string }) {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 bg-gradient-to-b from-cyan-500 to-blue-500">
      <Typography
        text={title}
        CustomClass="text-sm font-semibold text-gray-200 dark:text-gray-600"
      />
    </span>
  );
}
