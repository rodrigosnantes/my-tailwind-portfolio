import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../../App';

export default function AppContainer(props: InputPropType) {
  const { children } = props;

  // @ts-ignore
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? 'dark' : ''}>
      <div className="px-10 dark:bg-gray-900 relative">{children}</div>
    </div>
  );
}

type InputPropType = {
  children: ReactNode;
};
