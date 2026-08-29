import {
  AcademicCapIcon,
  BriefcaseIcon,
  CommandLineIcon,
  DocumentTextIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {education, experience, publications, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import PublicationItem from './PublicationItem';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const briefcaseIcon = <BriefcaseIcon className="h-5 w-5" />;
const academicCapIcon = <AcademicCapIcon className="h-5 w-5" />;
const documentTextIcon = <DocumentTextIcon className="h-5 w-5" />;
const commandLineIcon = <CommandLineIcon className="h-5 w-5" />;

const Resume: FC = memo(() => {
  return (
    <Section className="py-20 lg:py-28" sectionId={SectionId.Resume}>
      <div className="flex flex-col gap-y-16">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-x-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Journey</span>
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Experience & Education
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            A comprehensive record of my industry roles, academic degrees, peer-reviewed research, and demonstrated technical domains.
          </p>
        </div>

        {/* Experience Section */}
        <ResumeSection icon={briefcaseIcon} title="Work Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>

        {/* Education Section */}
        <ResumeSection icon={academicCapIcon} title="Education & Academic Honors">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>

        {/* Publications Section */}
        <ResumeSection icon={documentTextIcon} title="Research Papers & Publications">
          {publications.map((item, index) => (
            <PublicationItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>

        {/* Technical Domains & Demonstrated Stack */}
        <ResumeSection icon={commandLineIcon} title="Core Technical Domains & Stack">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;


