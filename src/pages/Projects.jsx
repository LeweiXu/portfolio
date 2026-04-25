export default function Projects() {
  const projects = [
    {
      name: "Honours Project",
      year: "2026",
      desc: "Explores how RAG and Agentic Planning can enhance MLLM performance on multi-page visually rich documents, including tables, figures, and mixed-modality content.",
      stack: ["RAG", "VRDU", "Agentic Planning", "MLLMs", "Multi-hop Reasoning"],
      link: "https://github.com/LeweiXu/Multi-Page-VRDU",
      extraLinks: [{ label: "Project Proposal ↗", href: "https://www.overleaf.com/read/ntdnhjhxkgqt#386d92" }],
    },
    {
      name: "Logarium",
      year: "2026",
      desc: "A web application for tracking and visualising media consumption habits, built mainly for personal use but with potential for public release. Features include automatic media metadata retrieval and comprehensive statistics and visualisations of consumption habits.",
      stack: ["React", "FastAPI", "PostgreSQL", "Docker"],
      link: "https://github.com/LeweiXu/logarium",
      extraLinks: [{ label: "Live Site ↗", href: "https://logarium.vercel.app" }],
      demo: { username: "demo_user", password: "password1" },
    },
    {
      name: "G8 Research Output Database",
      year: "2025",
      desc: "A web application developed for UWA Business School to track and visualise research outputs across individual researchers and universities, with tooling to support academic promotion decisions.",
      stack: ["React", "Tailwind CSS", "TypeScript", "FastAPI", "AWS EC2"],
      link: "https://github.com/LeweiXu/G8-Research-Output-Database",
      extraLinks: [{ label: "Live Site ↗", href: "https://g8-research-output-database.vercel.app/" }],
    },
    {
      name: "CITS3403 Media Tracker",
      year: "2024",
      desc: "A full-stack web application for tracking personal media consumption habits and history, built as part of a university software engineering unit.",
      stack: ["JavaScript", "HTML", "FastAPI", "SQLite"],
      link: "https://github.com/LeweiXu/CITS3403-Project",
    },
    {
      name: "CITS5508 Machine Learning Labs",
      year: "2026",
      desc: "A collection of machine learning lab worksheets completed as part of CITS5508, covering core techniques in supervised learning, learning models, and model evaluation.",
      stack: ["Scikit-Learn", "NumPy", "Pandas", "TensorFlow"],
      link: "https://github.com/LeweiXu/CITS5508",
    },
    {
      name: "CITS4404 Stock Market Trading Bots",
      year: "2025",
      desc: "Designed and compared algorithmic stock market trading bots, each optimised using nature-inspired optimisation algorithms. Includes performance analysis and visualisation across multiple strategies.",
      stack: ["Optimisation Algorithms", "Matplotlib", "NumPy", "Pandas"],
      link: "https://github.com/LeweiXu/CITS4404-Project",
    },
    {
      name: "CITS3011 Diplomacy Bot",
      year: "2025",
      desc: "Designed and implemented an autonomous agent to play Diplomacy: a highly complex, non-deterministic strategy game requiring negotiation and long-term planning.",
      stack: ["Planning Algorithms", "Intelligent Agents"],
      link: "https://github.com/LeweiXu/CITS3011-Project-2025",
    },
    {
      name: "CITS3002 Battleship Game",
      year: "2025",
      desc: "A client-server Battleship game run over the command line, demonstrating network architecture, security vulnerability identification, and live patching under multi-threaded and multi-process conditions.",
      stack: ["Networks", "Security", "Threading", "Multi-processing"],
      link: "https://github.com/LeweiXu/CITS3002-project-2025",
    },
    {
      name: "CITS3001 Advanced Algorithms Labs",
      year: "2024",
      desc: "Lab worksheets from CITS3001 demonstrating applied understanding of data structures: graphs, trees, and more, alongside algorithms including dynamic programming and graph traversal.",
      stack: ["Algorithms", "Data Structures"],
      link: "https://github.com/LeweiXu/CITS3001",
    },
    {
      name: "CITS2002 Operating System Simulator",
      year: "2023",
      desc: "A low-level simulation of operating system behaviour in C, modelling the full lifecycle from system startup through process scheduling, clocks, and resource management.",
      stack: ["Operating Systems", "C"],
      link: "https://github.com/LeweiXu/CITS2002Project-1",
    },
  ];

  return (
    <div>
      <h2 className="page-title">projects</h2>
      <p  class="page-intro">a selection of projects completed either on a personal basis or as part of university coursework.</p>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-item" key={i}>
            <div className="project-header">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-name project-link"
              >
                {p.name}
              </a>
              <span className="project-year">{p.year}</span>
            </div>
            <p className="project-desc">{p.desc}</p>
            {p.extraLinks && (
              <div className="project-extra-links">
                {p.extraLinks.map((el) => (
                  <a key={el.href} href={el.href} target="_blank" rel="noreferrer" className="project-extra-link">
                    {el.label}
                  </a>
                ))}
              </div>
            )}
            {p.demo && (
              <div className="project-demo">
                <p className="project-demo-note">a demo account is available — data is refreshed from my personal account every 24 hours, so any changes you make won't persist.</p>
                <div className="project-demo-credentials">
                  <span><span className="demo-label">username</span> {p.demo.username}</span>
                  <span><span className="demo-label">password</span> {p.demo.password}</span>
                </div>
              </div>
            )}
            <div className="project-stack">
              {p.stack.map((s) => (
                <span className="stack-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}