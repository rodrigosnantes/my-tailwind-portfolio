import {
  Home,
  Moon,
  Contact2,
  BrainCog,
  HammerIcon,
  Info,
  Factory,
} from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import NavIcon from './components/NavIcon';

export default function FloatingControl() {
  // @ts-ignore
  const { handleTheme } = useContext(ThemeContext);

  return (
    <div className="fixed bottom-0 inset-x-0 h-20 flex items-center justify-center">
      <div className="flex items-center justify-center py-2 px-2 gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full drop-shadow-md">
        <NavIcon reference="#start">
          <Home />
        </NavIcon>

        <NavIcon reference="#about">
          <Info />
        </NavIcon>

        <NavIcon reference="#skills">
          <HammerIcon />
        </NavIcon>

        <NavIcon reference="#works">
          <BrainCog />
        </NavIcon>

        <NavIcon reference="#projects">
          <Factory />
        </NavIcon>

        <NavIcon reference="#contact">
          <Contact2 />
        </NavIcon>

        <NavIcon reference="#" callback={handleTheme}>
          <Moon />
        </NavIcon>
      </div>
    </div>
  );
}
