import {FC, memo, PropsWithChildren, ReactNode} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string; icon?: ReactNode}>> = memo(({title, icon, children}) => {
  return (
    <div className="flex flex-col gap-y-6 pt-12 first:pt-0">
      <div className="flex items-center gap-x-3 pb-3 border-b border-white/10">
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-md shadow-cyan-500/10">
            {icon}
          </div>
        )}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h3>
      </div>
      <div className="flex flex-col gap-y-6">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;

