import {
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';
import {FC, memo, useCallback, useState} from 'react';

import {PublicationItem as PublicationItemType} from '../../../data/dataDef';

const PublicationItem: FC<{item: PublicationItemType}> = memo(({item}) => {
  const {title, date, location, content, authors, badge, paperLink, posterLink, videoLink, citationText} = item;
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleCopyCitation = useCallback(() => {
    if (citationText) {
      navigator.clipboard.writeText(citationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [citationText]);

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 transition-all">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-white/5">
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">{title}</h4>
            {badge && (
              <span className="rounded-full bg-indigo-500/15 border border-indigo-500/30 px-2.5 py-0.5 text-[11px] font-bold text-indigo-300">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm font-medium text-cyan-300/90">{authors}</p>
          <p className="text-xs text-slate-400">{location}</p>
        </div>

        <div className="inline-flex items-center gap-x-1.5 self-start shrink-0 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
          <CalendarIcon className="h-3.5 w-3.5 text-cyan-400" />
          <span>{date}</span>
        </div>
      </div>

      {/* Abstract Toggle */}
      <div className="pt-4">
        <button
          className="inline-flex items-center gap-x-1.5 text-xs font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
          onClick={toggleExpand}
          type="button">
          {isExpanded ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
          <span>{isExpanded ? 'Hide Abstract' : 'Read Abstract'}</span>
        </button>

        {isExpanded && (
          <div className="mt-3 rounded-xl bg-slate-900/70 p-4 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fadeIn">
            {content}
          </div>
        )}
      </div>

      {/* Action Links & Citation */}
      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2 sm:gap-3">
        {paperLink && (
          <a
            className="inline-flex items-center gap-x-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/25 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition-all active:scale-95"
            href={paperLink}
            rel="noopener noreferrer"
            target="_blank">
            <DocumentTextIcon className="h-3.5 w-3.5" />
            <span>Paper / Thesis</span>
            <ArrowTopRightOnSquareIcon className="h-3 w-3 opacity-60" />
          </a>
        )}

        {posterLink && (
          <a
            className="inline-flex items-center gap-x-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/25 px-3 py-1.5 text-xs font-semibold text-indigo-300 transition-all active:scale-95"
            href={posterLink}
            rel="noopener noreferrer"
            target="_blank">
            <span>Poster</span>
            <ArrowTopRightOnSquareIcon className="h-3 w-3 opacity-60" />
          </a>
        )}

        {videoLink && (
          <a
            className="inline-flex items-center gap-x-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/25 px-3 py-1.5 text-xs font-semibold text-purple-300 transition-all active:scale-95"
            href={videoLink}
            rel="noopener noreferrer"
            target="_blank">
            <PlayCircleIcon className="h-3.5 w-3.5" />
            <span>Presentation</span>
            <ArrowTopRightOnSquareIcon className="h-3 w-3 opacity-60" />
          </a>
        )}

        {citationText && (
          <button
            className="inline-flex items-center gap-x-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-all active:scale-95 ml-auto"
            onClick={handleCopyCitation}
            type="button">
            {copied ? (
              <>
                <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <DocumentDuplicateIcon className="h-3.5 w-3.5 text-slate-400" />
                <span>Cite</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
});

PublicationItem.displayName = 'PublicationItem';
export default PublicationItem;

