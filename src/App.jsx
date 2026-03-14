import { useState } from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <nav className="nav">
        <span className="nav-name" onClick={() => setPage("home")}>LX</span>
        <div className="nav-links">
          <button className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>home</button>
          <button className={page === "experience" ? "active" : ""} onClick={() => setPage("experience")}>experience</button>
          <button className={page === "projects" ? "active" : ""} onClick={() => setPage("projects")}>projects</button>
        </div>
      </nav>

      <main className="main">
        {page === "home" && <Home />}
        {page === "experience" && <Experience />}
        {page === "projects" && <Projects />}
      </main>

      <footer className="footer">
        <span>© Lewei Xu 2026</span>
        <span>built with React</span>
      </footer>
    </div>
  );
}