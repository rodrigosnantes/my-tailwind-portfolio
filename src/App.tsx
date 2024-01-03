import React, { useState } from 'react';

import { createContext } from 'react';

import AOS from 'aos';

import { Tcontext } from './app/data/t-context';

import AboutSec from './view/use-case/about-sec/AboutSec';
import SkillSec from './view/use-case/skill-sec/SkillSec';
import WorksSec from './view/use-case/works-sec/WorksSec';
import HomeSec from './view/use-case/home-sec/HomeSec';
import ContactSec from './view/use-case/contact-sec/ContactSec';
import ProjectSec from './view/use-case/project-sec/ProjectSec';
import ServicesSec from './view/use-case/services-sec/ServicesSec';
import AppContainer from './view/ui/app-container/AppContainer';
import FloatingControl from './view/use-case/floating-control/FloatingControl';

import 'aos/dist/aos.css';
import './App.css';

export const ThemeContext = createContext<Tcontext>({} as Tcontext);
AOS.init();

export default function App() {
  const [dark, setDark] = useState(true);

  function handleTheme(): void {
    setDark((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ theme: dark, handleTheme }}>
      <AppContainer>
        <React.Fragment>
          <HomeSec />
          <AboutSec />
          <ServicesSec />
          <SkillSec />
          <WorksSec />
          <ProjectSec />
          <ContactSec />
          <FloatingControl />
        </React.Fragment>
      </AppContainer>
    </ThemeContext.Provider>
  );
}
