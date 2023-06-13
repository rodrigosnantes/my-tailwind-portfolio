import { Linkedin, Instagram, Github, Codepen, Mail } from 'lucide-react';
import SecContainer from '../../ui/sec-container/SecContainer';
import SecTitle from '../../ui/sec-title/SecTitle';
import SocialIcon from './components/SocialIcon';

export default function ContactSec() {
  return (
    <SecContainer secId="contact" className="mt-40">
      <SecTitle title="CONTACT" />

      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 py-3 dark:text-white">
        <SocialIcon>
          <Linkedin />
        </SocialIcon>

        <SocialIcon>
          <Instagram />
        </SocialIcon>

        <SocialIcon>
          <Github />
        </SocialIcon>

        <SocialIcon>
          <Codepen />
        </SocialIcon>

        <SocialIcon>
          <Mail />
        </SocialIcon>
      </div>

      <div className="pb-40 max-w-2xl mx-auto text-center text-gray-600: dark:text-gray-400">
        <span className="font-light text-sm">© 2023 RNantes</span>
      </div>
    </SecContainer>
  );
}
