
import React from 'react';
import { SKILL_GROUPS, LANGUAGES } from '../constants';

const Sidebar: React.FC = () => {
  const handleDownload = () => {
    // Standard approach for professional web resumes: 
    // Trigger print dialog where the user can "Save as PDF"
    window.print();
  };

  return (
    <section className="p-8 rounded-3xl bg-white dark:bg-slate-card border border-slate-200 dark:border-slate-border shadow-xl">
      <h4 className="text-xl font-black mb-10 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">terminal</span>
        Technical Skills
      </h4>
      
      <div className="space-y-10">
        {SKILL_GROUPS.map((group, gIdx) => (
          <div key={gIdx}>
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{group.category}</h5>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 text-xs font-bold border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        <div>
          <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Languages</h5>
          <div className="space-y-6">
            {LANGUAGES.map((lang, lIdx) => (
              <div key={lIdx} className="group">
                <div className="flex justify-between text-sm mb-2.5 font-bold">
                  <span>{lang.name}</span>
                  <span className="text-primary text-[9px] uppercase tracking-tighter bg-primary/5 px-2 py-0.5 rounded">{lang.level}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all duration-1000 ease-out rounded-full" 
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-10 border-t border-slate-100 dark:border-slate-800 text-center no-print">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Interested in collaboration?</p>
        <button 
          onClick={handleDownload}
          className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3.5 rounded-xl font-black text-sm shadow-xl shadow-black/10 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group"
        >
          <span className="material-symbols-outlined text-sm group-hover:animate-bounce">download</span>
          Download Resume PDF
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
