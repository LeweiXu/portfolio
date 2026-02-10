
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="flex items-center gap-4 mb-8">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-xl">code_blocks</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight">University Projects</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group p-8 rounded-[2rem] bg-white dark:bg-slate-card/40 border border-slate-200 dark:border-slate-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full">
            <div className="size-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-xl">{project.icon}</span>
            </div>
            
            <h4 className="text-xl font-black mb-3 group-hover:text-primary transition-colors tracking-tight">
              {project.title}
            </h4>
            
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {project.description}
            </p>
            
            <div className="mt-auto pt-6 flex items-center gap-2 text-primary font-bold text-[11px] uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">info</span>
              Academic Project
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
