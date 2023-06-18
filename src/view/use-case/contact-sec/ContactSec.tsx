import { Linkedin, Github, Mail, WheatIcon } from 'lucide-react';

import SecContainer from '../../ui/sec-container/SecContainer';
import SecContent from '../../ui/sec-content/SecContent';
import SecTitle from '../../ui/sec-title/SecTitle';
import SocialContainer from './components/SocialContainer';

export default function ContactSec() {
  const hrefList = [
    {
      hrefLink: 'https://www.linkedin.com/in/rodrigonantess/',
      icon: <Linkedin />,
      alt: 'linkedIn',
    },
    {
      hrefLink: 'https://github.com/rodrigosnantes',
      icon: <Github />,
      alt: 'github',
    },
    {
      hrefLink: 'https://api.whatsapp.com/send?phone=5548999720646',
      icon: <WheatIcon />,
      alt: 'whatsApp',
    },
    {
      hrefLink: 'mailto:rodrigosnantes01@gmail.com?Subject=Hello%20again',
      icon: <Mail />,
      alt: 'gmail',
    },
  ];

  return (
    <SecContainer secId="contact" className="mt-40">
      <SecTitle title="CONTACT" />

      <SecContent customClass="flex flex-col md:flex-row items-center justify-center gap-2 py-3 dark:text-dark-font-light">
        {hrefList.map((item) => (
          <SocialContainer key={item.alt}>
            <a target="_blank" href={item.hrefLink}>
              {item.icon}
            </a>
          </SocialContainer>
        ))}
      </SecContent>

      <SecContent customClass="pb-40 max-w-2xl mx-auto text-center text-gray-600 dark:text-dark-font-light">
        <span className="font-light text-sm">© 2023 RNantes</span>
      </SecContent>
    </SecContainer>
  );
}
