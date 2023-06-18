import { cloneElement } from 'react';

export default function SocialContainer({ children }: { children: any }) {
  return (
    <div
      className="w-12 h-12 flex items-center justify-center rounded-xl text-dark-font-night border-black border hover:border-dark-pink"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {cloneElement(children, {
        className: 'hover:text-dark-pink',
      })}
    </div>
  );
}
