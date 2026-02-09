
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">school</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight">Education</h3>
      </div>
      
      <div className="space-y-6">
        {/* University Section */}
        <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-border bg-white dark:bg-slate-card/30 backdrop-blur-sm shadow-xl overflow-hidden relative group">
          <div className="absolute -right-20 -top-20 size-60 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h4 className="text-2xl font-bold tracking-tight">{EDUCATION.university}</h4>
                <p className="text-primary font-bold text-lg">{EDUCATION.degree}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-black bg-primary/10 text-primary px-4 py-2 rounded-full uppercase tracking-tighter">
                  {EDUCATION.gradDate}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Academic Status</span>
                  <span className="text-sm font-black text-primary">{EDUCATION.gpa}</span>
                </div>
              </div>
              
              <div className="p-5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/5">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Specialization</h5>
                <p className="text-sm font-semibold leading-relaxed">{EDUCATION.thesis}</p>
              </div>
            </div>
            
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Relevant Coursework</h5>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.coursework.map((course, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* High School Section */}
        <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-border bg-white dark:bg-slate-card/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold">Duncraig Senior High School</h4>
              <p className="text-slate-500 font-medium">Western Australia Certificate of Education</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400">Jan 2017 – Nov 2022</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">ATAR</span>
              <span className="text-xl font-black text-primary">98.7</span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-border"></div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Subjects: Mathematics Methods & Specialist, Physics, Chemistry, Computer Science, English
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
