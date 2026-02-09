
import React from 'react';

const Summary: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">person</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight">Summary</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
        Reliable professional with hands-on experience across data management, IT systems, software development, administrative support, and customer-facing roles. Highly organised and detail-oriented, with a proven ability to quickly learn new systems, processes, and technologies. Comfortable working independently or as part of a team, and skilled at managing competing priorities while maintaining accuracy and efficiency. Currently undertaking research at the University of Western Australia.
      </p>
    </section>
  );
};

export default Summary;
