import { ReactNode } from 'react';

export default function SecContent({
  children,
  customClass,
}: {
  children: ReactNode;
  customClass?: string;
}) {
  return (
    <div
      className={`max-w-2xl mx-auto ${customClass}`}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {children}
    </div>
  );
}
