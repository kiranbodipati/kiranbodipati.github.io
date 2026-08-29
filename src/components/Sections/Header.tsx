import {Dialog, Transition} from '@headlessui/react';
import {ArrowDownTrayIcon, Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {heroData, SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';
import Socials from '../Socials';

export const headerID = 'headerNav';

const sectionLabels: Record<string, string> = {
  [SectionId.Hero]: 'Home',
  [SectionId.About]: 'About',
  [SectionId.Resume]: 'Experience & Education',
  [SectionId.Portfolio]: 'Projects',
};

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [SectionId.Hero, SectionId.About, SectionId.Resume, SectionId.Portfolio],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const resumeAction = heroData.actions[0];

    return (
      <header className="fixed top-5 inset-x-0 z-50 hidden justify-center px-4 sm:flex pointer-events-none" id={headerID}>
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 rounded-full bg-slate-900/80 px-6 py-2.5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 transition-all duration-300">
          {/* Brand mark */}
          <Link
            aria-label="Home"
            className="group flex items-center justify-center transition-transform hover:scale-105"
            href={`/#${SectionId.Hero}`}>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 text-xs font-black text-white shadow-md shadow-indigo-500/20">
              KB
            </span>
          </Link>

          {/* Nav pills */}
          <nav className="flex items-center gap-x-1.5">
            {navSections.map(section => {
              const isCurrent = section === currentSection;
              return (
                <Link
                  className={classNames(
                    'relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200',
                    isCurrent
                      ? 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5',
                  )}
                  href={`/#${section}`}
                  key={section}>
                  {sectionLabels[section] || section}
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA */}
          {resumeAction && (
            <a
              className="flex items-center gap-x-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-500/25 hover:opacity-95 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95 transition-all"
              href={resumeAction.href}
              rel="noopener noreferrer"
              target="_blank">
              <ArrowDownTrayIcon className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          )}
        </div>
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const resumeAction = heroData.actions[0];

    const toggleOpen = useCallback(() => {
      setIsOpen(prev => !prev);
    }, []);

    return (
      <>
        {/* Mobile floating trigger button */}
        <div className="fixed top-4 right-4 z-40 sm:hidden">
          <button
            aria-label="Open Navigation Menu"
            className="flex items-center justify-center h-11 w-11 rounded-full bg-slate-900/90 text-white backdrop-blur-md border border-white/15 shadow-xl active:scale-95 transition-all"
            onClick={toggleOpen}>
            <Bars3BottomRightIcon className="h-6 w-6 text-cyan-400" />
          </button>
        </div>

        {/* Mobile menu modal drawer */}
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-50 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full">
              <div className="relative ml-auto flex h-full w-4/5 max-w-xs flex-col justify-between bg-slate-900 border-l border-white/10 p-6 shadow-2xl">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                    <div className="flex items-center gap-x-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 text-xs font-black text-white">
                        KB
                      </span>
                      <span className="font-bold text-white text-sm">Kiran Bodipati</span>
                    </div>
                    <button
                      aria-label="Close menu"
                      className="rounded-lg p-1.5 text-slate-400 hover:text-white"
                      onClick={toggleOpen}>
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>

                  <nav className="mt-6 flex flex-col gap-y-2">
                    {navSections.map(section => {
                      const isCurrent = section === currentSection;
                      return (
                        <Link
                          className={classNames(
                            'rounded-xl px-4 py-3 text-sm font-semibold transition-all',
                            isCurrent
                              ? 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'text-slate-300 hover:bg-slate-800 hover:text-white',
                          )}
                          href={`/#${section}`}
                          key={section}
                          onClick={toggleOpen}>
                          {sectionLabels[section] || section}
                        </Link>
                      );
                    })}
                  </nav>

                  {resumeAction && (
                    <div className="mt-6 pt-4 border-t border-slate-800">
                      <a
                        className="flex items-center justify-center gap-x-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25"
                        href={resumeAction.href}
                        onClick={toggleOpen}
                        rel="noopener noreferrer"
                        target="_blank">
                        <ArrowDownTrayIcon className="h-4 w-4" />
                        <span>Download Resume</span>
                      </a>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <p className="text-xs text-slate-400 mb-3">Connect</p>
                  <div className="flex gap-x-3 text-slate-300">
                    <Socials />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

Header.displayName = 'Header';
export default Header;

