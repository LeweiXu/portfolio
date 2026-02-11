
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-border py-16 bg-white dark:bg-background-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-3">
          <div className="size-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-md shadow-primary/10">
            <span className="material-symbols-outlined text-xl font-bold">terminal</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none">Lewei Xu</h2>
            <span className="text-[8px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">Digital Portfolio</span>
          </div>
        </div>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          © 2024 Lewei Xu. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="mailto:leweixu@gmail.com" className="text-slate-400 hover:text-primary transition-all hover:scale-110">
            <span className="material-symbols-outlined text-2xl">alternate_email</span>
          </a>
          <a href="https://linkedin.com/in/leweixu" target="_blank" rel="noopener" className="text-slate-400 hover:text-primary transition-all hover:scale-110">
            <span className="material-symbols-outlined text-2xl">link</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
