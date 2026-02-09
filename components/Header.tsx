
import React from 'react';

interface HeaderProps {
  currentView: 'landing' | 'resume' | 'projects';
  setView: (view: 'landing' | 'resume' | 'projects') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-border bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => setView('landing')}
        >
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-2xl font-bold">terminal</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white leading-none">Lewei Xu</h2>
            <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500 font-extrabold mt-1.5">Digital Portfolio</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setView('landing')}
            className={`text-sm font-semibold transition-colors hover:text-primary ${currentView === 'landing' ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setView('projects')}
            className={`text-sm font-semibold transition-colors hover:text-primary ${currentView === 'projects' ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setView('resume')}
            className={`text-sm font-semibold transition-colors hover:text-primary ${currentView === 'resume' ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
          >
            CV & Contact
          </button>
        </nav>
        
        <button className="md:hidden text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
