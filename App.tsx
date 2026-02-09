
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingView from './views/LandingView';
import ResumeView from './views/ResumeView';
import ProjectsView from './views/ProjectsView';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'resume' | 'projects'>('landing');

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentView={view} setView={setView} />
      
      <main className="flex-1">
        {view === 'landing' && <LandingView setView={setView} />}
        {view === 'resume' && <ResumeView />}
        {view === 'projects' && <ProjectsView />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
