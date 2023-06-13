import { ReactNode } from 'react';

export default function SecContainer(props: InputPropType) {
  const { secId, children, className } = props;
  return (
    <section id={secId} className={className}>
      {children}
    </section>
  );
}

type InputPropType = {
  secId: string;
  children: ReactNode;
  className?: string;
};
