import {
  ArrowDownTrayIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  EnvelopeOpenIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import {
  AcademicCapIcon,
} from '@heroicons/react/24/solid';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

import transportImg from '../images/portfolio/transport.jpg';
import kinshipImg from '../images/portfolio/kinshipImg.png';
import rummyImg from '../images/portfolio/rummy.jpg';
import poetryImg from '../images/portfolio/poetry.png';
import intuitionImg from '../images/portfolio/intuition.png';
import textRestorationImg from '../images/portfolio/textRestoration.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import heroImage from '../images/wallpaper.jpg';
import politicsImg from '../images/portfolio/political.png';
import emotionImg from '../images/portfolio/emotion.png';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';

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
  title: "Kiran Bodipati | AI & ML Engineer | Data Scientist",
  description: "Personal portfolio and research work of Kiran Bodipati, AI and ML Engineer at HERE Technologies and MS Data Science graduate from University of Michigan.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
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
      <p className="text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
        I am an <strong className="text-white font-semibold">AI and ML Engineer</strong> at{' '}
        <strong className="text-cyan-400 font-semibold">HERE Technologies</strong> in Chicago, building production{' '}
        <strong className="text-white font-semibold">LLM and agentic workflows</strong>, chat interfaces, MCP servers, and Agentic BI tools.
      </p>
      <p className="text-sm text-slate-400 sm:text-base">
        Beyond engineering, you'll find me <strong className="text-slate-200">Scuba Diving</strong>,{' '}
        <strong className="text-slate-200">travelling, hiking</strong>, writing poetry, or exploring the outdoors.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1PMhrHgYHziI9Mpq_PT-XlT7aXs-MJhCX/view?usp=sharing',
      text: 'View Resume (PDF)',
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
  description: `Hi! I'm Kiran Bodipati, an AI and ML Engineer at HERE Technologies based in Chicago. I architect and engineer production-grade LLM and agentic workflows, conversational chat interfaces, Model Context Protocol (MCP) servers, and Agentic BI tools powered by Graph RAG and semantic search. My work also centers on robust MLOps and scalable cloud AI infrastructure, designing low-latency semantic caching systems with DynamoDB and Redis, knowledge graph querying, and containerized microservices. I completed my Master of Science in Data Science at the University of Michigan, Ann Arbor with a 4.0 GPA (Honored as Outstanding First Year Student and Valedictory Student Speaker), following my B.S. (Honours with Distinction) in Data Science & AI from Nanyang Technological University, Singapore.`,
  aboutItems: [
    {label: 'Current Role', text: 'AI & ML Engineer, HERE Technologies', Icon: BriefcaseIcon},
    {label: 'Core Focus', text: 'Agentic AI & Predictive Analytics', Icon: SparklesIcon},
    {label: 'Cloud & Infra', text: 'AWS, Terraform & Redis', Icon: BuildingLibraryIcon},
    {label: 'Alma Mater', text: 'Univ. of Michigan (4.0 GPA) & NTU', Icon: BuildingLibraryIcon},
    {label: 'Email', text: 'bodipati@umich.edu', Icon: EnvelopeOpenIcon},
    {label: 'Interests', text: 'Scuba Diving, Hiking, Travel, Poetry', Icon: SparklesIcon},
  ],
};

/**
 * Modern Technical Domains & Stack (Categorized Competency Clouds)
 */
export const skills: SkillGroup[] = [
  {
    name: 'Agentic AI, LLMs & Graph RAG',
    context: 'Applied at HERE Technologies, UMich AI Lab, and EMNLP 2025',
    skills: [
      {name: 'Agentic Workflows & Multi-Agent Systems', highlight: true},
      {name: 'Model Context Protocol (MCP) Servers', highlight: true},
      {name: 'Graph RAG & Semantic Search', highlight: true},
      {name: 'Agentic BI & Conversational UIs', highlight: true},
      {name: 'Large Language Models (LLMs)', highlight: true},
      {name: 'LLM Robustness & Evaluation (PERG)', highlight: true},
      {name: 'PyTorch & Deep Learning', highlight: true},
      {name: 'Computer Vision (YOLO, OpenCV)'},
      {name: 'Graph Neural Networks (GNNs)'},
      {name: 'Super Resolution (Real-ESRGAN)'},
    ],
  },
  {
    name: 'AWS, Cloud & AI Infrastructure',
    context: 'Production AI Infra & Semantic Caching at HERE Technologies',
    skills: [
      {name: 'Amazon DynamoDB (Semantic Caching)', highlight: true},
      {name: 'Redis (In-Memory Semantic Caching & Vectors)', highlight: true},
      {name: 'Amazon Neptune (Graph Database)', highlight: true},
      {name: 'AWS ECS & Fargate (Containerized Microservices)', highlight: true},
      {name: 'AWS Lambda & Serverless Compute', highlight: true},
      {name: 'Terraform (Infrastructure as Code)', highlight: true},
      {name: 'AWS S3 & Amazon CloudWatch'},
      {name: 'Amazon OpenSearch / Vector Stores'},
      {name: 'AWS API Gateway & IAM Security'},
      {name: 'Docker & Containerization'},
    ],
  },
  {
    name: 'Data Engineering, Quality & Orchestration',
    context: 'Applied at HERE Technologies, TEAL India, and HP Inc',
    skills: [
      {name: 'Great Expectations (Data Quality)', highlight: true},
      {name: 'Prefect (Distributed Workflow Orchestration)', highlight: true},
      {name: 'ODCS Data Contracts & Profiling', highlight: true},
      {name: 'Python (Advanced)', highlight: true},
      {name: 'SQL & Relational Databases', highlight: true},
      {name: 'Apache Solr & Information Retrieval'},
      {name: 'Distributed Web Scraping & ETL Pipelines'},
      {name: 'Pandas, NumPy & Polars'},
      {name: 'Tesseract OCR Pipeline'},
    ],
  },
  {
    name: 'Software Engineering, CI/CD & Development',
    context: 'Enterprise Systems, Production Repositories & UI Demos',
    skills: [
      {name: 'GitHub Actions Workflows / GitLab CI/CD Pipelines', highlight: true},
      {name: 'FastAPI & Flask (Async Microservices)', highlight: true},
      {name: 'React & Next.js', highlight: true},
      {name: 'TypeScript & JavaScript'},
      {name: 'Pytest & Automated Test Suites'},
      {name: 'C++ & Algorithms'},
      {name: 'RESTful API Architecture'},
      {name: 'Streamlit & Plotly Dashboards'},
      {name: 'Linux / Bash Scripting'},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Text Restoration using Image Super Resolution',
    description: 'Developed improvements to the state-of-the-art Real-ESRGAN architecture specifically for Scene Text Image Super Resolution, with synthetic dataset generation and higher-order degradation models.',
    url: 'https://hdl.handle.net/10356/166103',
    image: textRestorationImg,
    category: 'ai-vision',
    tags: ['Real-ESRGAN', 'Computer Vision', 'PyTorch', 'Super Resolution'],
    paperUrl: 'https://hdl.handle.net/10356/166103',
  },
  {
    title: 'RedPILS: Political Polarity Search Engine',
    description: 'Semantic search engine indexing subreddits and comments on Indian political discourse, paired with sentiment polarity and topic analysis models.',
    url: 'https://github.com/Sdidt/RedPILS',
    image: politicsImg,
    category: 'nlp-speech',
    tags: ['NLP', 'Sentiment Analysis', 'Information Retrieval', 'Python'],
    githubUrl: 'https://github.com/Sdidt/RedPILS',
  },
  {
    title: 'AI Agents for Playing Indian Rummy',
    description: 'Designed intelligent AI agents simulating card-counting and game-theoretic strategies in Indian Rummy to mathematically prove statistically significant win-rate advantages.',
    url: 'https://github.com/Varun2101/Intelligent-Agents-Play-Rummy',
    image: rummyImg,
    category: 'systems-analytics',
    tags: ['Game Theory', 'AI Agents', 'Statistical Modeling', 'Python'],
    githubUrl: 'https://github.com/Varun2101/Intelligent-Agents-Play-Rummy',
  },
  {
    title: 'Poem2Reel: AI Text-to-Video Engine',
    description: 'An AI-powered pipeline converting written poetry into engaging multimedia short reels by synchronizing generative imagery, audio, and visual pacing.',
    url: 'https://github.com/kiranbodipati/poem2reel',
    image: poetryImg,
    category: 'ai-vision',
    tags: ['Generative AI', 'Multimodal', 'PyTorch', 'FastAPI'],
    githubUrl: 'https://github.com/kiranbodipati/poem2reel',
  },
  {
    title: 'Speaker Segmented Speech Emotion Analyzer',
    description: 'Multi-speaker conversation pipeline that performs speaker diarization and classifies emotional transitions throughout dialogue recordings.',
    url: 'https://github.com/kiranbodipati/Speech_Emotion_recognition',
    image: emotionImg,
    category: 'nlp-speech',
    tags: ['Speech Processing', 'PyTorch', 'Audio Diarization', 'Deep Learning'],
    githubUrl: 'https://github.com/kiranbodipati/Speech_Emotion_recognition',
  },
  {
    title: 'Public Transport Mode Classifier',
    description: 'Trained predictive machine learning models on human mobility GPS time-series data to accurately identify public transport modes for urban planning.',
    url: 'https://github.com/kiranbodipati/transport_classifier',
    image: transportImg,
    category: 'systems-analytics',
    tags: ['GPS Analytics', 'Time Series', 'Machine Learning', 'Python'],
    githubUrl: 'https://github.com/kiranbodipati/transport_classifier',
  },
  {
    title: 'Visual Kinship Recognition via Siamese Networks',
    description: 'Engineered dual-branch Siamese convolutional neural networks to predict facial kinship relationships between family portrait pairs.',
    url: 'https://github.com/kiranbodipati/Visual-Kinship-Recognition',
    image: kinshipImg,
    category: 'ai-vision',
    tags: ['Siamese CNNs', 'Computer Vision', 'PyTorch', 'Face Verification'],
    githubUrl: 'https://github.com/kiranbodipati/Visual-Kinship-Recognition',
  },
  {
    title: 'iNTUition v7: Gamified Virtual Hackathon Platform',
    description: 'A gamified 2D interactive virtual platform built for hosting the iNTUition v7 hackathon, enabling participants, mentors, and sponsors to network live via avatars, attend workshops, and explore sponsor booths in real time.',
    url: 'https://youtu.be/Aa_Vw5EnM44?feature=shared',
    image: intuitionImg,
    category: 'systems-analytics',
    tags: ['Gamified Virtual World', 'Live Networking', 'WebSockets', 'React', 'Full Stack'],
  },
  {
    title: 'MusicMoods: Cross-Modal Music Recommender',
    description: 'Cross-modal sentiment-based music recommender system leveraging NLP sentiment analysis of user mood inputs to generate personalized playlists.',
    url: 'https://github.com/kiranbodipati/MusicMoods',
    image: porfolioImage11,
    category: 'nlp-speech',
    tags: ['Recommender Systems', 'NLP', 'Sentiment Analysis', 'Python'],
    githubUrl: 'https://github.com/kiranbodipati/MusicMoods',
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2024 - Dec 2025',
    location: 'University of Michigan, Ann Arbor',
    title: 'Master of Science in Data Science',
    badge: 'GPA: 4.0 / 4.0',
    tags: [
      'Outstanding First Year Student Award',
      'Valedictory Student Speaker',
      'Science of LLMs',
      'Advanced Computer Vision',
      'Bayesian Modeling',
      'Advanced AI',
      'Database Systems',
      'Graph Theory',
    ],
    content: (
      <div className="space-y-2.5">
        <p className="text-slate-300">
          Maintained a perfect <strong className="text-white">4.0 / 4.0 GPA</strong>. Honored with the{' '}
          <strong className="text-amber-300 font-semibold">Outstanding First Year Student Award</strong>, and selected as the{' '}
          <strong className="text-indigo-300 font-semibold">Valedictory Student Speaker</strong> for my cohort. Conducted research in LLM interpretability and multimodal vision-language architectures.
        </p>
        <div className="flex flex-wrap gap-2 pt-0.5">
          <span className="inline-flex items-center gap-x-1 rounded-lg bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 text-xs font-semibold text-amber-300">
            🏆 Outstanding First Year Student Award
          </span>
          <span className="inline-flex items-center gap-x-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 px-2.5 py-1 text-xs font-semibold text-indigo-300">
            🎙️ Valedictory Student Speaker
          </span>
        </div>
        <div className="text-xs text-slate-400">
          <strong className="text-slate-300">Key Coursework:</strong> Science of LLMs, Advanced Computer Vision, Bayesian Modeling, Advanced Artificial Intelligence, Advanced Database Systems, Regression Analysis, Graph Theory.
        </div>
      </div>
    ),
  },
  {
    date: 'Aug 2019 - Jun 2023',
    location: 'Nanyang Technological University, Singapore',
    title: 'Bachelor of Science (Honours with Distinction) in Data Science & AI',
    badge: 'Honours with Distinction',
    tags: ['Machine Learning', 'Deep Learning', 'Data Structures & Algorithms', 'NLP', 'Data Mining', 'Software Engineering'],
    content: (
      <div className="space-y-2">
        <p className="text-slate-300">
          Graduated with Honours (Distinction) in Data Science and Artificial Intelligence, with a Minor in Business.
        </p>
        <div className="text-xs text-slate-400">
          <strong className="text-slate-300">Key Coursework:</strong> Deep Learning & Neural Networks, Data Structures & Algorithms, Machine Learning, Natural Language Processing, Data Mining, Computer Vision, Regression Analysis, Time Series Analysis, Linear Algebra, Probability & Statistics.
        </div>
      </div>
    ),
  },
];

/**
 * Professional Experience
 */
export const experience: TimelineItem[] = [
  {
    date: 'Jan 2026 - Present',
    location: 'HERE Technologies, Chicago',
    title: 'AI and ML Engineer',
    badge: 'Current Role',
    employmentType: 'Full-time',
    workMode: 'Hybrid',
    tags: [
      'LLM Agents',
      'MCP Servers',
      'Predictive Analytics',
      'Agentic BI',
      'Semantic Search',
      'Semantic Caching',
      'DynamoDB',
      'Redis',
      'Graph Querying',
      'AWS ECS',
      'AWS Lambda',
      'Terraform',
    ],
    content: (
      <ul className="list-disc list-inside space-y-1.5 text-slate-300">
        <li>
          Architecting and deploying production <strong className="text-white font-semibold">LLM and agentic workflows</strong>, conversational chat interfaces, <strong className="text-cyan-300 font-semibold">Model Context Protocol (MCP) servers</strong>, and <strong className="text-indigo-300 font-semibold">Agentic BI tools</strong> driven by semantic search and predictive analytics.
        </li>
        <li>
          Engineering MLOps and cloud AI infrastructure for agentic applications, including <strong className="text-white">low-latency semantic caching</strong> using <strong className="text-cyan-300">Amazon DynamoDB</strong> and <strong className="text-cyan-300">Redis</strong>, knowledge graph querying, containerized microservices on AWS ECS, and serverless compute via AWS Lambda orchestrated with Terraform.
        </li>
      </ul>
    ),
  },
  {
    date: 'June 2025 - August 2025',
    location: 'HERE Technologies, Chicago',
    title: 'Data Science Intern',
    employmentType: 'Internship',
    workMode: 'Hybrid',
    tags: ['Great Expectations', 'Prefect', 'LLM Data Profiling', 'ODCS Data Contracts', 'Distributed Validation', 'Python', 'AWS'],
    content: (
      <ul className="list-disc list-inside space-y-1.5 text-slate-300">
        <li>
          Developed an automatic data profiling and quality tool leveraging statistical and LLM profiling to generate data-agnostic quality rules and <strong className="text-white font-semibold">ODCS-compliant data contracts</strong>.
        </li>
        <li>
          Developed an automatic distributed validation pipeline using <strong className="text-white font-semibold">Great Expectations</strong> and <strong className="text-white font-semibold">Prefect</strong>, improving runtime by <strong className="text-emerald-400 font-bold">90%</strong>.
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2023 - Present',
    location: 'MyProp India',
    title: 'Co-Founder & Data Scientist',
    employmentType: 'Co-Founder',
    workMode: 'Hybrid',
    tags: ['Computer Vision', 'PyTorch', 'Land Analytics', 'Face Identification', 'Business Strategy'],
    content: (
      <ul className="list-disc list-inside space-y-1.5 text-slate-300">
        <li>
          Spearheading technology vision and engineering AI-driven real estate solutions; built and deployed an automated land analytics system to evaluate property zoning, pricing, and feasibility.
        </li>
        <li>
          Architected a real-time foot-traffic and customer behavior analytics platform using PyTorch facial identification to measure customer dwell time and visit frequency for commercial properties.
        </li>
      </ul>
    ),
  },
  {
    date: 'August 2023 - April 2024',
    location: 'TEAL India',
    title: 'Data Engineer',
    employmentType: 'Full-time',
    workMode: 'On-site',
    tags: ['Graph Neural Networks', 'Python', 'Tesseract OCR', 'Apache Solr', 'Data Pipelines'],
    content: (
      <ul className="list-disc list-inside space-y-1.5 text-slate-300">
        <li>
          Engineered distributed scraping and OCR pipelines using Python, Tesseract, and IndicTranslate to extract and parse over 3 million historical revenue court records and land deeds into Apache Solr.
        </li>
        <li>
          Built an automated Graph Neural Network document validation engine that predicts missing title chain links with <strong className="text-white font-semibold">91% accuracy</strong>.
        </li>
      </ul>
    ),
  },
  {
    date: 'January 2022 - May 2022',
    location: 'HP Inc, Singapore',
    title: 'Data Science Intern',
    employmentType: 'Internship',
    workMode: 'Hybrid',
    tags: ['Bayesian Belief Networks', 'FastAPI', 'Streamlit', 'Fault Detection', 'Pytest'],
    content: (
      <ul className="list-disc list-inside space-y-1.5 text-slate-300">
        <li>
          Performed root cause analysis for manufacturing fault detection using Bayesian Belief Networks (BBN), achieving a <strong className="text-white font-semibold">15% reduction</strong> in machine downtime.
        </li>
        <li>
          Engineered incremental learning preprocessing pipelines with comprehensive Pytest suites, and deployed interactive diagnostic dashboards using FastAPI, Streamlit, and Plotly.
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2021 - November 2021',
    location: 'Shopee Singapore',
    title: 'Data Science Intern',
    employmentType: 'Internship',
    workMode: 'Hybrid',
    tags: ['YOLOv5', 'OpenCV', 'PyTorch', 'Object Detection', 'CNNs'],
    content: (
      <ul className="list-disc list-inside space-y-1.5 text-slate-300">
        <li>
          Built an end-to-end brand and logo recognition pipeline for e-commerce listings using OpenCV, YOLOv5, and PyTorch.
        </li>
        <li>
          Finetuned multi-class CNNs and engineered synthetic training edge cases, improving recall from 0.10 to <strong className="text-white font-semibold">0.35</strong> and precision to <strong className="text-white font-semibold">0.60</strong> across 150 brand classes.
        </li>
      </ul>
    ),
  },
  {
    date: 'July 2021 - September 2021',
    location: 'Ubisoft Singapore',
    title: 'Full Stack Project Intern',
    employmentType: 'Internship',
    workMode: 'Remote',
    tags: ['OCR', 'Flask', 'React', 'LinkedIn Integration', 'NLP'],
    content: (
      <ul className="list-disc list-inside space-y-1.5 text-slate-300">
        <li>
          Designed an automated video game credits extraction engine using deep OCR to identify developer names and roles from game footage.
        </li>
        <li>
          Built a Flask and React web repository linking in-game credit profiles to verified developer LinkedIn accounts for real-time talent search.
        </li>
      </ul>
    ),
  },
];

/**
 * Publications
 */
export const publications: PublicationItem[] = [
  {
    date: 'November 2025',
    authors: 'Chimaobi Okite, Naihao Deng, Kiran Bodipati, Huaidian Hou, Joyce Chai, Rada Mihalcea',
    location: 'Findings of EMNLP 2025 (Suzhou, China)',
    title: 'Benchmarking and Improving LLM Robustness for Personalized Generation',
    badge: 'EMNLP 2025',
    paperLink: 'https://aclanthology.org/2025.findings-emnlp.870/',
    citationText: 'Chimaobi Okite, Naihao Deng, Kiran Bodipati, Huaidian Hou, Joyce Chai, and Rada Mihalcea. 2025. Benchmarking and Improving LLM Robustness for Personalized Generation. In Findings of the Association for Computational Linguistics: EMNLP 2025, pages 16040–16072, Suzhou, China. Association for Computational Linguistics.',
    cite_as: (
      <p className="text-xs text-slate-400">
        Okite, C., Deng, N., Bodipati, K., Hou, H., Chai, J., & Mihalcea, R. (2025). <em>Benchmarking and Improving LLM Robustness for Personalized Generation.</em> In Findings of the Association for Computational Linguistics: EMNLP 2025, pages 16040–16072.{' '}
        <a className="text-cyan-400 hover:underline" href="https://aclanthology.org/2025.findings-emnlp.870/" rel="noopener noreferrer" target="_blank">
          https://aclanthology.org/2025.findings-emnlp.870/
        </a>
      </p>
    ),
    url: (
      <p className="text-xs text-slate-400">
        <a className="text-cyan-400 hover:underline" href="https://aclanthology.org/2025.findings-emnlp.870.pdf" rel="noopener noreferrer" target="_blank">[PDF]</a> |{' '}
        <a className="text-cyan-400 hover:underline" href="https://aclanthology.org/2025.findings-emnlp.870/" rel="noopener noreferrer" target="_blank">[Anthology]</a>
      </p>
    ),
    content: (
      <p className="text-slate-300 text-sm leading-relaxed">
        Recent years have witnessed a growing interest in personalizing the responses of large language models (LLMs). While existing evaluations primarily focus on whether a response aligns with a user's preferences, we argue that factuality is an equally important yet often overlooked dimension. In the context of personalization, we define a model as robust if its responses are both factually accurate and align with user preferences. To assess this, we introduce <strong>PERG</strong>, a scalable framework for evaluating robustness of LLMs in personalization, along with a new dataset, <strong>PERGData</strong>. We evaluate fourteen models from five different model families using different prompting methods. To mitigate failures, we propose <strong>Pref-Aligner</strong>, a two-stage approach that improves robustness by an average of 25% across models.
      </p>
    ),
  },
  {
    date: 'April 2023',
    authors: 'Kiran Bodipati (Advised by: Prof. Chen Change Loy)',
    location: 'Nanyang Technological University, Singapore',
    title: 'Text Restoration Using Image Super Resolution',
    badge: 'Thesis',
    paperLink: 'https://hdl.handle.net/10356/166103',
    posterLink: 'https://www.ntu.edu.sg/docs/librariesprovider118/technovationposter/apr2023/bodipati-kiran_text-restoration-using-image-super-resolution.pdf?sfvrsn=73ea5ba1_3',
    videoLink: 'https://youtu.be/hRNKl1-Dkpc?feature=shared',
    citationText: 'Bodipati, K. (2023). Text restoration using image super resolution. Nanyang Technological University, Singapore.',
    cite_as: (
      <p className="text-xs text-slate-400">
        Bodipati, K. (2023). <em>Text restoration using image super resolution.</em> Nanyang Technological University, Singapore.{' '}
        <a className="text-cyan-400 hover:underline" href="https://hdl.handle.net/10356/166103" rel="noopener noreferrer" target="_blank">
          https://hdl.handle.net/10356/166103
        </a>
      </p>
    ),
    url: (
      <p className="text-xs text-slate-400">
        <a className="text-cyan-400 hover:underline" href="https://hdl.handle.net/10356/166103">[Thesis]</a> |{' '}
        <a className="text-cyan-400 hover:underline" href="https://www.ntu.edu.sg/docs/librariesprovider118/technovationposter/apr2023/bodipati-kiran_text-restoration-using-image-super-resolution.pdf?sfvrsn=73ea5ba1_3">[Poster]</a> |{' '}
        <a className="text-cyan-400 hover:underline" href="https://youtu.be/hRNKl1-Dkpc?feature=shared">[Presentation]</a>
      </p>
    ),
    content: (
      <p className="text-slate-300 text-sm leading-relaxed">
        Text Recognition in unconstrained natural scenes often degrades severely when input imagery is low resolution. Traditional super-resolution models designed for natural imagery fail on text due to fine stroke geometry. In this research, we designed higher-order degradation models and synthetic text generation pipelines to train an enhanced Real-ESRGAN architecture tailored specifically for scene text image super resolution.
      </p>
    ),
  },
  {
    date: 'July 2021',
    authors: 'Kiran Bodipati',
    location: 'The Student Conference on AI (STCAI 2021), Singapore',
    title: 'Explainability of Deep Learning-based Graph Embeddings',
    badge: 'Conference Paper',
    videoLink: 'https://youtu.be/utXm1ciyVpg?feature=shared',
    citationText: 'Kiran Bodipati (2021). Explainability of Deep Learning-based Graph Embeddings. The International Student Conference on AI (STCAI 2021), Singapore.',
    cite_as: (
      <p className="text-xs text-slate-400">
        Bodipati, K. (2021). <em>Explainability of Deep Learning-based Graph Embeddings.</em> STCAI 2021, Singapore.
      </p>
    ),
    url: (
      <p className="text-xs text-slate-400">
        <a className="text-cyan-400 hover:underline" href="https://youtu.be/utXm1ciyVpg?feature=shared">[Presentation]</a>
      </p>
    ),
    content: (
      <p className="text-slate-300 text-sm leading-relaxed">
        Investigated the latent representation of Graph Convolutional Networks (GCNs) by decomposing node embeddings into spatial feature spaces. Employs techniques like GNNExplainer, subgraph clustering, and dimensional heatmaps to explain how topological neighbors influence high-dimensional representations.
      </p>
    ),
  },
  {
    date: 'July 2021',
    authors: 'Varun S Iyengar, Kiran Bodipati, Abhishek Vaidyanathan',
    location: 'The Student Conference on AI (STCAI 2021), Singapore',
    title: 'Statistical Analysis of the Effectiveness of Card-counting on Indian Rummy',
    badge: 'Conference Paper',
    videoLink: 'https://youtu.be/Y5vP3P_phX0?feature=shared',
    citationText: 'Varun S Iyengar, Kiran Bodipati, Abhishek Vaidyanathan (2021). Statistical Analysis of the Effectiveness of Card-counting on Indian Rummy. STCAI 2021, Singapore.',
    cite_as: (
      <p className="text-xs text-slate-400">
        Iyengar, V. S., Bodipati, K., & Vaidyanathan, A. (2021). <em>Statistical Analysis of the Effectiveness of Card-counting on Indian Rummy.</em> STCAI 2021, Singapore.
      </p>
    ),
    url: (
      <p className="text-xs text-slate-400">
        <a className="text-cyan-400 hover:underline" href="https://youtu.be/Y5vP3P_phX0?feature=shared">[Presentation]</a>
      </p>
    ),
    content: (
      <p className="text-slate-300 text-sm leading-relaxed">
        Novel empirical study on card-counting strategies applied to Indian Rummy. Designed repeatable intelligent agents simulating algorithmic card counting and probabilistic discard tracking, proving statistically significant win-rate increases and reduced hand variance.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: "Let's Connect.",
  description: "Feel free to reach out for research discussions, tech collaborations, or to connect!",
  items: [
    {
      type: ContactType.Email,
      text: 'bodipati@umich.edu',
      href: 'mailto:bodipati@umich.edu',
    },
    {
      type: ContactType.Location,
      text: 'Chicago, IL / Ann Arbor, MI',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kiranbodipati'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kiranbodipati/'},
  {label: 'Google Scholar', Icon: AcademicCapIcon, href: 'https://scholar.google.com/citations?user=hb2FzQYAAAAJ&hl=en'},
];

