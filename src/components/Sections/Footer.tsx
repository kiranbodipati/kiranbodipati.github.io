import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
  <footer className="relative border-t border-white/10 bg-[#060913] px-4 pb-12 pt-16 sm:px-8">
    {/* Floating Back to Top Button */}
    <div className="absolute inset-x-0 -top-5 flex justify-center">
      <a
        aria-label="Back to top"
        className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-400 border border-white/15 shadow-xl hover:text-cyan-300 hover:border-cyan-500/40 active:scale-95 transition-all"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>

    <div className="mx-auto max-w-screen-xl flex flex-col items-center gap-y-6 text-center">
      {/* Brand signature */}
      <div className="flex items-center gap-x-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 text-xs font-black text-white">
          KB
        </span>
        <span className="font-bold text-white tracking-tight">Kiran Bodipati</span>
        <span className="text-slate-600">•</span>
        <span className="text-xs text-slate-400">AI & ML Engineer</span>
      </div>

      {/* Socials */}
      <div className="flex gap-x-4 text-slate-400">
        <Socials />
      </div>

      {/* Copyright and note */}
      <div className="space-y-1 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Kiran Bodipati. All rights reserved.</p>
        <p className="text-slate-400">
          Crafted with <span className="text-slate-300">Next.js</span>, <span className="text-slate-300">TypeScript</span> &amp; <span className="text-slate-300">Tailwind CSS</span> • Co-crafted by <span className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">Antigravity</span> 🚀
        </p>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;

