import avatar from '../../../../assets/avatar.png';
import SecContainer from '../../ui/sec-container/SecContainer';
import Typography from '../../ui/typography/Typography';

export default function HomeSec() {
  return (
    <SecContainer secId="start">
      <div className="text-center pt-10">
        <h2
          className="text-5xl py-2 text-blue-500 font-medium md:text-8xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Rodrigo Nantes
        </h2>
        <h3
          className="text-2xl text-gray-600 md:text-3xl tracking-widest p-2 dark:text-gray-200"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Front End Developer
        </h3>

        <div
          className="px-2 flex justify-center relative mx-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full w-72 mt-20 overflow-hidden"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src={avatar} alt="avatar" />
        </div>

        {/* <div className="max-w-2xl mx-auto">
          <Typography
            CustomClass="text-md md:text-xl py-10"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          />
        </div> */}
      </div>
    </SecContainer>
  );
}
