import { ReactNode } from 'react';

export default function NavIcon(props: InputPropTypes) {
  const { reference, children, callback } = props;

  return (
    <a
      className="rounded-full p-1 md:p-2 border border-gray-600 dark:border-gray-200 hover:border-blue-500 duration-200 hover:dark:border-blue-500"
      href={reference}
      onClick={callback}
    >
      <div className="text-gray-600 dark:text-gray-200 hover:text-blue-500 duration-200 hover:dark:text-blue-500">
        {children}
      </div>
    </a>
  );
}

type InputPropTypes = {
  reference: string;
  children: ReactNode;
  callback?: any;
};
