
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-2xl">school</span>
        </div>
        <h3 className="text-4xl font-black tracking-tight">Education</h3>
      </div>
      
      <div className="space-y-8">
        {/* University Section */}
        <div className="p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-border bg-white dark:bg-slate-card/30 backdrop-blur-sm shadow-2xl overflow-hidden relative group">
          <div className="absolute -right-20 -top-20 size-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
              <div className="flex-1">
                <h4 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">{EDUCATION.university}</h4>
                <p className="text-primary font-bold text-xl mt-2">{EDUCATION.degree}</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block text-[11px] font-black bg-primary text-white px-5 py-2.5 rounded-full uppercase tracking-[0.15em] shadow-xl shadow-primary/25">
                  {EDUCATION.gradDate}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Metric Card 1: Academic Status */}
              <div className="flex flex-col p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 transition-all hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/80 shadow-sm hover:shadow-md h-full">
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">analytics</span>
                  Academic Status
                </h5>
                <div className="flex flex-col mt-auto">
                  <span className="text-3xl font-black text-slate-900 dark:text-white leading-tight">{EDUCATION.gpa}</span>
                  <span className="text-[10px] font-bold text-primary uppercase mt-2 tracking-wider">Weighted Average Mark</span>
                </div>
              </div>
              
              {/* Metric Card 2: Specialization */}
              <div className="flex flex-col p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 transition-all hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/80 shadow-sm hover:shadow-md h-full">
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">psychology</span>
                  Specialization
                </h5>
                <div className="flex flex-col mt-auto">
                  <p className="text-lg font-extrabold text-slate-800 dark:text-slate-200 leading-tight">
                    {EDUCATION.thesis}
                  </p>
                  <span className="text-[10px] font-bold text-primary uppercase mt-2 tracking-wider">Primary Research Areas</span>
                </div>
              </div>
            </div>
            
            <div className="pt-10 border-t border-slate-100 dark:border-slate-800">
              <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">checklist</span>
                Core Coursework & Proficiencies
              </h5>
              <div className="flex flex-wrap gap-3">
                {EDUCATION.coursework.map((course, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-800/50 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default shadow-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* High School Section */}
        <div className="p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-border bg-white dark:bg-slate-card/10 backdrop-blur-sm transition-all hover:bg-white/50 dark:hover:bg-slate-card/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="size-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-3xl">history_edu</span>
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">Duncraig Senior High School</h4>
                <p className="text-slate-500 font-bold text-base mt-1">Western Australia Certificate of Education (WACE)</p>
              </div>
            </div>
            <div className="md:text-right">
              <span className="text-[11px] font-black text-slate-500 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-full uppercase tracking-widest">
                2017 – 2022
              </span>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-10 p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100/50 dark:border-slate-700/30">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">ATAR Rank</span>
              <span className="text-4xl font-black text-primary leading-none">98.7</span>
            </div>
            <div className="hidden sm:block h-12 w-px bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Key Academic Subjects</span>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-bold leading-relaxed">
                Mathematics Methods & Specialist, Physics, Chemistry, Computer Science
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
