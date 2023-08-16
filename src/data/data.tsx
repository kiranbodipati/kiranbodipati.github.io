import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  BuildingLibraryIcon,
  EnvelopeOpenIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

import {
  AcademicCapIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/wallpaper.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kiran Bodipati\'s Personal Website',
  description: "My Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Kiran Bodipati`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a graduate from <strong className="text-stone-100">Nanyang Technological University</strong>, specialising in <strong className="text-stone-100">Data Science and Artificial Intelligence.</strong> I'm currently a Co-Founder at
        <strong className="text-stone-100"> MyProp India</strong>, building a technology driven real estate management solution.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">Scuba Diving</strong>,
        writing <strong className="text-stone-100">poems</strong>, or exploring nature{' '}
        <strong className="text-stone-100">around the world</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1YCb6cvcfYZCKJ9Me4lCNcaM-SJte_z_k/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` Hi! I'm Kiran and I'm a graduate of Data Science and AI at NTU Singapore. I've spent the last four years exploring my passion for AI by working on various projects in various domains like NLP, Computer Vision, Graph networks, etc. Through my experiences, I've had the opportunity to improve my skills, and uphold my passion of utilizing technology for the betterment of humankind. `,
  aboutItems: [
    {label: 'Phone', text: '+91 77609 53029 / +65 8247 4652', Icon: PhoneIcon},
    {label: 'Email', text: 'kiranbodipati@gmail.com', Icon: EnvelopeOpenIcon},
    {label: 'Study', text: 'Nanyang Technological University, Singapore', Icon: BuildingLibraryIcon},
    {label: 'Employment', text: 'LandWatchman Technologies Pvt Ltd', Icon: BuildingOffice2Icon},
    {label: 'Location', text: 'Bangalore / Singapore', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Scuba Diving, Travelling, Poetry, Taylor Swift', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2019 - Jun 2023',
    location: 'Nanyang Technological University',
    title: 'Bachelor of Science(Honours - Distinction) in Data Science and Artificial Intelligence',
    content: <p>I also have a Minor in Business. Some relevant coursework are Data Science, Machine Learning, Data Structures and Algorithms, Linear Algebra, Calculus, Probability Theories, Statistics, OODP, Databases, Artificial Intelligence, Machine Learning, Software Engineering, Deep Learning & Neural Networks, Data Mining, NLP, Regression Analysis, Computational Finance, Data Visualisation, Product Science, Time series analysis, Information Retrieval.</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - Present',
    location: 'Land Watchman Technologies Pvt Ltd',
    title: 'Co-Founder & Data Scientist',
    content: (
      <p>
          Building a Face Identification model using PyTorch to count users walking in and out of stores, provide analytics of customer behaviours in stores, improve customer hospitality, & provide ease of customer checkout at purchase point.
          Collaborated in business development, business expansion strategies and customer acquisition strategies.
      </p>
    ),
  },
  {
    date: 'January 2022 - May 2022',
    location: 'HP Inc',
    title: 'Data Science Intern',
    content: (
      <p>
          Performed Root cause analysis for fault detection in manufacturing processes using Bayesian Belief Networks to reduce downtime by 15%.
          Developed pre-processing tool of automation pipeline, incremental learning algorithms to update the BBN and leveraged Pytest to unit test the tool, and FastAPI, Streamlit & Plotly to deploy the user-interface.
      </p>
    ),
  },
  {
    date: 'May 2021 - November 2021',
    location: 'Shopee Singapore',
    title: 'Data Science Intern',
    content: (
      <p>
          Developed a general brand detection model pipeline to identify logos in daily objects present in product listings and classify brands by employing the OpenCV, YOLOv5 and Pytorch Frameworks.
          Employed image pre-processing techniques, produced custom training edge cases, finetuned open-source CNN models, etc to improve recall & precision from 0.1 to 0.35 & 0.6 respectively (150 class model)
      </p>
    ),
  },
  {
    date: 'July 2021 - September 2021',
    location: 'Ubisoft Singapore',
    title: 'Full Stack Project Intern',
    content: (
      <p>
          Designed end-to-end video game credits extraction service using OCR model to extract names and job titles of various people working on the game. Created a Flask and React based website to bind profiles of people listed in-game to Linkedin profiles, to deliver a real time search repository of game developers.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kiranbodipati'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kiranbodipati/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/kiran.bodipati'},
  {label: 'Google Scholar', Icon: AcademicCapIcon, href: 'https://scholar.google.com/citations?user=hb2FzQYAAAAJ&hl=en'},
  {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:kiranbodipati@gmail.com'},
];
