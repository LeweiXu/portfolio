
import React from 'react';

const Activities: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">volunteer_activism</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight">Activities</h3>
      </div>
      
      <div className="space-y-8">
        <div className="flex gap-6 items-start group">
          <div className="bg-primary/10 group-hover:bg-primary/20 p-3.5 rounded-xl text-primary transition-colors">
            <span className="material-symbols-outlined">groups</span>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">UWA UniMentor Program</h4>
            <p className="text-sm font-semibold text-primary mb-1">UniMentor | Feb 2026 – Jun 2026</p>
            <ul className="text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-outside ml-4 space-y-1">
              <li>Selected to mentor first-year students, providing guidance on study planning, university systems, and transitioning into university life.</li>
              <li>Will act as a point of contact for academic and general support, helping students navigate challenges and access resources.</li>
            </ul>
          </div>
        </div>
        
        <div className="flex gap-6 items-start group">
          <div className="bg-primary/10 group-hover:bg-primary/20 p-3.5 rounded-xl text-primary transition-colors">
            <span className="material-symbols-outlined">emoji_events</span>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">Competitive Programming Society</h4>
            <p className="text-sm font-semibold text-primary mb-1">Committee Member | Jan 2023 – Jan 2025</p>
            <ul className="text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-outside ml-4 space-y-1">
              <li>Participated in coding competitions, solving algorithmic and logic-based problems under time constraints.</li>
              <li>Developed strong problem-solving, analytical thinking, and coding skills in Python, C, and Java.</li>
              <li>Collaborated and discussed solutions with peers to improve efficiency and coding techniques.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
