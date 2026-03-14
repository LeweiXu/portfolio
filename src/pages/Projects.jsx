export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      year: "2025",
      desc: "This portfolio — a minimalist single-page React app with no external UI libraries. Dark theme, monospace accents, clean layout.",
      stack: ["React", "CSS"],
    },
    {
      name: "Document VQA Pipeline",
      year: "2024",
      desc: "A research pipeline for visually rich document understanding, combining RAG with multimodal LLMs to answer questions over complex document layouts.",
      stack: ["Python", "RAG", "MLLMs", "FastAPI"],
    },
    {
      name: "Knowledge Graph Explorer",
      year: "2024",
      desc: "Tool for constructing and querying knowledge graphs extracted from unstructured documents, supporting AI-assisted document Q&A.",
      stack: ["Python", "Knowledge Graphs", "PostgreSQL"],
    },
    {
      name: "ML Data Pipeline",
      year: "2023",
      desc: "End-to-end machine learning pipeline with synthetic data generation, feature engineering, model training and evaluation using scikit-learn and TensorFlow.",
      stack: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    },
  ];

  return (
    <div>
      <h2 className="page-title">projects</h2>
      <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", marginBottom: "2.5rem" }}>
        a selection of things i've built and researched.
      </p>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-item" key={i}>
            <div className="project-header">
              <span className="project-name">{p.name}</span>
              <span className="project-year">{p.year}</span>
            </div>
            <p className="project-desc">{p.desc}</p>
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
