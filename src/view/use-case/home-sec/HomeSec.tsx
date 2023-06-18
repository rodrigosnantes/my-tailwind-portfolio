import SecContainer from '../../ui/sec-container/SecContainer';
import Typography from '../../ui/typography/Typography';
import Avatar from './components/Avatar';
import LandingSubtitle from './components/LandingSubtitle';
import LandingTitle from './components/LandingTitle';

export default function HomeSec() {
  return (
    <SecContainer secId="start">
      <div className="text-center pt-10">
        <LandingTitle />

        <LandingSubtitle />

        <Avatar />
      </div>
    </SecContainer>
  );
}
