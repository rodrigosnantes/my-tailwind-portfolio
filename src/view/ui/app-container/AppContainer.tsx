import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import { Tchildren } from '../../../app/data/t-children';

export default function AppContainer({ children }: Tchildren) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? 'dark' : ''}>
      <div className="px-10 dark:bg-dark-background relative">{children}</div>
    </div>
  );
}
