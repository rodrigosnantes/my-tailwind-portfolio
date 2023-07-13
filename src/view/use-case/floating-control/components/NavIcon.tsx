import { TnavItem } from '../../../../app/data/t-nav-item';

export default function NavIcon({ reference, children, callback }: TnavItem) {
  return (
    <a
      className="rounded-xl p-1 md:p-2 border border-dark-font-light dark:border-gray-200 hover:border-dark-pink duration-200 hover:dark:border-dark-pink"
      href={reference}
      onClick={callback}
    >
      <div className="text-gray-600 border-dark-font-light dark:text-dark-font-light hover:text-blue-500 duration-200 hover:dark:text-dark-pink">
        {children}
      </div>
    </a>
  );
}
