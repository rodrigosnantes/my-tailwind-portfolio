import { TsecContainer } from "../../../app/data/t-sec";

export default function SecContainer({
  secId,
  children,
  className,
}: TsecContainer) {
  return (
    <section id={secId} className={className}>
      {children}
    </section>
  );
}
