"use client";

import { useState, useEffect } from "react";

const skills = {
  languages: ["Go", "TypeScript", "Python", "JavaScript", "Rust", "Java"],
  backend: ["Node.js", "NestJS", "gRPC", "REST API", "WebSockets", "MCP"],
  frontend: ["React", "Angular", "Flutter", "Next.js"],
  ai: ["LLMs", "RAG", "Langchain", "OpenAI", "Claude API", "n8n"],
  cloud: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
};

const experience = [
  {
    title: "Golang Software Engineer",
    company: "Bluebricks",
    period: "01/2025 – 01/2026",
    location: "Remote",
    stack: "Go, MCP, gRPC, Docker, Kubernetes, Terraform, AWS, GCP, Azure",
    highlights: [
      "Architected Multi-Cloud, Multi-Agent Orchestration CLI tool in Go",
      "Designed inter-agent communication using Model Context Protocol (MCP)",
      "Achieved 85%+ code coverage with comprehensive testing",
      "Reduced onboarding time for new cloud providers from weeks to 2 days",
    ],
  },
  {
    title: "Golang Software Engineer",
    company: "Dentsply Sirona",
    period: "04/2021 – 12/2024",
    location: "On-site",
    stack: "Go, PostgreSQL, gRPC, REST, Redis, Docker, Kubernetes, GCP",
    highlights: [
      "Led backend for healthcare SaaS serving 50,000+ dental professionals",
      "Reduced API latency by 30% through optimization",
      "Accelerated release cycles from bi-weekly to weekly",
      "Mentored 3 junior engineers, conducted 150+ code reviews",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "07/2018 – 04/2021",
    location: "Remote",
    stack: "Node.js, TypeScript, Angular, React, PostgreSQL, MongoDB, AWS",
    highlights: [
      "Delivered 12+ custom web applications for various sectors",
      "Built scalable APIs handling 10,000+ daily active users",
      "Achieved >90 Google Lighthouse performance scores",
      "Reduced client infrastructure costs by 25%",
    ],
  },
  {
    title: "Angular Developer",
    company: "Luxoft",
    period: "05/2017 – 07/2018",
    location: "On-site",
    stack: "Angular, TypeScript, JavaScript, REST API",
    highlights: [
      "Developed UI modules for Investment Bank platform (1,000+ users)",
      "Built 15+ Angular components, reduced data entry time by 40%",
      "Maintained 95%+ code coverage with Jasmine/Karma",
    ],
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DG
          </span>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold shadow-2xl shadow-blue-500/20">
            D
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Dmitry <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Glushchenko</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-6">
            Senior Software Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Golang", "Node.js", "TypeScript", "Python", "Cloud-Native", "AI/ML"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-slate-800/50 rounded-full text-sm text-slate-300 border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">
              Get in Touch
            </a>
            <a href="#experience" className="px-8 py-3 border border-slate-600 rounded-full font-medium hover:bg-slate-800 transition-all">
              View Work
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Senior Software Engineer with <span className="text-blue-400 font-semibold">8+ years</span> of experience designing and delivering cloud-native, microservices-based distributed systems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Expert in <span className="text-purple-400 font-semibold">Go (Golang), TypeScript, Node.js, and Python</span>, with strong command of gRPC, REST API design, WebSockets, and the Model Context Protocol (MCP).
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Specialized in <span className="text-blue-400 font-semibold">AI/ML integration</span>: LLM application development, RAG, multi-agent orchestration, and AI workflow automation.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Track record of reducing latency, accelerating release cycles, and leading high-performing engineering teams.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <h3 className="text-lg font-semibold mb-4 capitalize text-blue-400">
                  {category === 'ai' ? 'AI / ML' : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Work Experience</span>
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm">{job.period}</p>
                    <p className="text-slate-500 text-sm">{job.location}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-4 font-mono">{job.stack}</p>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-blue-400 mt-1">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-slate-400 mb-8">
            Open to Senior, Staff, and Lead Software Engineer roles in backend, full-stack, AI/ML, and DevOps domains.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:aws.inspiration@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              Email
            </a>
            <a href="https://linkedin.com/in/dima-glushchenko" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/DimaJoyti" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="tel:+380938553525" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              Phone
            </a>
          </div>
          <p className="mt-8 text-slate-500 text-sm">
            📍 Ukraine • Open to Remote & Relocation
          </p>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2026 Dmitry Glushchenko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
