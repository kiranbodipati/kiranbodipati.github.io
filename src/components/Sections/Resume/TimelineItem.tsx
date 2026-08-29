import {CalendarIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {TimelineItem as TimelineItemType} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemType}> = memo(({item}) => {
  const {title, date, location, content, tags, badge, employmentType, workMode} = item;

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">{title}</h4>

            {/* Employment Type Badge (Full-time / Internship / Co-Founder) */}
            {employmentType && (
              <span
                className={classNames(
                  'rounded-full px-2.5 py-0.5 text-[11px] font-bold border shadow-sm',
                  employmentType === 'Full-time'
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                    : employmentType === 'Internship'
                    ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300'
                    : 'bg-purple-500/15 border-purple-500/30 text-purple-300',
                )}>
                {employmentType}
              </span>
            )}

            {/* Work Mode Badge (On-site / Hybrid / Remote) */}
            {workMode && (
              <span className="rounded-full bg-slate-800/80 border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                {workMode}
              </span>
            )}

            {/* General Badge (e.g., Current Role, Honours) */}
            {badge && badge !== employmentType && (
              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300">
                {badge}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1.5">
            <span className="flex items-center gap-x-1 font-medium text-slate-300">
              <MapPinIcon className="h-3.5 w-3.5 text-indigo-400" />
              <span>{location}</span>
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-x-1.5 self-start sm:self-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
          <CalendarIcon className="h-3.5 w-3.5 text-cyan-400" />
          <span>{date}</span>
        </div>
      </div>

      <div className="pt-4 text-sm leading-relaxed text-slate-300">
        {content}
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
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
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;

