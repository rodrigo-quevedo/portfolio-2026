import { info } from "@/data/info";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-4">
          {info.personal.name}
        </h1>
        <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
          {info.personal.title}
        </p>
        <p className="text-slate-600 max-w-2xl mb-8 leading-relaxed text-lg">
          {info.profile}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500 mb-8">
          <span className="flex items-center gap-2">📍 {info.personal.location}</span>
          <span className="flex items-center gap-2">✉️ {info.personal.emails[0]}</span>
        </div>
        <div className="flex gap-4">
          <a href={info.personal.github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg shadow-md hover:bg-slate-800 transition-all">
            GitHub
          </a>
          <a href={info.personal.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all">
            LinkedIn
          </a>
        </div>
      </section>

      {/* 2. TECH STACK */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">💻 Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {info.skills.frontend.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-md text-sm font-medium shadow-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">⚙️ Backend & DB</h3>
              <div className="flex flex-wrap gap-2">
                {[...info.skills.backend, ...info.skills.databases].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-md text-sm font-medium shadow-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">🛠️ Herramientas</h3>
              <div className="flex flex-wrap gap-2">
                {info.skills.tools.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-md text-sm font-medium shadow-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">Experiencia Laboral</h2>
        <div className="space-y-12 border-l-2 border-blue-200 pl-6 ml-3">
          {info.experience.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Indicador de Timeline */}
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[33px] top-1.5 border-4 border-slate-50"></div>
              <h3 className="text-2xl font-bold text-slate-800">{exp.role}</h3>
              <p className="text-blue-600 font-semibold mb-3">
                {exp.company} <span className="text-slate-400 font-medium">| {exp.date}</span>
              </p>
              <ul className="space-y-3 text-slate-600">
                {exp.tasks.map((task, i) => {
                  // Destacamos estratégicamente el trabajo en inglés
                  const isEnglishTask = task.toLowerCase().includes("inglés");
                  return (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span className={isEnglishTask ? "bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium border border-amber-200 shadow-sm" : ""}>
                        {isEnglishTask ? `🇺🇸 ${task}` : task}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section className="bg-slate-800 text-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {info.projects.map((proj, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
                  <span className="text-slate-400 text-sm font-medium">{proj.date}</span>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 border border-blue-800/50 text-xs font-bold rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
                    Código fuente &rarr;
                  </a>
                  <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
                    Demo online &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EDUCATION & STATS */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Educación Académica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {info.education.map((edu, idx) => (
            <div key={idx} className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
              {/* Fondo decorativo */}
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-blue-500 rounded-full opacity-50 blur-3xl group-hover:bg-blue-400 transition-colors"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-blue-200 text-lg mb-6 font-medium">{edu.institution}</p>
                
                <div className="space-y-2 mb-8">
                  <p className="flex items-center gap-2"><span className="text-blue-300">📅</span> {edu.date}</p>
                  <p className="flex items-center gap-2"><span className="text-blue-300">📈</span> {edu.status}</p>
                </div>
                
                {/* ¡Aquí brillan tus notas! */}
                <div className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-xl font-black text-xl shadow-md border-2 border-blue-100">
                  🏆 {edu.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}