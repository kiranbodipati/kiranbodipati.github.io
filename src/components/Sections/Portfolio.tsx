import {ArrowTopRightOnSquareIcon, DocumentTextIcon, SparklesIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import ExportedImage from "next-image-export-optimizer";
import {FC, memo, useMemo, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import GithubIcon from '../Icon/GithubIcon';
import Section from '../Layout/Section';

type CategoryFilter = 'all' | 'ai-vision' | 'nlp-speech' | 'systems-analytics';

const filterTabs: {id: CategoryFilter; label: string}[] = [
  {id: 'all', label: 'All Projects'},
  {id: 'ai-vision', label: 'AI & Computer Vision'},
  {id: 'nlp-speech', label: 'NLP & Speech'},
  {id: 'systems-analytics', label: 'Systems & Analytics'},
];

const categoryLabels: Record<string, string> = {
  'ai-vision': 'AI & Vision',
  'nlp-speech': 'NLP & Audio',
  'systems-analytics': 'Systems & Analytics',
};

const Portfolio: FC = memo(() => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return portfolioItems;
    return portfolioItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section className="py-20 lg:py-28" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-x-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300 backdrop-blur-md">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Creations</span>
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Featured Projects & AI Systems
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            A curated collection of deep learning pipelines, multimodal AI experiments, geospatial systems, and algorithmic engines.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl">
            {filterTabs.map(tab => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  className={classNames(
                    'rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200',
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5',
                  )}
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  type="button">
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, index) => (
            <ProjectCard item={item} key={`${item.title}-${index}`} />
          ))}
        </div>

      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ProjectCard: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {title, description, image, url, tags, category, githubUrl, paperUrl} = item;

  return (
    <div className="group glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Card Image Banner */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-white/5">
          <ExportedImage
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            src={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          {/* Category Badge */}
          {category && (
            <span className="absolute top-3 left-3 rounded-full bg-slate-900/80 border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
              {categoryLabels[category] || category}
            </span>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map(tag => (
                <span
                  className="rounded-md bg-slate-800/80 border border-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                  key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
        <a
          className="inline-flex items-center gap-x-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
          href={url}
          rel="noopener noreferrer"
          target="_blank">
          <span>Explore Project</span>
          <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>

        <div className="flex items-center gap-x-2">
          {githubUrl && (
            <a
              aria-label={`${title} Github Repository`}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
              href={githubUrl}
              rel="noopener noreferrer"
              target="_blank">
              <GithubIcon className="h-4 w-4 text-white" />
            </a>
          )}
          {paperUrl && (
            <a
              aria-label={`${title} Paper`}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
              href={paperUrl}
              rel="noopener noreferrer"
              target="_blank">
              <DocumentTextIcon className="h-4 w-4 text-cyan-400" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

