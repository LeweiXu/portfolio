
import { ExperienceItem, EducationData, ProjectItem, SkillGroup, LanguageSkill } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    company: 'Harvey Aboriginal Corporation',
    role: 'IT & Data Systems Intern',
    period: 'Nov 2025 – Dec 2025',
    tag: 'Internship',
    tagType: 'current',
    bullets: [
      'Designed and implemented new data and IT systems across the organisation.',
      'Supported upgrades to software and hardware to improve reliability and efficiency.',
      'Worked directly with staff to understand needs and provide practical system solutions.'
    ]
  },
  {
    id: '2',
    company: 'UWA Business School',
    role: 'Full Stack Developer',
    period: 'Jun 2025 – Nov 2025',
    tag: 'Academic',
    tagType: 'academic',
    bullets: [
      'Developed and deployed a complete software solution for an external client as part of an agile project team.',
      'Built front-end components using HTML, CSS, and JavaScript.',
      'Developed back-end services using Python (FastAPI) and PostgreSQL.',
      'Used Git for version control and collaborative development.',
      'Deployed and maintained the application on AWS EC2.'
    ]
  },
  {
    id: '3',
    company: 'Australian Department of Health',
    role: 'Data Scientist Intern',
    period: 'Jun 2025 – Nov 2025',
    tag: 'Government',
    tagType: 'public',
    bullets: [
      'Contributed to data-driven projects, including the development of synthetic datasets for public use.',
      'Applied machine learning techniques to analyse and model hospital wait times.',
      'Conducted data analysis using Python and R.',
      'Heavy use of data science libraries including Pandas, Numpy, Scikit-learn, Matplotlib, Seaborn and Plotly.',
      'Used Microsoft DevOps and Git to support version control and project workflows.'
    ]
  },
  {
    id: '4',
    company: 'Banksia Grove Newsagency',
    role: 'Manager',
    period: 'May 2023 – Jan 2026',
    tag: 'Retail',
    tagType: 'retail',
    bullets: [
      'Managed daily store operations, including staff rostering and shift coordination.',
      'Responsible for cash handling, daily and weekly till balancing, and end-of-day reporting.',
      'Monitored stock levels and placed orders to maintain appropriate inventory.',
      'Delivered consistent, high-quality customer service in a front-facing role.'
    ]
  },
  {
    id: '5',
    company: 'Hungry Jack’s Glengarry',
    role: 'Closing Crew',
    period: 'Jan 2025 – Sep 2025',
    tag: 'Service',
    tagType: 'service',
    bullets: [
      'Completed end-of-day closing procedures in accordance with operational standards.',
      'Maintained cleanliness of kitchen and front-of-house areas, including equipment and workspaces.',
      'Supported food preparation and order fulfilment during service periods.',
      'Ensured all closing tasks were completed after operating hours.'
    ]
  },
  {
    id: '6',
    company: 'Campion Education Malaga',
    role: 'Packing Team Leader',
    period: 'Nov 2022 – Feb 2023',
    tag: 'Logistics',
    tagType: 'logistics',
    bullets: [
      'Supervised a small team responsible for packing and dispatching stationery orders.',
      'Ensured accuracy and quality control of items and quantities prior to dispatch.',
      'Completed associated administrative tasks, including documentation and picking records.'
    ]
  }
];

export const EDUCATION: EducationData = {
  university: 'University of Western Australia',
  degree: 'Bachelor of Advanced Computer Science (Honours)',
  gradDate: 'Expected Nov 2026',
  gpa: 'GPA: 6.5 / WAM: 81',
  atar: '98.7 (ATAR)',
  thesis: 'Major in Artificial Intelligence; Minor in Data Science',
  coursework: ['Advanced Machine Learning', 'Software Engineering', 'Neural Networks', 'Distributed Systems', 'Algorithms & Data Structures']
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Media Tracking Application',
    description: 'Developed a high-performance web application using FastAPI and React to track and manage personal media consumption. Features real-time state management and advanced filtering capabilities.',
    icon: 'visibility'
  },
  {
    id: 'p2',
    title: 'OS Emulation Architecture',
    description: 'Designed a sophisticated low-level system emulator in C, simulating process priority scheduling, virtual memory paging, and interrupt handling with detailed performance metrics.',
    icon: 'memory'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming & Core Tech',
    skills: ['Python', 'R', 'TypeScript', 'C', 'Java', 'PostgreSQL', 'SQLAlchemy']
  },
  {
    category: 'Full Stack Frameworks',
    skills: ['React.js', 'FastAPI', 'Next.js', 'Tailwind CSS', 'GraphQL', 'RESTful APIs']
  },
  {
    category: 'Data Science & AI',
    skills: ['TensorFlow', 'Pandas', 'Scikit-learn', 'Stat Analysis', 'Data Visualization', 'Synthetic Data']
  },
  {
    category: 'Deployment & Systems',
    skills: ['Docker', 'AWS (EC2/S3)', 'Redis', 'CI/CD (DevOps)', 'Git', 'Linux Administration']
  }
];

export const LANGUAGES: LanguageSkill[] = [
  { name: 'English', level: 'Fluent, first language', percentage: 100 },
  { name: 'Mandarin', level: 'Fluent', percentage: 90 },
  { name: 'Japanese', level: 'Basic, JLPT N5', percentage: 25 }
];
