"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { info } from "@/data/info";


export default function PortfolioPage() {
  // Estado para la animación de reducción del título
  const [isNameTyped, setIsNameTyped] = useState(false);

  // Clase de utilidad para el efecto de Glassmorphism
  const glassCard = "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-2xl rounded-[24px] p-8 md:p-10 hover:bg-white/[0.05] hover:border-white/[0.15] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] transition-all duration-500";

  // Configuración base para animaciones de entrada fluidas (Framer Motion)
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0},
      transition: { duration: 0.6, ease: "easeOut" } 
    }

  // Contenedor que ejecuta el efecto escalonado (stagger) a sus elementos hijos
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Variante de animación individual para cada tarjeta en un grid
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0},
      transition: { duration: 0.6, ease: "easeOut" } 
    }


  return (
    <main className="min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* 1. HERO SECTION */}
      <section className={`min-h-[90vh] flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 transition-all duration-1000 ease-in-out ${isNameTyped ? "gap-6 md:gap-8" : "gap-16"}`}>
        
        {/* Nombre Centrado con Efecto Typewriter */}
        <motion.h1 
          className={`font-extrabold leading-[1.1] tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 transition-all duration-1000 ease-in-out ${isNameTyped ? "text-4xl md:text-5xl lg:text-[2.5rem] lg:text-left" : "text-5xl md:text-6xl lg:text-[6.5rem]"}`}
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
          }}
          initial="hidden"
          animate="visible"
          onAnimationComplete={(variant) => {
            if (variant === "visible") {
              // Un pequeño delay (500ms) antes de encoger permite al usuario leer el nombre completo
              setTimeout(() => setIsNameTyped(true), 500);
            }
          }}
        >
          {info.personal.name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { display: "none", opacity: 0 },
                visible: { display: "inline", opacity: 1 }
              }}
              className={char === " " ? "whitespace-pre" : ""}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="inline-block font-light text-white ml-1 [-webkit-text-fill-color:white]"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          >
            |
          </motion.span>
        </motion.h1>

        {/* Resto de la Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.0 } }
            }}
            initial="hidden"
            animate={isNameTyped ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6 tracking-tight">
              {info.personal.title}
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed text-lg">
              {info.profile}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-slate-400 mb-10">
              <span className="flex items-center gap-2">📍 {info.personal.location}</span>
              <span className="flex items-center gap-2">✉️ {info.personal.emails[0]}</span>
            </div>
            <div className="flex justify-center lg:justify-start gap-4">
              <a href={info.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
              <a href={info.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white/[0.05] border border-white/[0.1] text-white font-bold rounded-full backdrop-blur-md hover:bg-white/[0.1] hover:border-white/[0.2] transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Contenedor de la Foto de Perfil */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 1.2 } }
            }}
            initial="hidden"
            animate={isNameTyped ? "visible" : "hidden"}
            className="lg:col-span-5 flex justify-center items-center relative order-first lg:order-last"
          >
            {/* Orbe de luz decorativo detrás de la imagen */}
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-blue-500/20 rounded-full blur-[80px] z-0"></div>
            
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-2 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl z-10 hover:scale-105 transition-transform duration-500 group">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/profile-pic.jpg" 
                  alt={`Foto de perfil de ${info.personal.name}`} 
                  fill 
                  className="object-cover group-hover:grayscale-0 transition-all duration-500" 
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TECH STACK (BENTO GRID) */}
      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-white">Stack Tecnológico.</motion.h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend ocupa 2 columnas */}
          <motion.div variants={cardVariant} className={`md:col-span-2 ${glassCard}`}>
            <h3 className="text-xl font-bold text-white mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-3">
                {info.skills.frontend.map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            </motion.div>
            
          {/* Backend ocupa 1 columna */}
          <motion.div variants={cardVariant} className={glassCard}>
            <h3 className="text-xl font-bold text-white mb-6">Backend & DB</h3>
            <div className="flex flex-wrap gap-3">
                {[...info.skills.backend, ...info.skills.databases].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            </motion.div>
            
          {/* Herramientas ocupa todo el ancho inferior */}
          <motion.div variants={cardVariant} className={`md:col-span-3 ${glassCard}`}>
            <h3 className="text-xl font-bold text-white mb-6">Herramientas</h3>
            <div className="flex flex-wrap gap-3">
                {info.skills.tools.map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            </motion.div>
        </motion.div>
      </section>

      {/* 3. EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white">Experiencia Laboral.</motion.h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12 pb-4">
          {info.experience.map((exp, idx) => (
            <motion.div variants={cardVariant} key={idx} className="relative pl-8 md:pl-12">
              {/* Indicador de Línea de tiempo */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[8.5px] top-10 md:top-12 ring-4 ring-[#050505] shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
              
              <div className={`${glassCard} relative overflow-hidden`}>
                <div className="flex flex-col items-start mb-6">
                  <span className="inline-block mb-4 text-slate-300 border border-white/10 bg-white/5 rounded-full px-4 py-1 text-sm font-medium">{exp.date}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
                </div>
                
                <ul className="space-y-4 text-slate-300">
                  {exp.tasks.map((task, i) => {
                    const isEnglishTask = task.toLowerCase().includes("inglés");
                    return (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-blue-500 mt-1 flex-shrink-0">✦</span>
                        <span className={`leading-relaxed ${isEnglishTask ? "text-amber-200 font-medium" : ""}`}>
                          {task}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white">Proyectos Personales.</motion.h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {info.projects.map((proj, idx) => (
            <motion.div variants={cardVariant} key={idx} className={`${glassCard} flex flex-col`}>
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-2 block">{proj.date}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{proj.title}</h3>
                <p className="text-slate-400 leading-relaxed">{proj.description}</p>
              </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 mt-auto border-t border-white/10 pt-6">
                <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                  Código Fuente ↗
                </a>
                <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                  Demo Online ↗
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. EDUCATION & STATS */}
      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white">Formación Académica.</motion.h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {info.education.map((edu, idx) => (
            <motion.div variants={cardVariant} key={idx} className={glassCard}>
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-blue-400 text-lg mb-8 font-medium">{edu.institution}</p>
                
              <div className="space-y-2 mb-8">
                <p className="flex items-center gap-3 text-slate-300"><span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded">📅</span> {edu.date}</p>
                <p className="flex items-center gap-3 text-slate-300"><span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded">📈</span> {edu.status}</p>
              </div>
              
              <div className="inline-flex items-center gap-3 bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full font-bold text-sm border border-blue-500/30">
                🏆 {edu.stats}
              </div>
            </motion.div>
          ))}

        </motion.div>
      </section>

      {/* 6. CERTIFICACIONES */}
      {info.certificates && info.certificates.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden border-t border-white/5">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white">Certificaciones.</motion.h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {info.certificates.map((cert, idx) => (
              <motion.div variants={cardVariant} key={idx} className={`${glassCard} flex flex-col`}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-400 font-medium">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-6">
                  <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded">📅</span> {cert.date}
                </div>
                {cert.link && (
                  <div className="mt-auto border-t border-white/10 pt-6">
                    <a href={cert.link} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2 w-max">
                      Ver credencial ↗
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

    </main>
  );
}