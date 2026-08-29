import {CheckCircleIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills, context} = skillGroup;

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2 mb-2">
          <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">{name}</h4>
          <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-indigo-300 shrink-0">
            {skills.length} competencies
          </span>
        </div>

        {/* Demonstrated in Context */}
        {context && (
          <p className="text-xs text-slate-400 mb-2.5 flex items-center gap-x-1.5">
            <span className="text-cyan-400 font-semibold">In Practice:</span>
            <span className="italic">{context}</span>
          </p>
        )}

        {/* Competency Badge Cloud */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {skills.map((skill, index) => (
            <Skill key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, highlight} = skill;

  return (
    <span
      className={classNames(
        'inline-flex items-center gap-x-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all duration-200 cursor-default select-none',
        highlight
          ? 'bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10 hover:border-cyan-400/50'
          : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/25',
      )}>
      {highlight && <CheckCircleIcon className="h-3.5 w-3.5 text-cyan-400 shrink-0" />}
      <span>{name}</span>
    </span>
  );
});

Skill.displayName = 'Skill';


