import { cloneElement } from 'react';

export default function SocialIcon(props: InputProps) {
  const { children } = props;

  return (
    <div
      className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-600 border-black border hover:border-blue-500"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {cloneElement(children, {
        className: 'w-8 h-8 hover:text-blue-500',
      })}
    </div>
  );
}

type InputProps = {
  children: any;
};
