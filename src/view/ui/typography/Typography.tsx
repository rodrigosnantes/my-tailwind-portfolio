import { ttypography } from '../../../app/data/t-typography';

export default function Typography({
  CustomClass,
  text,
  children,
}: ttypography) {
  return (
    <p className={`text-gray-600 dark:text-gray-400 ${CustomClass}`}>
      {text || children}
    </p>
  );
}
