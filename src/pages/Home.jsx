export default function Home() {
  const skillGroups = [
    {
      title: "full stack development",
      tags: ["TypeScript", "React", "Tailwind CSS", "FastAPI", "PostgreSQL", "AWS EC2", "Docker", "Git"],
    },
    {
      title: "data science & machine learning",
      tags: ["Python", "R", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Machine Learning", "Deep Learning", "Synthetic Data"],
    },
    {
      title: "AI research",
      tags: ["RAG", "Knowledge Graphs", "VRDU", "MLLMs", "Agentic Planning", "Multi-Hop Reasoning"],
    },
    {
      title: "Languages",
      tags: ["English - First Language", "Chinese - Fluent/Native", "Japanese - Basic Comprehension"],
    }
  ];

  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-name">Lewei Xu</h1>
        <p className="home-tagline">Full stack developer, data scientist, and AI researcher.</p>
        <p className="home-tagline">Based in Perth, Australia.</p>
      </div>

      <div className="contact-block">
        <div className="contact-item">
          <span className="contact-label">email</span>
          <a href="mailto:leweixu@gmail.com">leweixu@gmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">github</span>
          <a href="https://github.com/LeweiXu" target="_blank" rel="noreferrer">github.com/LeweiXu</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">linkedin</span>
          <a href="https://www.linkedin.com/in/lewei-xu/" target="_blank" rel="noreferrer">linkedin.com/in/lewei-xu</a>
        </div>
      </div>

      <div className="home-section">
        <p className="section-label">skills</p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <p className="skill-group-title">{group.title}</p>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="home-section">
        <p className="section-label">education</p>
        <div className="skills-grid">
          <div className="skill-group skill-group--top-border">
            <p className="skill-group-title">University of Western Australia</p>
            <p className="edu-degree">Bachelor of Advanced Computer Science (Honours)</p>
            <p className="edu-sub">Major in Artificial Intelligence | Minor in Data Science</p>
            <p className="edu-date">2023 — present</p>
          </div>
        </div>
      </div>
    </div>
  );
}