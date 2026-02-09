
import React from 'react';

interface LandingViewProps {
  setView: (view: 'landing' | 'resume' | 'projects') => void;
}

const LandingView: React.FC<LandingViewProps> = ({ setView }) => {
  const techStack = [
    { name: 'Python', icon: 'code_blocks' },
    { name: 'R', icon: 'analytics' },
    { name: 'FastAPI', icon: 'bolt' },
    { name: 'SQL', icon: 'storage' },
    { name: 'AWS', icon: 'cloud' },
    { name: 'React.js', icon: 'layers' },
    { name: 'Typescript', icon: 'web' },
    { name: 'Docker', icon: 'coffee' },
    { name: 'Git', icon: 'hub' }
  ];

  const features = [
    {
      icon: 'school',
      title: 'Academic Excellence',
      description: 'High-achieving Honours student with a track record of technical rigor and dedication.'
    },
    {
      icon: 'monitoring',
      title: 'Data-Driven Insights',
      description: 'Expertise in turning raw data into actionable intelligence using R and Python.'
    },
    {
      icon: 'api',
      title: 'Backend Engineering',
      description: 'Building robust, high-performance APIs and microservices with FastAPI.'
    }
  ];

  return (
    <div className="mesh-gradient">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Ready for Data & Web Projects
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Web Developer & <br/>
              <span className="text-primary">Data Scientist</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Specialized experience in Python (FastAPI), JavaScript, and Data Science. Leveraging advanced analytics and modern web frameworks to build data-driven applications.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setView('projects')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group"
            >
              View Projects <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button 
              onClick={() => setView('resume')}
              className="bg-slate-200 dark:bg-slate-card hover:bg-slate-300 dark:hover:bg-slate-border text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2"
            >
              View CV <span className="material-symbols-outlined text-lg">description</span>
            </button>
          </div>
          <div className="flex items-center gap-8 mt-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold">Full Stack</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Development</span>
            </div>
            <div className="h-10 w-px bg-slate-200 dark:bg-slate-border"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">Data Science</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">& Artificial Intelligence</span>
            </div>
            <div className="h-10 w-px bg-slate-200 dark:bg-slate-border"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">Research</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">& Analysis</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative aspect-square lg:aspect-video rounded-2xl bg-slate-200 dark:bg-slate-card border border-slate-300 dark:border-slate-border overflow-hidden shadow-2xl">
            <img 
              alt="Developer Workspace" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt3YwJUtZaJvryCdp-1nMks5uYPTUCp8GcSX9ch9Kz70H6qztM5A6SGq2fYTIzpKhUignrzJ08JS8PLiYo_0-aM5PeQysUPfUMdwHrUM5pD02z_DBfkKi-JqTPvUfeVeDlWvaa0PiEFaOZ-oITScenyczRdi8-6kl8O9hwUfQIi3jRFdhi524DZ5F6npSZyxQyKY0EH0daZcreIPF4xVgJoLVlaNpjZKKGPVCFOJ-LZn_KtTt06UNz-vNFnXshFueY-hobQcLKue0"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-background-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 hidden md:flex items-center justify-between">
              <div className="flex gap-2">
                <div className="size-3 rounded-full bg-red-500/50"></div>
                <div className="size-3 rounded-full bg-amber-500/50"></div>
                <div className="size-3 rounded-full bg-emerald-500/50"></div>
              </div>
              <div className="text-[10px] font-mono text-slate-500">main.py — Neural Network Architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h4 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">Technology Stack</h4>
          <h3 className="text-3xl font-bold">Comprehensive toolkit for development & analytics</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {techStack.map((tech, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center gap-4 p-8 rounded-2xl border border-slate-200 dark:border-slate-border bg-white/50 dark:bg-slate-card/50 hover:border-primary transition-all group cursor-default`}
            >
              <div className="text-slate-400 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-4xl">{tech.icon}</span>
              </div>
              <span className="font-bold text-sm tracking-wide">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-border bg-white dark:bg-slate-card flex flex-col gap-2 hover:shadow-xl transition-all">
              <span className="material-symbols-outlined text-primary mb-2 text-3xl">{feature.icon}</span>
              <h5 className="text-lg font-bold">{feature.title}</h5>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingView;
