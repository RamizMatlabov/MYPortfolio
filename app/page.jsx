"use client";

import { useEffect, useState } from "react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiGit,
  SiGithub
} from "react-icons/si";
import { FaCode, FaPlug } from "react-icons/fa";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import SkillCard from "./components/SkillCard/SkillCard";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import styles from "./page.module.scss";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "HTML", icon: SiHtml5, color: "#e34c26" },
    { name: "CSS / SCSS", icon: SiCss3, color: "#264de4" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "Python", icon: SiPython, color: "#3776ab" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "API Development", icon: FaPlug, color: "#6366f1" },
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for optimal performance and user experience.",
      techStack: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for productivity and seamless user experience.",
      techStack: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "An analytics dashboard for social media management with data visualization, scheduling tools, and comprehensive reporting. Helps businesses manage their social presence effectively.",
      techStack: ["Next.js", "Python", "Django", "Chart.js", "REST API"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com",
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features beautiful UI and accurate weather data integration.",
      techStack: ["React", "JavaScript", "API Integration", "SCSS"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blogging platform with markdown support, syntax highlighting, and SEO optimization. Includes admin panel for content management and user engagement features.",
      techStack: ["Next.js", "Node.js", "MongoDB", "Markdown", "SEO"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A real-time messaging application with end-to-end encryption, file sharing, and group chat capabilities. Built for secure and efficient communication.",
      techStack: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com",
    },
  ];

  const contactLinks = [
    {
      name: "Email",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      url: "mailto:your.email@example.com",
    },
    {
      name: "GitHub",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      url: "https://github.com",
    },
    {
      name: "Telegram",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.17 1.858-.896 6.367-1.265 8.45-.15.855-.443 1.14-.728 1.17-.61.06-1.072-.402-1.663-.787-.2-.12-3.24-2.13-4.68-3.12-.185-.13-.318-.21-.492-.21-.18 0-.44.1-.68.32-.24.22-.92.9-1.18 1.08-.2.15-.4.22-.62.22-.28 0-.6-.14-.9-.42-.33-.3-.75-.75-1.14-1.28-1.95-2.25-3.42-5.04-3.9-5.28-.1-.05-.22-.08-.33-.08-.24 0-.6.18-.6.6 0 .24.15.54.3.75.15.21 2.1 2.55 4.5 4.35.3.24.5.36.68.36.12 0 .24-.03.36-.1.24-.12 4.8-2.25 5.4-2.55.3-.15.54-.22.72-.22.15 0 .27.03.39.1.24.15.42.42.3.75-.12.33-1.8 1.8-2.55 2.43-.3.24-.51.4-.66.4-.12 0-.24-.03-.36-.1-.24-.12-4.8-2.25-5.4-2.55-.3-.15-.54-.22-.72-.22-.15 0-.27.03-.39.1-.24.15-.42.42-.3.75.12.33 1.8 1.8 2.55 2.43.3.24.51.4.66.4.12 0 .24-.03.36-.1.24-.12 4.8-2.25 5.4-2.55.3-.15.54-.22.72-.22.15 0 .27.03.39.1.24.15.42.42.3.75z" />
        </svg>
      ),
      url: "https://t.me/yourusername",
    },
    {
      name: "Instagram",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      url: "https://instagram.com/yourusername",
    },
    {
      name: "Upwork",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c0 1.406-1.14 2.546-2.546 2.546-1.406 0-2.546-1.14-2.546-2.546V3.392H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.914 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
      url: "https://upwork.com/freelancers/yourusername",
    },
    {
      name: "Kwork",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      url: "https://kwork.ru/user/yourusername",
    },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={`${styles.heroText} ${isVisible ? styles.fadeIn : ""}`}>
              <h1 className={styles.heroTitle}>
                Fullstack Developer
                <span className={styles.gradientText}> Building Modern Web Applications</span>
              </h1>
              <p className={styles.heroDescription}>
                I create scalable, performant, and user-friendly web applications using cutting-edge
                technologies. Specialized in React, Next.js, Node.js, and Python development.
              </p>
              <div className={styles.heroButtons}>
                <button
                  onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={styles.primaryButton}
                >
                  View Projects
                </button>
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={styles.secondaryButton}
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className={`${styles.heroVisual} ${isVisible ? styles.slideInRight : ""}`}>
              <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <span className={styles.codeDot}></span>
                  <span className={styles.codeDot}></span>
                  <span className={styles.codeDot}></span>
                </div>
                <pre className={styles.codeContent}>
                  <code>{`const developer = {
  name: "Fullstack Developer",
  skills: ["React", "Next.js", "Node.js"],
  passion: "Building amazing apps",
  available: true
};`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About Me" subtitle="Passionate developer crafting digital experiences" variant="about">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                I'm a dedicated Fullstack Developer with a passion for creating modern, efficient,
                and scalable web applications. With expertise spanning both frontend and backend
                technologies, I bring comprehensive solutions to complex development challenges.
              </p>
              <p>
                My approach combines clean code architecture, user-centered design, and performance
                optimization. I specialize in building responsive applications that deliver
                exceptional user experiences across all devices.
              </p>
              <p>
                Whether it's developing a new feature, optimizing existing code, or architecting a
                complete application from scratch, I'm committed to delivering high-quality
                solutions that meet both technical and business objectives.
              </p>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills" subtitle="Technologies I work with" variant="skills">
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className={styles.skillWrapper}
                >
                  <SkillCard name={skill.name} icon={<IconComponent />} color={skill.color} />
                </div>
              );
            })}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects" subtitle="Some of my recent work" variant="projects">
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className={styles.projectWrapper}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch" subtitle="Let's work together on your next project" variant="contact">
          <div className={styles.contactContent}>
            <p className={styles.contactDescription}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Feel free to reach out through any of the platforms below.
            </p>
            <div className={styles.contactLinks}>
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.contactIcon}>{link.icon}</div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} Fullstack Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
