import {
  Home,
  Moon,
  Contact2,
  BrainCog,
  HammerIcon,
  Info,
  Factory,
  FlaskConical
} from 'lucide-react';
import { cloneElement, useContext } from 'react';
import { ThemeContext } from '../../../App';
import NavIcon from './components/NavIcon';

export default function FloatingControl() {
  const { handleTheme } = useContext(ThemeContext);

  const navList = [
    { ref: '#start', title: 'Home', icon: <Home />, callback: null },
    { ref: '#about', title: '', icon: <Info />, callback: null },
    { ref: '#services', title: '', icon: <HammerIcon />, callback: null },
    { ref: '#skills', title: '', icon: <BrainCog />, callback: null },
    { ref: '#works', title: '', icon: <FlaskConical />, callback: null },
    { ref: '#projects', title: '', icon: <Factory />, callback: null },
    { ref: '#contact', title: 'Contact', icon: <Contact2 />, callback: null },
    { ref: '#', title: '', icon: <Moon />, callback: handleTheme },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 h-20 flex items-center justify-center">
      <div className="flex items-center justify-center py-2 px-2 gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-md">
        {navList.map((item) => (
          <NavIcon reference={item.ref} callback={item.callback}>
            {cloneElement(item.icon, {
              className:
                'text-dark-font-night hover:text-dark-pink dark:hover:text-dark-pink',
            })}
          </NavIcon>
        ))}
      </div>
    </div>
  );
}
