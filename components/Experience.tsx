
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="flex items-center gap-4 mb-10">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center no-print">
          <span className="material-symbols-outlined text-primary">work</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight">Work Experience</h3>
      </div>
      
      <div className="space-y-12">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-10 timeline-line">
            <div className={`absolute -left-[5px] top-1.5 size-3 rounded-full ring-4 ring-white dark:ring-background-dark no-print ${
              exp.tagType === 'current' ? 'bg-primary' : 'bg-slate-400 dark:bg-slate-600'
            }`}></div>
            
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h4 className="text-xl font-bold">{exp.company}</h4>
              <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest no-print ${
                exp.tagType === 'current' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}>
                {exp.tag}
              </span>
            </div>
            
            <div className="flex flex-wrap justify-between items-baseline mb-4">
              <p className="text-primary font-bold">
                {exp.role}
              </p>
              <span className="text-slate-500 font-medium text-sm">{exp.period}</span>
            </div>
            
            {exp.bullets ? (
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 list-disc list-outside ml-4">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">{bullet}</li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-600 dark:text-slate-400 italic">{exp.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
