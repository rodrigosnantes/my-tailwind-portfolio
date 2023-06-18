import avatar from '../../../../../assets/avatar.png';

export default function Avatar() {
  return (
    <div
      className="px-2 flex justify-center relative mx-auto bg-gradient-to-b from-dark-pink to-dark-font-light rounded-full w-72 mt-20 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <img src={avatar} alt="avatar" />
    </div>
  );
}
