import {
  ArrowDownTrayIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  EnvelopeOpenIcon,
  // FlagIcon,
  // MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import {
  AcademicCapIcon,
  // EnvelopeIcon,
} from '@heroicons/react/24/solid';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';

// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import transportImg from '../images/portfolio/transport.jpg';
import kinshipImg from '../images/portfolio/kinshipImg.png';
import rummyImg from '../images/portfolio/rummy.jpg';
import poetryImg from '../images/portfolio/poetry.png';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import intuitionImg from '../images/portfolio/intuition.png';
import textRestorationImg from '../images/portfolio/textRestoration.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import heroImage from '../images/wallpaper.jpg';
import politicsImg from '../images/portfolio/political.png'
import emotionImg from '../images/portfolio/emotion.png'

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  PublicationItem,
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
  name: `Kiran Bodipati`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a graduate from <strong className="text-stone-100">Nanyang Technological University</strong>, specialising in <strong className="text-stone-100">Data Science and Artificial Intelligence.</strong> I'm currently a Co-Founder at
        <strong className="text-stone-100"><a href='https://mypropindia.com/' > MyProp India </a></strong> and a Data Engineer at <strong className="text-stone-100"><a href='https://www.tealindia.in/' > TEAL </a></strong>, building technology driven real estate management solutions. 
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
      href: 'https://drive.google.com/file/d/1PMhrHgYHziI9Mpq_PT-XlT7aXs-MJhCX/view?usp=sharing',
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
    {label: 'Email', text: 'kiran006 [at] e [dot] ntu [dot] edu [dot] sg', Icon: EnvelopeOpenIcon},
    {label: 'Study', text: 'Nanyang Technological University, Singapore', Icon: BuildingLibraryIcon},
    {label: 'Work', text: 'MyProp India, TEAL', Icon: BuildingOffice2Icon},
    // {label: 'Employment', text: 'MyProp India ', Icon: BuildingOffice2Icon},
    // {label: 'Location', text: 'Bangalore / Singapore', Icon: MapIcon} ,
    {label: 'Research Interests', text: 'Machine Learning, Computer Vision, NLP, Data Science', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Personal Interests', text: 'Scuba Diving, Hiking,Travelling, Poetry ', Icon: SparklesIcon},
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
    title: 'Text Restoration using Image Super Resolution',
    description: 'Improvements to the state of the art Real-ESRGAN Model for Scene Text Image Super Resolution',
    url: 'https://hdl.handle.net/10356/166103',
    image: textRestorationImg,
  },
  {
    title: 'RedPILS',
    description: 'Search Engine of subreddits and comments related to the Indian Political Scenario and analysis into the polarity of the comments/subreddits.',
    url: 'https://github.com/Sdidt/RedPILS',
    image: politicsImg,
  },
  {
    title: 'AI Agents for playing Rummy',
    description: 'AI Agents simulating the basic and card counting strategies of Rummy. Experiments for the Rummy paper.',
    url: 'https://github.com/Varun2101/Intelligent-Agents-Play-Rummy',
    image: rummyImg,
  },
  {
    title: 'Poem2Reel',
    description: 'An app that converts a text poem into a short video by using AI to generate images and music.',
    url: 'https://github.com/kiranbodipati/poem2reel',
    image: poetryImg,
  },
  {
    title: 'Speaker Segmented Speech Emotion Analyser',
    description: 'Segmented speech analysis in a conversation, to identify diff  speakers in conversation & different emotions exhibited.',
    url: 'https://github.com/kiranbodipati/Speech_Emotion_recognition',
    image: emotionImg,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  {
    title: 'Kinship Verifiction',
    description: 'Kaggle Competition: Ensemble model to check if two people belong to same family or not from their images',
    url: 'https://kiranbodipati.github.io',
    image: kinshipImg,
  },
  {
    title: 'iNTUition Playground',
    description: 'A hackathon playground that allows participants to interact, attend workshops, and have fun!',
    url: 'https://youtu.be/Aa_Vw5EnM44?feature=shared',
    image: intuitionImg,
  },
  {
    title: 'Urban Planning System for Enhancement of Transport',
    description: 'Netwrok graph analysis and model to optimise the public transport systems (Buses and Metro Rails) in Singapore',
    url: 'https://github.com/kiranbodipati/urban_planning_system',
    image: transportImg,
  },
  {
    title: 'MusicMoods',
    description: 'Sentiment based music recommender system using AI and NLP.',
    url: 'https://github.com/kiranbodipati/MusicMoods',
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
    content: (
      <>  
    <p> Some relevant coursework are Data Science, Machine Learning, Data Structures and Algorithms, Linear Algebra, Calculus, Probability Theories, Statistics, OODP, Databases, Artificial Intelligence, Machine Learning, Software Engineering, Deep Learning & Neural Networks, Data Mining, NLP, Regression Analysis, Computational Finance, Data Visualisation, Product Science, Time series analysis, Information Retrieval.</p>
    <p>I also have a Minor in Business.</p>
    </>
    )
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
    location: 'MyProp India (Land Watchman Technologies Pvt Ltd)',
    title: 'Co-Founder & Data Scientist',
    content: (
      <>
      <p>
        Here, I build technology driven real estate solutions. A prominent project is the deployment of an AI based land analytics system. I've also built a Face Identification model using PyTorch to count users walking in and out of a location to provide analytics of customer behaviours in in the location, which can improve customer hospitality, in locations that have stores like retail etc.
        </p>
      <p>
      I'm also involved in business development, business expansion strategies and customer acquisition strategies.
      </p>
      </>
    ),
  },
  {
    date: 'August 2023 - Present',
    location: 'TEAL India (Terralytics Analysis Pvt Ltd)',
    title: 'Data Engineer',
    content: (
      <p>
       Developed a dynamic scraping algorithm using Python, Tesseract, and IndicTranslate to extract over 3 million historical revenue court cases from government court records and SOLR to index them. Developed and took independent responsibility for a Graph network based document validation system to validate the completeness of a title chain and predict flag potential missing links in the chain with an accuracy of 91%.  

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

export const publications: PublicationItem[] = [
  {
    date: ' April 2023',
    authors: 'Kiran Bodipati, Advised by: Chen Change Loy',
    location: 'Nanyang Technological University, Singapore',
    title: 'Text Restoration Using Image Super Resolution',
    cite_as: (
      <p>Bodipati, K. (2023). <em>Text restoration using image super resolution.</em> Nanyang Technological University, Singapore. <a href="https://hdl.handle.net/10356/166103">https://hdl.handle.net/103056/166103</a></p>

    ),
    url: (
      <p><a href='https://hdl.handle.net/10356/166103'>  [Thesis] </a> | <a href='https://www.ntu.edu.sg/docs/librariesprovider118/technovationposter/apr2023/bodipati-kiran_text-restoration-using-image-super-resolution.pdf?sfvrsn=73ea5ba1_3'> [Poster] </a> | <a href='https://youtu.be/hRNKl1-Dkpc?feature=shared'> [Presentation] </a></p>
    ),
    content: (
      <p>
       <strong>Abstract: </strong> Text Recognition and scene text recognition have gained high prominence with the emergence of advanced deep learning techniques, such as CNNs. However, when the scene data is of low resolution, most models fail to provide accurate results. To this extent, super resolution is proposed as a pre processing technique to improve the resolution of the images. Traditional Super Resolution models are developed for natural scenes and tend to fail in the case of scene text, due to several characteristics of the text that make it challenging for text super resolution. The lack of high quality datasets for this task is a factor in the poor performance of existing models. In our study, we provide a comprehensive review of existing super resolution techniques and the techniques specific to the context of scene text data. In this study, we build a new practical dataset that can be used to this extent. We create high resolution synthetic text data and collect high resolution images crawling the web. The corresponding low resolution images are created using a practical higher order degradation model. We train on the architecture of Real-ESRGAN and provide a qualitative and qualitative study of the datasets proposed and demonstrate the performance of the new models. Comparisons against the pre-trained Real-ESRGAN model is provided. The limitations of the proposed datasets and models are discussed.
      </p>
    ),
  },
  {
    date: 'July 2021',
    authors: 'Kiran Bodipati',
    location: 'The Student Conference on AI (STCAI) 2021, Singapore',
    url: (
      <p><a href='https://youtu.be/utXm1ciyVpg?feature=shared'>  [Presentation] </a></p>
    ),
    cite_as: (
      <p>Kiran Bodipati (2021). <em>Explainability of Deep Learning-based Graph Embeddings.</em> The International Student Conference on AI (STCAI 2021), Singapore.</p>

    ),
    title: 'Explainability of Deep Learning-based Graph Embeddings',
    content: (
      <p>
       <strong>Abstract:</strong> Deep neural networks have immense potential to learn from various forms of data, be it images, text, or graphs. Hence it becomes imperative that we understand how these networks work, and understand the mechanisms of data input, processing, and representation because it can provide us insights about the performance, stability, and security of the networks. The representation of data in images and text is in the form of an ordered vector space, and the embeddings provided by networks that work on them can be interpreted as operations within that vector space. However, graphs tend to behave mysteriously because the nodes and edges can be arranged arbitrarily in space. Various attempts have been made to provide an explanation to what aspects of the input data leads to the specific results that have been provided by the graph based neural networks. In this study, we attempt to provide interpretation of the embeddings generated for a node by Deep Neural networks by explaining a node in terms of its neighbouring features. For this purpose, a Deep Neural Network, namely the Graph Convolutional Network was used to generate a d-dimensional embedding for each node of a graph dataset. The nodes are then clustered according to the values in each of the dimensions. We then generate visualisations like subgraphs, and heatmaps using techniques like GNNExplainer to measure how the clusters vary across different dimensions to gain more insight into the graph embedding.
      </p>
    ),
  },
  {
    date: 'July 2021',
    authors: 'Varun S Iyengar, Kiran Bodipati, Abhishek Vaidyanathan',
    location: 'The Student Conference on AI (STCAI) 2021, Singapore',
    url: (
      <p><a href='https://youtu.be/Y5vP3P_phX0?feature=shared'>  [Presentation] </a></p>
    ),
    cite_as: (
      <p>Varun S Iyengar, Kiran Bodipati, Abhishek Vaidyanathan. (2021) <em>Statistical Analysis of the Effectiveness of Card-counting on Indian Rummy.</em> The International Student Conference on AI (STCAI 2021), Singapore.</p>

    ),
    title: 'Statistical Analysis of the Effectiveness of Card-counting on Indian Rummy',
    content: (
      <p>
        <strong>Abstract:</strong> Online Rummy has seen a meteoric rise in recent times. In the five years that gambling with Rummy has been legalised in India, the Online Rummy industry has grown by an estimated US$300 million. Past papers have covered the history, legality, and societal impact of gambling with Rummy. However, few studies have investigated the strategies involved in the game. We propose a novel study on the effectiveness of card-counting on Indian Rummy, extending similar studies on other popular card games such as Poker. We employ the use of Intelligent Agents following predefined algorithms that simulate card-counting and non-counting strategies. This approach is consistent in policy, repeatable, verifiable, and enables us to draw statistically significant results. We conclude that card-counting provides increased win rates, lowered risk, and greater hand efficiency.
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
      text: '',
      href: '',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kiranbodipati'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kiranbodipati/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/kiran.bodipati'},
  {label: 'Google Scholar', Icon: AcademicCapIcon, href: 'https://scholar.google.com/citations?user=hb2FzQYAAAAJ&hl=en'},
  // {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:kiranbodipati@gmail.com'},
];
