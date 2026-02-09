
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-border py-12 bg-white dark:bg-background-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-sm">terminal</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight">Lewei Xu</h2>
        </div>
        
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2024 Lewei Xu. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="mailto:lewei.xu@uwa.edu.au" className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
          <a href="https://linkedin.com/in/leweixu" target="_blank" rel="noopener" className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">link</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">hub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
