
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-xl">school</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight">Education</h3>
      </div>
      
      <div className="space-y-6">
        {/* University Section */}
        <div className="p-8 rounded-[2rem] border border-slate-200 dark:border-slate-border bg-white dark:bg-slate-card/30 backdrop-blur-sm shadow-xl overflow-hidden relative group">
          <div className="absolute -right-20 -top-20 size-60 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <h4 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  {EDUCATION.university}
                </h4>
                <p className="text-primary font-bold text-base mt-1">{EDUCATION.degree}</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block text-[10px] font-black bg-primary text-white px-4 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
                  {EDUCATION.gradDate}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Metric Card 1: Academic Status */}
              <div className="flex flex-col p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 transition-all hover:bg-white dark:hover:bg-slate-800/80 shadow-sm">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">analytics</span>
                  Academic Status
                </h5>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">{EDUCATION.gpa}</span>
                  <span className="text-[9px] font-bold text-primary uppercase mt-1 tracking-wider">Weighted Average Mark</span>
                </div>
              </div>
              
              {/* Metric Card 2: Specialization */}
              <div className="flex flex-col p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 transition-all hover:bg-white dark:hover:bg-slate-800/80 shadow-sm">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">psychology</span>
                  Specialization
                </h5>
                <div className="flex flex-col">
                  <p className="text-base font-extrabold text-slate-800 dark:text-slate-200 leading-tight">
                    {EDUCATION.thesis}
                  </p>
                  <span className="text-[9px] font-bold text-primary uppercase mt-1 tracking-wider">Primary Focus</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">checklist</span>
                Core Coursework
              </h5>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.coursework.map((course, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white dark:bg-slate-800/50 rounded-lg text-[11px] font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all cursor-default shadow-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* High School Section */}
        <div className="p-6 rounded-[2rem] border border-slate-200 dark:border-slate-border bg-white dark:bg-slate-card/10 backdrop-blur-sm transition-all hover:bg-white/50 dark:hover:bg-slate-card/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-xl">history_edu</span>
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white leading-tight">Duncraig Senior High School</h4>
                <p className="text-slate-500 font-bold text-sm mt-0.5">WACE | 98.7 ATAR Rank</p>
              </div>
            </div>
            <div className="md:text-right">
              <span className="text-[9px] font-black text-slate-500 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full uppercase tracking-widest">
                2017 – 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
