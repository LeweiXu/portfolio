
import React from 'react';

const Activities: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-2xl">volunteer_activism</span>
        </div>
        <h3 className="text-4xl font-black tracking-tight">Activities</h3>
      </div>
      
      <div className="space-y-12">
        {/* Activity 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-start group p-2 rounded-3xl hover:bg-white dark:hover:bg-white/5 transition-colors duration-500">
          <div className="bg-primary/10 group-hover:bg-primary p-5 rounded-[2rem] text-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5 group-hover:shadow-primary/20 shrink-0">
            <span className="material-symbols-outlined text-3xl">groups</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h4 className="text-2xl font-black tracking-tight">UWA UniMentor Program</h4>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                Feb 2026 – Jun 2026
              </span>
            </div>
            <p className="text-lg font-bold text-primary/80 mb-4">UniMentor</p>
            <ul className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed list-none space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-1 shrink-0">check_circle</span>
                <span>Selected to mentor first-year students, providing guidance on study planning, university systems, and transitioning into university life.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-1 shrink-0">check_circle</span>
                <span>Acting as a point of contact for academic and general support, helping students navigate challenges and access resources.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Activity 2 */}
        <div className="flex flex-col md:flex-row gap-8 items-start group p-2 rounded-3xl hover:bg-white dark:hover:bg-white/5 transition-colors duration-500">
          <div className="bg-primary/10 group-hover:bg-primary p-5 rounded-[2rem] text-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5 group-hover:shadow-primary/20 shrink-0">
            <span className="material-symbols-outlined text-3xl">emoji_events</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h4 className="text-2xl font-black tracking-tight">Competitive Programming Society</h4>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                2023 – 2025
              </span>
            </div>
            <p className="text-lg font-bold text-primary/80 mb-4">Committee Member</p>
            <ul className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed list-none space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-1 shrink-0">check_circle</span>
                <span>Participated in coding competitions, solving algorithmic and logic-based problems under time constraints.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-1 shrink-0">check_circle</span>
                <span>Developed strong problem-solving, analytical thinking, and coding skills in Python, C, and Java.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-1 shrink-0">check_circle</span>
                <span>Collaborated and discussed solutions with peers to improve efficiency and coding techniques.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
