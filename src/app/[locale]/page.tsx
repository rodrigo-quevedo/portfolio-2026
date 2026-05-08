"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { myTechnologies } from "@/data/my-technologies";
import { jobTechnologies } from "@/data/job-technologies";
import { projectTechnologies } from "@/data/project-technologies";
import { socialLinks } from "@/data/social-links";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaGithub, FaNetworkWired, FaProjectDiagram, FaCode, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMui, SiJquery, SiExpress, SiSharp, SiDotnet, SiMysql, SiMongodb, SiJsonwebtokens, SiGnubash, SiPrisma, SiSupabase } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

type PageProps = {
  params: {
    locale: string;
  };
};

const getSkillIcon = (skill: string, className: string = "w-4 h-4") => {
  const iconMap: Record<string, { icon: React.ElementType; color: string }> = {
    HTML5: { icon: FaHtml5, color: "#E34F26" },
    CSS3: { icon: FaCss3Alt, color: "#1572B6" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
    "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    "React.js": { icon: FaReact, color: "#61DAFB" },
    "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
    "Material UI": { icon: SiMui, color: "#007FFF" },
    jQuery: { icon: SiJquery, color: "#0769AD" },
    "Node.js": { icon: FaNodeJs, color: "#339933" },
    Express: { icon: SiExpress, color: "#ffffff" },
    "Express.js": { icon: SiExpress, color: "#ffffff" },
    "C#": { icon: SiSharp, color: "#239120" },
    ".NET Core": { icon: SiDotnet, color: "#512BD4" },
    "ASP.NET Core": { icon: SiDotnet, color: "#512BD4" },
    Java: { icon: FaJava, color: "#5382a1" },
    MySQL: { icon: SiMysql, color: "#4479A1" },
    MongoDB: { icon: SiMongodb, color: "#47A248" },
    Prisma: { icon: SiPrisma, color: "#2D3748" },
    Supabase: { icon: SiSupabase, color: "#3ECF8E" },
    Git: { icon: FaGitAlt, color: "#F05032" },
    GitHub: { icon: FaGithub, color: "#ffffff" },
    Docker: { icon: FaDocker, color: "#2496ED" },
    JWT: { icon: SiJsonwebtokens, color: "#FB015B" },
    "REST APIs": { icon: FaNetworkWired, color: "#0096D4" },
    UML: { icon: FaProjectDiagram, color: "#FFA500" },
    "Linux Bash": { icon: SiGnubash, color: "#4EAA25" }
  };

  const mapped = iconMap[skill];
  if (mapped) {
    const { icon: Icon, color } = mapped;
    return <Icon className={className} style={{ color }} />;
  }
  return <FaCode className={className} style={{ color: "#94a3b8" }} />;
};

export default function LocalePortfolioPage({ params }: PageProps) {
  const t = useTranslations();
  const [isNameTyped, setIsNameTyped] = useState(false);

  const glassCard =
    "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-2xl rounded-[24px] p-8 md:p-10 hover:bg-white/[0.05] hover:border-white/[0.15] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] transition-all duration-500";

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <section
        className={`min-h-[90vh] flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 transition-all duration-1000 ease-in-out ${
          isNameTyped ? "gap-6 md:gap-8" : "gap-16"
        }`}>
        <motion.h1
          className={`font-extrabold leading-[1.1] tracking-tighter text-center text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/40 transition-all duration-1000 ease-in-out ${
            isNameTyped
              ? "text-4xl md:text-5xl lg:text-[2.5rem] lg:text-left"
              : "text-5xl md:text-6xl lg:text-[6.5rem]"
          }`}
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
          }}
          initial="hidden"
          animate="visible"
          onAnimationComplete={(variant) => {
            if (variant === "visible") {
              setTimeout(() => setIsNameTyped(true), 500);
            }
          }}>
          {t('personal.name').split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { display: "none", opacity: 0 },
                visible: { display: "inline", opacity: 1 }
              }}
              className={char === " " ? "whitespace-pre" : ""}>
              {char}
            </motion.span>
          ))}
          <motion.span
            className="inline-block font-light text-white ml-1 [-webkit-text-fill-color:white]"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
            |
          </motion.span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.0 } }
            }}
            initial="hidden"
            animate={isNameTyped ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6 tracking-tight">
              {t('personal.title')}
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed text-lg">
              {t('profile')}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-slate-400 mb-10">
              <span className="flex items-center gap-2">📍 {t('personal.location')}</span>
              <span className="flex items-center gap-2">
                <IoMdMail className="w-5 h-5" /> {t('personal.emails.0')}
              </span>
            </div>
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href={t('personal.github')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all">
                <FaGithub className="w-5 h-5" />
                {t('ui.buttonGithub')}
              </a>
              <a
                href={t('personal.linkedin')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#0A66C2] border border-white/10 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all">
                <FaLinkedin className="w-5 h-5" />
                {t('ui.buttonLinkedin')}
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 1.2 } }
            }}
            initial="hidden"
            animate={isNameTyped ? "visible" : "hidden"}
            className="lg:col-span-5 flex justify-center items-center relative order-first lg:order-last">
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-blue-500/20 rounded-full blur-[80px] z-0"></div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-2 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl z-10 hover:scale-105 transition-transform duration-500 group">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile-pic.jpg"
                  alt={`${t('info.ui.altProfileImage')} ${t('personal.name')}`}
                  fill
                  className="object-cover group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-white">
          {t('ui.sectionStack')}
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={cardVariant} className={`md:col-span-2 ${glassCard}`}>
            <h3 className="text-xl font-bold text-white mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {t.raw('skills.frontend').map((skill: string) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                  {getSkillIcon(skill)}
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={cardVariant} className={glassCard}>
            <h3 className="text-xl font-bold text-white mb-6">Backend & DB</h3>
            <div className="flex flex-wrap gap-3">
              {[...t('skills.backend'), ...t('skills.databases')].map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                  {getSkillIcon(skill)}
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={cardVariant} className={`md:col-span-3 ${glassCard}`}>
            <h3 className="text-xl font-bold text-white mb-6">Herramientas</h3>
            <div className="flex flex-wrap gap-3">
              {t.raw('skills.tools').map((skill: string) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                  {getSkillIcon(skill)}
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white">
          {t('ui.sectionExperience')}
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12 pb-4">
          {t.raw('experience').map((exp:any, idx:any) => (
            <motion.div variants={cardVariant} key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-8.5px] top-10 md:top-12 ring-4 ring-[#050505] shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
              <div className={`${glassCard} relative overflow-hidden`}>
                <div className="flex flex-col items-start mb-6">
                  <span className="inline-block mb-4 text-slate-300 border border-white/10 bg-white/5 rounded-full px-4 py-1 text-sm font-medium">
                    {exp.date}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
                </div>
                <ul className="space-y-4 text-slate-300">
                  {exp.tasks.map((task:any, i:any) => {
                    const isEnglishTask = task.toLowerCase().includes("inglés") || task.toLowerCase().includes("english");
                    return (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-blue-500 mt-1 shrink-0">✦</span>
                        <span className={`leading-relaxed ${isEnglishTask ? "text-amber-200 font-medium" : ""}`}>
                          {task}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {exp.stack && exp.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                    {exp.stack.map((tech:string) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-full">
                        {getSkillIcon(tech, "w-3 h-3")}
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white">
          {t('ui.sectionProjects')}
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.raw('projects').map((proj:any, idx:any) => (
            <motion.div variants={cardVariant} key={idx} className={`${glassCard} flex flex-col`}>
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-2 block">
                  {proj.date}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">{proj.title}</h3>
                <p className="text-slate-400 leading-relaxed">{proj.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {proj.stack.map((tech: string) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-full">
                    {getSkillIcon(tech, "w-3 h-3")}
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 mt-auto border-t border-white/10 pt-6">
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                  {t('ui.linkSourceCode')}
                </a>
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                  {t('ui.linkLiveDemo')}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white">
          {t('ui.sectionEducation')}
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.raw('education').map((edu:any, idx:any) => (
            <motion.div variants={cardVariant} key={idx} className={glassCard}>
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-blue-400 text-lg mb-8 font-medium">{edu.institution}</p>
              <div className="space-y-2 mb-8">
                <p className="flex items-center gap-3 text-slate-300">
                  <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded">📅</span>
                  {edu.date}
                </p>
                <p className="flex items-center gap-3 text-slate-300">
                  <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded">📈</span>
                  {edu.status}
                </p>
              </div>
              <div className="inline-flex items-center gap-3 bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full font-bold text-sm border border-blue-500/30">
                🏆 {edu.stats}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {t.raw('certificates') && t.raw('certificates').length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden border-t border-white/5">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white">
            {t('ui.sectionCertificates')}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.raw('certificates').map((cert:any, idx:any) => (
              <motion.div variants={cardVariant} key={idx} className={`${glassCard} flex flex-col`}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-400 font-medium">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-6">
                  <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded">📅</span>
                  {cert.date}
                </div>
                {cert.link && (
                  <div className="mt-auto border-t border-white/10 pt-6">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2 w-max">
                      {t('ui.linkCredential')}
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
