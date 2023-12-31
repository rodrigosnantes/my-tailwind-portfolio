export default function SecTitle({ title }: { title: string }) {
  return (
    <div
      className="text-center max-w-lg mx-auto"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h3 className="text-4xl py-1 text-gray-600 dark:text-dark-font-light mb-20">
        {title}
      </h3>
    </div>
  );
}
