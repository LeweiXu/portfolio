
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
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          {/* Professional Tech Dashboard Visual */}
          <div className="relative aspect-square lg:aspect-video rounded-3xl bg-[#0f172a] border border-slate-700 overflow-hidden shadow-2xl flex flex-col font-mono text-[10px] sm:text-xs">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-700/50">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-red-500/50"></div>
                <div className="size-2.5 rounded-full bg-amber-500/50"></div>
                <div className="size-2.5 rounded-full bg-emerald-500/50"></div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-medium tracking-tight">
                <span className="material-symbols-outlined text-[14px]">terminal</span>
                main.py — Neural Network Architecture
              </div>
              <div className="w-10"></div> {/* Spacer for balance */}
            </div>

            {/* Window Content */}
            <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
              {/* Code Snippet */}
              <div className="space-y-1">
                <p className="text-blue-400">import <span className="text-white">tensorflow</span> as <span className="text-white">tf</span></p>
                <p className="text-blue-400">from <span className="text-white">fastapi</span> import <span className="text-white">FastAPI</span></p>
                <p>&nbsp;</p>
                <p className="text-slate-500"># Model Architecture</p>
                <p className="text-purple-400">class <span className="text-emerald-400">AnalysisEngine</span>:</p>
                <p className="pl-4 text-purple-400">def <span className="text-blue-400">__init__</span>(self):</p>
                <p className="pl-8 text-white">self.model = tf.keras.Sequential([</p>
                <p className="pl-12 text-white">tf.keras.layers.Dense(512, activation=<span className="text-amber-400">'relu'</span>),</p>
                <p className="pl-12 text-white">tf.keras.layers.Dropout(<span className="text-amber-400">0.2</span>),</p>
                <p className="pl-12 text-white">tf.keras.layers.Dense(<span className="text-amber-400">1</span>)</p>
                <p className="pl-8 text-white">])</p>
              </div>

              {/* Data Visual Overlays */}
              <div className="mt-auto grid grid-cols-2 gap-4 h-24">
                <div className="bg-slate-800/40 rounded-xl border border-slate-700/50 p-3 flex flex-col justify-between overflow-hidden">
                  <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Accuracy Metric</span>
                  <div className="flex items-end gap-1 h-8">
                    <div className="w-full bg-primary/40 rounded-t h-[60%] animate-pulse"></div>
                    <div className="w-full bg-primary/60 rounded-t h-[85%]"></div>
                    <div className="w-full bg-primary/40 rounded-t h-[70%] animate-pulse"></div>
                    <div className="w-full bg-primary/70 rounded-t h-[95%]"></div>
                    <div className="w-full bg-primary/50 rounded-t h-[80%]"></div>
                  </div>
                  <span className="text-emerald-400 font-bold">98.42%</span>
                </div>
                <div className="bg-slate-800/40 rounded-xl border border-slate-700/50 p-3 flex flex-col justify-between overflow-hidden">
                  <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">System Status</span>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-white font-bold">LIVE_DATA_FEED</span>
                  </div>
                  <div className="text-[9px] text-slate-500 leading-none">
                    Uptime: 142h 12m 04s<br/>
                    Latency: 12ms
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="px-4 py-1.5 bg-slate-900/50 border-t border-slate-800 text-[9px] text-slate-600 flex justify-between uppercase font-bold tracking-widest">
              <span>utf-8</span>
              <span>ln 14, col 32</span>
              <span className="text-primary">python 3.11</span>
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
              className={`flex flex-col items-center gap-4 p-8 rounded-2xl border border-slate-200 dark:border-slate-border bg-white/50 dark:bg-slate-card/50 hover:border-primary transition-all group cursor-default shadow-sm hover:shadow-xl hover:shadow-primary/5`}
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
