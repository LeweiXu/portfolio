
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="flex items-center gap-4 mb-10">
        <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-2xl">code_blocks</span>
        </div>
        <h3 className="text-4xl font-black tracking-tight">University Projects</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-card/40 border border-slate-200 dark:border-slate-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full">
            <div className="size-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-2xl">{project.icon}</span>
            </div>
            
            <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight">
              {project.title}
            </h4>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {project.description}
            </p>
            
            <div className="mt-auto pt-8 flex items-center gap-2 text-primary font-bold text-sm">
              <span className="material-symbols-outlined text-base">info</span>
              Academic Coursework Project
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
