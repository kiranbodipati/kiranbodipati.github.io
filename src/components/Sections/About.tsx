import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CheckIcon,
  DocumentDuplicateIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import ExportedImage from "next-image-export-optimizer";
import {FC, memo, useCallback, useState} from 'react';

import {aboutData, heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  const resumeAction = heroData.actions[0];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText('bodipati@umich.edu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }, []);

  return (
    <Section className="py-20 lg:py-28" sectionId={SectionId.About}>
      <div className="flex flex-col gap-y-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-x-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 backdrop-blur-md">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Discover</span>
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            About Me & Research
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            A glimpse into my academic foundations, industry engineering experience, and scientific interests.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Main Profile Story Card (7 Cols) */}
          <div className="glass-card glass-card-hover col-span-1 rounded-3xl p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between relative overflow-hidden">
            {/* Background glow accent */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {profileImageSrc && (
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 shadow-xl shadow-indigo-500/20">
                    <div className="h-full w-full overflow-hidden rounded-[14px] bg-slate-900">
                      <ExportedImage
                        alt="Kiran Bodipati profile picture"
                        className="h-full w-full object-cover object-center"
                        placeholder="blur"
                        priority
                        src={profileImageSrc}
                      />
                    </div>
                  </div>
                )}
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                    AI & ML Engineer
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Kiran Bodipati</h3>
                  <p className="text-sm font-medium text-slate-400">HERE Technologies • Chicago, IL</p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {description}
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <button
                className="inline-flex items-center gap-x-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all active:scale-95"
                onClick={handleCopyEmail}
                type="button">
                {copied ? (
                  <>
                    <CheckIcon className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <DocumentDuplicateIcon className="h-4 w-4 text-cyan-400" />
                    <span>Copy bodipati@umich.edu</span>
                  </>
                )}
              </button>

              {resumeAction && (
                <a
                  className="inline-flex items-center gap-x-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 px-4 py-2 text-xs sm:text-sm font-semibold text-indigo-300 hover:text-indigo-200 transition-all active:scale-95"
                  href={resumeAction.href}
                  rel="noopener noreferrer"
                  target="_blank">
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  <span>Resume (PDF)</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column Bento Cards (5 Cols) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
            
            {/* Education & GPA Card */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-x-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <AcademicCapIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Academic Honors</h4>
                  <p className="text-xs text-slate-400">Excellence in Data Science & AI</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="rounded-xl bg-slate-900/60 p-3.5 border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">University of Michigan</span>
                    <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-400 border border-emerald-500/20">
                      GPA: 4.0 / 4.0
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">M.S. in Data Science • Ann Arbor</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 text-[11px] font-semibold text-amber-300">
                      🏆 Outstanding 1st Year Student
                    </span>
                    <span className="rounded-md bg-indigo-500/10 border border-indigo-500/25 px-2 py-0.5 text-[11px] font-semibold text-indigo-300">
                      🎙️ Valedictory Speaker
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/60 p-3.5 border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Nanyang Technological University</span>
                    <span className="rounded-md bg-cyan-500/10 px-2 py-0.5 text-[11px] font-bold text-cyan-300 border border-cyan-500/20">
                      Distinction
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">B.S. in Data Science & AI • Minor in Business</p>
                </div>
              </div>
            </div>

            {/* Research & Personal Interests Card */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden flex-1">
              <h4 className="text-base font-bold text-white mb-3">Core Research & Exploration</h4>
              
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Technical Focus & Research</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Agentic Workflows',
                    'MCP Servers',
                    'Graph RAG',
                    'Semantic Caching',
                    'LLM Robustness',
                    'Computer Vision & YOLO',
                    'Graph Neural Networks',
                  ].map(item => (
                    <span
                      className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 text-xs font-medium text-indigo-300"
                      key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Beyond The Screen</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    {name: 'Scuba Diving', icon: '🤿'},
                    {name: 'Alpine Hiking', icon: '🏔️'},
                    {name: 'Global Travel', icon: '✈️'},
                    {name: 'Creative Poetry', icon: '✍️'},
                  ].map(interest => (
                    <span
                      className="inline-flex items-center gap-x-1.5 rounded-lg bg-slate-800/60 border border-white/10 px-2.5 py-1 text-xs text-slate-300"
                      key={interest.name}>
                      <span>{interest.icon}</span>
                      <span>{interest.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Details Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutItems.map(({label, text, Icon}, idx) => (
            <div
              className="glass-card rounded-2xl p-4 flex items-start gap-x-3 hover:border-white/20 transition-colors"
              key={idx}>
              {Icon && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>
              )}
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                <p className="text-sm font-medium text-white mt-0.5 leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;

