import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const projects = [
    {
      title: "Smart ERP Portal",
      description:
        "A full-stack ERP platform for managing students, faculty, attendance, fees, results, notices and academic operations.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "CityFix AI",
      description:
        "An AI-powered civic reporting platform that helps users report and prioritize community problems such as potholes, garbage and water leakage.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
    },
    {
      title: "Movie Recommendation System",
      description:
        "A machine learning recommendation system that recommends similar movies using content-based filtering and cosine similarity.",
      tech: ["Python", "Machine Learning", "Cosine Similarity"],
    },
  ];

  const skills = [
    {
      emoji: "💻",
      title: "Frontend",
      items: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
    },
    {
      emoji: "⚙️",
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "Flask"],
    },
    {
      emoji: "🗄️",
      title: "Database",
      items: ["MongoDB", "MongoDB Atlas", "SQL"],
    },
    {
      emoji: "🤖",
      title: "AI / ML",
      items: ["Machine Learning", "AI APIs", "Prompt Engineering", "AI Agents"],
    },
  ];

  const [aiReply, setAiReply] = useState("");
const [loading, setLoading] = useState(false);

const askAI = async () => {
  if (!message.trim()) return;

  setLoading(true);
  setAiReply("");

  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    setAiReply(data.reply);
    setMessage("");
  } catch (error) {
    console.error(error);
    setAiReply(
      "Sorry, I couldn't connect to my AI assistant. Please try again."
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-2xl font-bold">
            Khushi<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="nav-link">
              About
            </a>

            <a href="#skills" className="nav-link">
              Skills
            </a>

            <a href="#projects" className="nav-link">
              Projects
            </a>

            <a href="#ai" className="nav-link">
              AI Assistant
            </a>

            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          <div className="hidden gap-3 md:flex">
            
            <a
              href="https://github.com/khushiekghara"
              target="_blank"
              rel="noreferrer"
              className="..."
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-kumari-a2a558325/"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              LinkedIn
            </a>

          </div>

          <button
            className="mobile-menu-button md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>

              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>

              <a href="#ai" onClick={() => setMenuOpen(false)}>
                AI Assistant
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        <div className="hero-glow"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="status-badge">
              ✨ Building AI-powered experiences
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Hi, I'm{" "}
              <span className="gradient-text">
                Khushi
              </span>{" "}
              👋
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-300 md:text-3xl">
              AI/ML & Full-Stack Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I build intelligent web applications, practical AI solutions,
              and scalable full-stack projects using modern technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="primary-btn">
                View Projects →
              </a>

              <a href="#ai" className="secondary-btn">
                ✨ Ask My AI
              </a>
            </div>

            <div className="mt-8 flex gap-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white"
              >
                GitHub →
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* CODE CARD */}
          <div>
            <div className="code-card">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>

                <span className="text-sm text-slate-500">
                  developer.js
                </span>
              </div>

              <div className="font-mono text-sm leading-8 text-slate-300">
                <p>
                  <span className="purple">const</span>{" "}
                  <span className="cyan">developer</span> = {"{"}
                </p>

                <p className="pl-5">
                  name: <span className="green">"Khushi"</span>,
                </p>

                <p className="pl-5">
                  role: <span className="green">"Developer"</span>,
                </p>

                <p className="pl-5">
                  passion: <span className="green">"AI"</span>,
                </p>

                <p className="pl-5">
                  builds: <span className="green">"Products"</span>,
                </p>

                <p className="pl-5">
                  learning: <span className="green">"Always"</span>
                </p>

                <p>{"};"}</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="stat-card">
                  <p className="text-3xl font-bold">3+</p>
                  <p className="text-sm text-slate-500">Projects</p>
                </div>

                <div className="stat-card">
                  <p className="text-3xl font-bold">AI</p>
                  <p className="text-sm text-slate-500">Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-label">ABOUT ME</p>

            <h2 className="section-title">
              Turning ideas into technology.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="glass-card">
              <h3 className="mb-4 text-2xl font-bold">
                Who I Am
              </h3>

              <p className="leading-8 text-slate-400">
                I'm a BCA student and developer passionate about
                building useful software products. My interests
                include full-stack development, artificial
                intelligence, machine learning and problem solving.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                I enjoy learning new technologies and turning
                real-world problems into practical software solutions.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="mb-4 text-2xl font-bold">
                What I Do
              </h3>

              <ul className="space-y-4 text-slate-400">
                <li>⚡ Build modern React applications</li>
                <li>⚡ Develop REST APIs with Node.js</li>
                <li>⚡ Work with MongoDB databases</li>
                <li>⚡ Explore AI and machine learning</li>
                <li>⚡ Solve DSA and programming problems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section bg-white/[0.02]">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-label">MY SKILLS</p>

            <h2 className="section-title">
              Technologies I work with.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.title} className="skill-card">
                <div className="mb-5 text-4xl">
                  {skill.emoji}
                </div>

                <h3 className="mb-4 text-xl font-bold">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="section">
  <div className="section-container">

    {/* Section Heading */}
    <div className="section-heading">
      <p className="section-label">MY WORK</p>

      <h2 className="section-title">
        Featured Projects
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        A selection of projects I have built using full-stack development,
        artificial intelligence and machine learning.
      </p>
    </div>

    {/* Project Cards */}
    <div className="grid gap-6 lg:grid-cols-3">

      {/* SMART ERP */}
      <div className="project-card">

        <div className="mb-6 flex items-center justify-between">
          <div className="project-icon">
            {"</>"}
          </div>

          <a
            href="https://github.com/YOUR_USERNAME/YOUR_SMART_ERP_REPO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-300 transition hover:text-violet-400"
            aria-label="Open Smart ERP project"
          >
            ↗
          </a>
        </div>

        <h3 className="text-2xl font-bold">
          Smart ERP Portal
        </h3>

        <p className="mt-4 min-h-28 leading-7 text-slate-400">
          A full-stack ERP platform for managing students, faculty,
          attendance, fees, results, notices and academic operations.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="skill-tag">React</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">Express</span>
          <span className="skill-tag">MongoDB</span>
          <span className="skill-tag">JWT</span>
        </div>

        <a
          href="https://smarterp-portal.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block text-sm font-semibold text-violet-400 transition hover:text-violet-300"
        >
          View Project →
        </a>
      </div>


      {/* CITYFIX AI */}
      <div className="project-card">

        <div className="mb-6 flex items-center justify-between">
          <div className="project-icon">
            {"</>"}
          </div>

          <span
            className="text-2xl text-slate-600"
            aria-label="Project demo coming soon"
          >
            ↗
          </span>
        </div>

        <h3 className="text-2xl font-bold">
          CityFix AI
        </h3>

        <p className="mt-4 min-h-28 leading-7 text-slate-400">
          An AI-powered civic reporting platform that helps users report
          and prioritize community problems such as potholes, garbage,
          water leakage and broken streetlights.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="skill-tag">React</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">Express</span>
          <span className="skill-tag">MongoDB</span>
          <span className="skill-tag">AI</span>
        </div>

        <span className="mt-7 inline-block text-sm font-semibold text-slate-500">
          Demo Coming Soon
        </span>
      </div>


      {/* MOVIE RECOMMENDATION */}
      <div className="project-card">

        <div className="mb-6 flex items-center justify-between">
          <div className="project-icon">
            {"</>"}
          </div>

          <span
            className="text-2xl text-slate-600"
            aria-label="Project demo coming soon"
          >
            ↗
          </span>
        </div>

        <h3 className="text-2xl font-bold">
          Movie Recommendation System
        </h3>

        <p className="mt-4 min-h-28 leading-7 text-slate-400">
          A machine learning recommendation system that recommends
          similar movies using content-based filtering and cosine
          similarity.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">Machine Learning</span>
          <span className="skill-tag">Cosine Similarity</span>
        </div>

        <span className="mt-7 inline-block text-sm font-semibold text-slate-500">
          Demo Coming Soon
        </span>
      </div>

    </div>
  </div>
</section>

      {/* AI ASSISTANT */}
      <section id="ai" className="section bg-white/[0.02]">
        <div className="section-container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-4xl">
                🤖
              </div>

              <p className="section-label">
                PERSONAL AI AGENT
              </p>

              <h2 className="section-title">
                Ask my AI about my work.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-slate-400">
                An AI-powered personal assistant that can answer
                questions about my skills, projects, experience and
                developer journey.
              </p>
            </div>

            <div className="ai-box">
              <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="text-3xl">🤖</div>

                <div>
                  <h3 className="font-bold">
                    Khushi AI
                  </h3>

                  <p className="text-xs text-green-400">
                    ● Online
                  </p>
                </div>
              </div>

              <div className="min-h-28 rounded-2xl bg-white/5 p-5 text-slate-400">
  {loading ? (
    <div className="flex items-center gap-2">
      <span>🤖</span>
      <span>Thinking...</span>
    </div>
  ) : aiReply ? (
  <div className="whitespace-pre-wrap leading-7 text-slate-200">
    {aiReply.replace(/\*\*/g, "")}
  </div>
) : (
    <>
      👋 Hi! I'm Khushi's personal AI assistant.
      <br />
      Ask me about her projects, skills or experience.
    </>
  )}
</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "What projects has Khushi built?",
                  "What are her skills?",
                  "Explain Smart ERP",
                  "Generate interview questions",
                ].map((question) => (
                  <button
                    key={question}
                    onClick={() => setMessage(question)}
                    className="question-button"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      askAI();
                    }
                  }}
                  placeholder="Ask something about Khushi..."
                  className="chat-input"
                />

                <button
                  onClick={askAI}
                  className="send-button"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="section">
  <div className="section-container text-center">

    <p className="section-label">
      GET IN TOUCH
    </p>

    <h2 className="section-title">
      Let's build something useful.
    </h2>

    <p className="mx-auto mt-5 max-w-xl text-slate-400">
      Interested in collaborating, discussing a project, or talking
      about technology? Feel free to reach out.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">

      {/* EMAIL */}
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=khushiekghara92@gmail.com&su=Contact%20from%20Khushi%27s%20Portfolio"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  ✉ Contact Me
</a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/khushi-kumari-a2a558325/"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-btn"
      >
        LinkedIn →
      </a>

    </div>

    <div className="mt-10 text-sm text-slate-500">
      <p>khushiekghara92@gmail.com</p>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 Khushi. Built with React & AI.
          </p>

          <div className="flex gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;