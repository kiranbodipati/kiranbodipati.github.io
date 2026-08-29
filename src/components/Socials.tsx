import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="-m-1.5 rounded-full p-2 text-slate-400 hover:text-cyan-300 hover:bg-white/5 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:p-2.5"
          href={href}
          key={label}
          rel="noopener noreferrer"
          target="_blank">
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
