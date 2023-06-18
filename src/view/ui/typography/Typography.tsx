import { ttypography } from '../../../app/data/t-typography';

export default function Typography({
  CustomClass,
  text,
  children,
}: ttypography) {
  return <p className={`${CustomClass}`}>{text || children}</p>;
}
