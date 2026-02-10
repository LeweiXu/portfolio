
import React from 'react';

const Activities: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-xl">volunteer_activism</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight">Activities</h3>
      </div>
      
      <div className="space-y-10">
        {/* Activity 1 */}
        <div className="flex flex-col md:flex-row gap-6 items-start group">
          <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-2xl text-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5 shrink-0">
            <span className="material-symbols-outlined text-2xl">groups</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h4 className="text-xl font-black tracking-tight">UWA UniMentor Program</h4>
              <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                Feb 2026 – Jun 2026
              </span>
            </div>
            <p className="text-sm font-bold text-primary/80 mb-3 uppercase tracking-wider">UniMentor</p>
            <ul className="text-base text-slate-600 dark:text-slate-400 leading-relaxed list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">check_circle</span>
                <span>Selected to mentor first-year students, providing guidance on study planning and university systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">check_circle</span>
                <span>Acting as a point of contact for academic and general support.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Activity 2 */}
        <div className="flex flex-col md:flex-row gap-6 items-start group">
          <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-2xl text-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5 shrink-0">
            <span className="material-symbols-outlined text-2xl">emoji_events</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h4 className="text-xl font-black tracking-tight">Competitive Programming Society</h4>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                2023 – 2025
              </span>
            </div>
            <p className="text-sm font-bold text-primary/80 mb-3 uppercase tracking-wider">Committee Member</p>
            <ul className="text-base text-slate-600 dark:text-slate-400 leading-relaxed list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">check_circle</span>
                <span>Participated in coding competitions, solving algorithmic and logic-based problems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">check_circle</span>
                <span>Developed strong problem-solving and coding skills in Python, C, and Java.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
