
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-border mb-16">
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">Lewei Xu</h1>
        <p className="text-2xl text-primary font-bold mb-4">Software Engineer & Data Scientist</p>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed italic text-lg">
          "Transforming complex data challenges into elegant software solutions."
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 bg-white dark:bg-slate-card p-6 rounded-2xl border border-slate-200 dark:border-slate-border shadow-sm w-full md:w-auto shrink-0 transition-transform hover:shadow-lg">
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary size-5 flex items-center justify-center">location_on</span>
          <span className="font-medium">Hamersley, WA</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary size-5 flex items-center justify-center">mail</span>
          <a href="mailto:leweixu@gmail.com" className="font-medium hover:text-primary transition-colors">leweixu@gmail.com</a>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary size-5 flex items-center justify-center">phone_iphone</span>
          <span className="font-medium">0406 959 116</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary size-5 flex items-center justify-center">link</span>
          <a href="https://linkedin.com/in/leweixu" target="_blank" rel="noopener" className="font-medium hover:text-primary transition-colors">linkedin.com/in/leweixu</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
