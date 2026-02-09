
import React from 'react';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Activities from '../components/Activities';
import Sidebar from '../components/Sidebar';

const ResumeView: React.FC = () => {
  return (
    <div className="py-12 md:py-20 mesh-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-24">
            <Summary />
            <Experience />
            <Education />
            <Projects />
            <Activities />
          </div>

          {/* Sidebar Sticky Area */}
          <aside className="lg:col-span-4 space-y-10">
            <div className="sticky top-28">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
