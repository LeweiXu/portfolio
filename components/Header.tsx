
import React from 'react';

interface HeaderProps {
  currentView: 'landing' | 'resume' | 'projects';
  setView: (view: 'landing' | 'resume' | 'projects') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-border bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setView('landing')}
        >
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Lewei Xu</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setView('landing')}
            className={`text-sm font-medium transition-colors hover:text-primary ${currentView === 'landing' ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setView('projects')}
            className={`text-sm font-medium transition-colors hover:text-primary ${currentView === 'projects' ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setView('resume')}
            className={`text-sm font-medium transition-colors hover:text-primary ${currentView === 'resume' ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
          >
            Resume
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
            Hire me
          </button>
        </nav>
        
        <button className="md:hidden text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
