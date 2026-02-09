
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
}

const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Microservices',
    category: 'Fullstack',
    tags: ['Next.js', 'Redis'],
    description: 'A distributed retail platform featuring event-driven architecture, real-time inventory management, and a high-conversion checkout flow.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjiSIANBuJFrx6bOCrH-_VYxMd1y8pNkaPXoZ9kNUtlfBgkYStHebd1wzctKZZG16n8o4WIiOdXIs15EU27kU1zKIVF17l9uRXUuSMRKNE7ojYoWAj1-4OnhBsKsvA3VisFrBXnEptgLU_nUu5edn0FW56NxsQaOpdhjI6vq1q6KDpygLt5z4PyF3mmPHcFKXXn2KKjo5H9UsZsssLREqLHnrCwiwVZ8ULGWvmI2ckoSJ8veDo_b6Ojk1BT5Zs6HaIYXSfCraz2bs',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '2',
    title: 'Cloud Analytics Dashboard',
    category: 'Frontend',
    tags: ['React', 'D3.js'],
    description: 'High-performance data visualization interface processing millions of data points with interactive SVG charts and real-time AWS metrics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxHGsagTEq8fJDEvZIO8pyuttok5E-DbmIKIOWEB02cc52y2Jd9mTiYZrhGrv4VcCWmUlHr-pvMw0Xdv0FvgoLh8CvzS8HWFFIe-UM-G15VJePDP7x0cCOa5_98As6lUXsfJjpY3YIjWGd1Qgebq9ItLbp4rOE1enAjR-3EUwNGDDn4vM07RiJWPn6-b59ARGquElNLExel1EYENAbwcg8rmxcGrpxiUDvmnf7wvDu56vgCEbfpbv_ZAaFmHKern_dTO5uIAW0Ku0',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '3',
    title: 'Real-time Chat Engine',
    category: 'Backend',
    tags: ['Go', 'WebSockets'],
    description: 'A low-latency messaging infrastructure capable of handling thousands of concurrent connections with persistence layers in PostgreSQL.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVWDUHloG-y9igiZ6aelrQ8cZND1apYRdaZZJpeX_qP2_bTP9RTvCqVW7IywHAo3fmQRB2A0xvk_8qvK1EFK5u0pKD3cUh5Oc5n9HnIiGC5ZYYFBIAKOrXK7P7mFlxbYIc-N_fV8ks_MCipkkrwnhdA-oNRo_eiDYgw6j1JAhbGUsUCVEHqTips95C2Wy2hLbhB4U5s8OMK0b2V34mjkNuVTmVuX098qNc_PDuVHj0cdunUgThnB6qeoMc64vUdDgXdSosn7KQj1I',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '4',
    title: 'Portfolio Tracker API',
    category: 'Fullstack', // Mapped from FinTech in source HTML
    tags: ['PostgreSQL', 'Auth0'],
    description: 'Secure financial tracking application with complex aggregation queries, bank-level security, and comprehensive RESTful API documentation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVDgwv7zENPztI-Wu-Q_1UFNTUGFROY2ycaTGg_0FmAt29kzsdjoPtf_HwASqTkbBaifr0gIY-FghR64vpiLmnexUdg-0-ME1KSLdtUranAOF6yJVFBvK2pSuMVn1xeGtOGLKn48SuIflBcp3GMCjwV1eggVw07P8aNmLuK5gMtoaxcuF001-uqynVVUoQYvLTXTKfSCYqaBcEzoiM_Erpi-8tYx7ZpNCYZXnRhoNxMBFeTZ_neMxVoCkE7bXmrsb8IiA-nz1AbtE',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '5',
    title: 'Automation CLI Tool',
    category: 'System Design', // Mapped from DevOps in source HTML
    tags: ['Docker', 'Kubernetes'],
    description: 'Custom CI/CD orchestration tool built to automate containerization and deployment pipelines for multi-cloud environments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1CFY7FEqiYl7OCLLRMU9NHJWA1Sbl36oyepJOvDHSunIeByBm7yxgBGl8-v_v_4-I0I55h3cXw6N44GIKVAGpG6KoGdrEzdITOuqG6bvCXPtbPuRbQvqyWVwu7KjCoYCE0fYg6dpwCRZT0djfHy1OXWEiEnHpNrX4FghTemxc54YsoDhEoYir0a7v_7Ebsi8P3P2Y_IO8Pzn3WMAQWNxvgIQhuLGMlE60zNSu3rLFq5gN-Vrvs9p50nyAr_jWk_8lLi_qoFPFnlQ',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '6',
    title: 'Social Platform API',
    category: 'Backend', // Mapped from API Design in source HTML
    tags: ['GraphQL', 'Apollo'],
    description: 'A robust GraphQL API supporting nested relations, optimized caching, and complex authorization layers for a content-driven platform.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE3ycRBreJ5U85foXSmCMRuQ24ePL4tyE31HT4nBqcEuj6Z1z0aEW1qLB16hF-GPNGDXLqajneRtmgV6jl0z3TVA5hSI16JM7_a6EH8yzPXi5dVkCPafRSyazegO0aO4qhxnxocCRU7sTG7QfJ0UZgVzV1X2tx_fqsKhrVEgw-bhQ6UQ0YlhDs8K8AnI-N506nkU_6hbMZHx3doIZEl4IQkF1UqgKfrmKFdEkkVc1U7TCO2svy2tEmlVyuQLfqtslRZwllrSpZnNc',
    demoUrl: '#',
    codeUrl: '#'
  }
];

const CATEGORIES = ['All', 'Fullstack', 'Backend', 'System Design'];

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
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">Featured Engineering Projects</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              A showcase of high-performance web applications, scalable backend architectures, and polished user interfaces. Built with a focus on code quality and performance.
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url("${project.image}")` }}
              ></div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex items-center gap-3">
                <button className="flex-1 bg-primary text-white py-2 rounded-lg text-xs font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">visibility</span> Live Demo
                </button>
                <button className="flex-1 border border-slate-300 dark:border-slate-700 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">code</span> View Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination / Load More */}
      <div className="mt-16 flex flex-col items-center">
        <button className="group flex items-center gap-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 px-8 py-3 rounded-xl font-bold transition-all text-slate-700 dark:text-slate-300">
          Load More Projects
          <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">keyboard_arrow_down</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsView;
