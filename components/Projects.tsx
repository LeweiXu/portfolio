
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="flex items-center gap-4 mb-8">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">code_blocks</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight">University Projects</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group p-6 rounded-2xl bg-white dark:bg-slate-card border border-slate-200 dark:border-slate-border hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">{project.icon}</span>
              {project.title}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
