
import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  demoUrl: string;
  codeUrl: string;
  isInProgress?: boolean;
}

const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'SaaS Analytics Dashboard',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    description:
      'A responsive analytics dashboard built with React and TypeScript. Features reusable UI components, interactive charts, dark mode, and clean state management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    isInProgress: false
  },
  {
    id: '2',
    title: 'Project Management App',
    category: 'Fullstack',
    tags: ['React', 'TypeScript', 'FastAPI', 'JWT Auth'],
    description:
      'A full-stack task management application with user authentication, protected routes, project boards, and RESTful API integration.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    isInProgress: true
  },
  {
    id: '3',
    title: 'Subscription Billing API',
    category: 'Backend',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic'],
    description:
      'A backend service that models users, subscription plans, invoices, and payments. Demonstrates relational database design, migrations, and transaction handling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVDgwv7zENPztI-Wu-Q_1UFNTUGFROY2ycaTGg_0FmAt29kzsdjoPtf_HwASqTkbBaifr0gIY-FghR64vpiLmnexUdg-0-ME1KSLdtUranAOF6yJVFBvK2pSuMVn1xeGtOGLKn48SuIflBcp3GMCjwV1eggVw07P8aNmLuK5gMtoaxcuF001-uqynVVUoQYvLTXTKfSCYqaBcEzoiM_Erpi-8tYx7ZpNCYZXnRhoNxMBFeTZ_neMxVoCkE7bXmrsb8IiA-nz1AbtE',
    demoUrl: '#',
    codeUrl: '#',
    isInProgress: true
  },
  {
    id: '4',
    title: 'Resume Screening AI',
    category: 'Machine Learning',
    tags: ['Python', 'scikit-learn', 'FastAPI', 'NLP'],
    description:
      'An applied machine learning project that analyzes resumes against job descriptions and returns similarity scores with keyword insights via a deployed API.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    isInProgress: true
  },
  {
    id: '5',
    title: 'Public Data Insights Dashboard',
    category: 'Data Science',
    tags: ['Python', 'pandas', 'matplotlib', 'scikit-learn'],
    description:
      'Exploratory data analysis and predictive modeling using real-world datasets. Includes data cleaning, visualization, feature engineering, and performance evaluation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1CFY7FEqiYl7OCLLRMU9NHJWA1Sbl36oyepJOvDHSunIeByBm7yxgBGl8-v_v_4-I0I55h3cXw6N44GIKVAGpG6KoGdrEzdITOuqG6bvCXPtbPuRbQvqyWVwu7KjCoYCE0fYg6dpwCRZT0djfHy1OXWEiEnHpNrX4FghTemxc54YsoDhEoYir0a7v_7Ebsi8P3P2Y_IO8Pzn3WMAQWNxvgIQhuLGMlE60zNSu3rLFq5gN-Vrvs9p50nyAr_jWk_8lLi_qoFPFnlQ',
    demoUrl: '#',
    codeUrl: '#',
    isInProgress: true
  },
  {
    id: '6',
    title: 'Dockerized Full-Stack Deployment',
    category: 'DevOps',
    tags: ['Docker', 'Docker Compose', 'Nginx', 'CI/CD'],
    description:
      'A production-style containerized setup for a React + FastAPI application. Includes multi-service orchestration, environment configuration, and reverse proxy setup.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE3ycRBreJ5U85foXSmCMRuQ24ePL4tyE31HT4nBqcEuj6Z1z0aEW1qLB16hF-GPNGDXLqajneRtmgV6jl0z3TVA5hSI16JM7_a6EH8yzPXi5dVkCPafRSyazegO0aO4qhxnxocCRU7sTG7QfJ0UZgVzV1X2tx_fqsKhrVEgw-bhQ6UQ0YlhDs8K8AnI-N506nkU_6hbMZHx3doIZEl4IQkF1UqgKfrmKFdEkkVc1U7TCO2svy2tEmlVyuQLfqtslRZwllrSpZnNc',
    demoUrl: '#',
    codeUrl: '#',
    isInProgress: true
  }
];

const ProjectsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">Featured Projects</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              A selection of projects built using modern web technologies. Each one focuses on clean architecture, performance, and real-world problem solving.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative"
          >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url("${project.image}")` }}
              ></div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* "In Progress" Badge Overlay */}
              {project.isInProgress && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs animate-spin">progress_activity</span>
                    In Progress
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex items-center gap-3">
                <button 
                  disabled={project.isInProgress}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    project.isInProgress 
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed opacity-50' 
                      : 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/10'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">{project.isInProgress ? 'lock' : 'visibility'}</span>
                  {project.isInProgress ? 'Pending' : 'View Project'}
                </button>
                <button 
                  disabled={project.isInProgress}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                    project.isInProgress
                      ? 'border-slate-200 dark:border-slate-800 text-slate-400 cursor-not-allowed opacity-50'
                      : 'border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">code</span>
                  View Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
