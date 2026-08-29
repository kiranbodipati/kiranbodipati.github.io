import {ArrowDownTrayIcon, SparklesIcon} from '@heroicons/react/24/outline';
import ExportedImage from "next-image-export-optimizer";
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Subtle background wallpaper with dark vignette */}
        <div className="absolute inset-0 z-0">
          <ExportedImage
            alt={`${name}-bg`}
            className="h-full w-full object-cover opacity-20 filter blur-sm scale-105"
            placeholder="blur"
            priority
            src={imageSrc}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/80 via-[#090d16]/90 to-[#090d16]" />
        </div>

        {/* Ambient background glow orbs */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-600/15 blur-[100px]" />

        {/* Main Content Container */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-y-6 sm:gap-y-8">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-x-2.5 rounded-full border border-cyan-500/30 bg-slate-900/80 px-4 py-1.5 text-xs sm:text-sm font-medium text-cyan-300 shadow-lg shadow-cyan-500/10 backdrop-blur-xl animate-float">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>AI & ML Engineer @ HERE Technologies</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline text-slate-300">Agentic AI & Predictive Analytics</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl font-sans">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                AI & Machine Learning Engineer • Researcher
              </p>
            </div>

            {/* Description Card */}
            <div className="max-w-2xl text-center leading-relaxed">
              {description}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {actions.map(({href, text, Icon}) => (
                <a
                  className="flex items-center gap-x-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition-all"
                  href={href}
                  key={text}
                  rel="noopener noreferrer"
                  target="_blank">
                  {Icon ? <Icon className="h-5 w-5" /> : <ArrowDownTrayIcon className="h-5 w-5" />}
                  <span>{text}</span>
                </a>
              ))}
              <a
                className="flex items-center gap-x-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm sm:text-base font-semibold text-slate-200 backdrop-blur-md hover:bg-white/10 hover:border-white/30 hover:text-white active:scale-95 transition-all"
                href={`/#${SectionId.Portfolio}`}>
                <SparklesIcon className="h-5 w-5 text-cyan-400" />
                <span>Explore Projects</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Connect With Me</p>
              <div className="flex items-center justify-center gap-x-4 text-slate-300">
                <Socials />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-10 flex justify-center z-10">
          <a
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-y-1 rounded-full p-2 text-slate-400 hover:text-cyan-400 transition-colors"
            href={`/#${SectionId.About}`}>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 group-hover:text-cyan-300 transition-colors">Scroll</span>
            <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-slate-600/80 p-1 group-hover:border-cyan-400/80 transition-colors">
              <div className="h-2 w-1.5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;

