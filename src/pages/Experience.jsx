export default function Experience() {
  const items = [
    {
      date: "Jan 2026 — present",
      org: "UWA Computer Science",
      location: "Crawley, WA",
      role: "Honours Researcher",
      desc: "Conducting honours research on training-free agentic RAG frameworks for multi-page visually rich document understanding. See projects page for details.",
      thesis: "Training-Free Agentic RAG Framework for Multi-Page Visually Rich Document Understanding",
    },
    {
      date: "Nov 2025 — Dec 2025",
      org: "Harvey Aboriginal Corporation",
      location: "Harvey, WA",
      role: "IT & Data Systems Intern",
      desc: "Designed and implemented new data and IT systems across the organisation. Supported upgrades to software and hardware to improve reliability and efficiency. Worked directly with staff to understand needs and provide practical system solutions.",
    },
    {
      date: "Jun 2025 — Nov 2025",
      org: "UWA Business School",
      location: "Nedlands, WA",
      role: "Full Stack Developer",
      desc: "Developed and deployed a complete software solution for an external client as part of an agile project team. Built front-end components using HTML, CSS, and JavaScript. Developed back-end services using Python (FastAPI) and SQLite. Used Git for version control and deployed and maintained the application on AWS EC2.",
    },
    {
      date: "Jun 2025 — Nov 2025",
      org: "Australian Department of Health",
      location: "East Perth, WA",
      role: "Data Scientist Intern",
      desc: "Contributed to data-driven projects including the development of synthetic datasets for public use. Applied machine learning techniques to analyse and model hospital wait times. Conducted data analysis using Python, R, and libraries including Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, and Plotly. Used Microsoft DevOps and Git for version control and project workflows.",
    },
    {
      date: "May 2023 — Jan 2026",
      org: "Banksia Grove Newsagency",
      location: "Banksia Grove, WA",
      role: "Manager",
      desc: "Managed daily store operations including staff rostering and shift coordination. Responsible for cash handling, daily and weekly till balancing, and end-of-day reporting. Monitored stock levels and placed orders to maintain appropriate inventory. Delivered consistent customer service in a front-facing role.",
    },
    {
      date: "Jan 2025 — Sep 2025",
      org: "Hungry Jack's Glengarry",
      location: "Glengarry, WA",
      role: "Closing Crew",
      desc: "Completed end-of-day closing procedures in accordance with operational standards. Maintained cleanliness of kitchen and front-of-house areas. Supported food preparation and order fulfilment during service periods.",
    },
    {
      date: "Nov 2022 — Feb 2023",
      org: "Campion Education Malaga",
      location: "Malaga, WA",
      role: "Team Leader",
      desc: "Supervised a small team responsible for packing and dispatching stationery orders. Ensured accuracy and quality control of items and quantities prior to dispatch. Completed associated administrative tasks including documentation and picking records.",
    },
  ];

  return (
    <div>
      <h2 className="page-title">experience</h2>
      <p class="page-intro">a selection of work experience across research, industry, and retail roles.</p>
      <div className="timeline">
        {items.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-meta">
              <span className="timeline-date">{item.date}</span>
              <span className="timeline-org">{item.org}</span>
              <span className="timeline-date">{item.location}</span>
            </div>
            <div>
              <p className="timeline-role">{item.role}</p>
              {item.thesis && (
                <p className="timeline-thesis">thesis: {item.thesis}</p>
              )}
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}