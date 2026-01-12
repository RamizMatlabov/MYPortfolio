"use client";

import { useState, useEffect } from "react";
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
import { collection, addDoc, serverTimestamp, enableNetwork, disableNetwork } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import SkillCard from "./components/SkillCard/SkillCard";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ScrollToTop from "./components/ScrollToTop";
import styles from "./page.module.scss";

export default function Home() {
  const [isVisible] = useState(true);
  
  // Состояние формы Contact
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' или 'error'
    message: "",
  });

  // Проверка инициализации Firebase и EmailJS при загрузке
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Firebase DB initialized:', !!db);
      if (!db) {
        console.error('Firebase не инициализирован. Проверьте переменные окружения в .env.local');
      }
      
      // Инициализация EmailJS
      if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        console.log('EmailJS initialized');
      } else {
        console.warn('EmailJS не настроен. Добавьте переменные окружения для отправки email.');
      }
    }
  }, []);

  const frontendSkills = [
    { name: "HTML", icon: SiHtml5, color: "#e34c26" },
    { name: "CSS / SCSS", icon: SiCss3, color: "#264de4" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  ];

  const backendSkills = [
    { name: "Python", icon: SiPython, color: "#3776ab" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "API", icon: FaPlug, color: "#6366f1" },
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
  ];

  const projects = [
    {
      title: "PCMarket — интернет-магазин компьютерных товаров",
      description:
        "Современный интернет-магазин компьютерной техники с каталогом товаров, детальными карточками, корзиной и оформлением заказов. Проект построен на Next.js и Django с акцентом на быстродействие, адаптивный интерфейс и удобство пользователя.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Django",
        "Django REST Framework",
        "SQLite",
      ],
      githubUrl: "https://github.com/RamizMatlabov/PCMarket_project.git",
      demoUrl: "https://pcmarket-project.vercel.app/",
    },
    {
      title: "IceWater — доставка питьевой воды",
      description:
        "Веб‑платформа для заказа и доставки бутилированной воды IceWater: выбор объёма и типа воды, оформление заявок, управление заказами и контактами с курьерской службой. Проект разработан с упором на удобный интерфейс и быструю работу на любых устройствах.",
      techStack: ["React", "Next.js", "Node.js", "MongoDB", "REST API"],
      githubUrl: "https://github.com/RamizMatlabov/My-Project.git",
      demoUrl: "https://ice-water-delivery.vercel.app/",
    },
    {
      title: "IceWaterBot — Telegram-бот для заказа воды",
      description:
        "Telegram-бот для сервиса IceWater, который позволяет оформить заказ питьевой воды прямо в чате: выбрать объём, указать адрес доставки и контакты, а также быстро повторять заказы. Упрощает процесс оформления заявок без необходимости заходить на сайт.",
      techStack: ["Python", "Telegram Bot API", "Aiogram", "SQLite"],
      githubUrl: "https://github.com/RamizMatlabov/telegram-bot.git",
      demoUrl: "https://t.me/MyPureWaterBot",
    },
    {
      title: "Новые проекты в процессе",
      description:
        "Параллельно с этими работаю над ещё несколькими проектами — интернет‑магазинами, лендингами и внутренними сервисами. Как только завершу, они появятся здесь с подробным описанием и демо-версиями.",
      comingSoon: true,
    },
  ];

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Form submit started");
    
    // Валидация
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Пожалуйста, заполните все поля",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      console.log("Checking Firebase DB...", { db: !!db });
      
      // Проверка наличия db
      if (!db) {
        console.error("DB is not initialized!");
        throw new Error("Firebase не инициализирован. Проверьте переменные окружения.");
      }

      // Убеждаемся, что сеть включена
      try {
        await enableNetwork(db);
        console.log("Firestore network enabled");
      } catch (networkError) {
        console.warn("Network enable warning:", networkError);
      }

      console.log("Preparing to save to Firestore...");
      console.log("Data to save:", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        messageLength: formData.message.trim().length
      });
      
      // Создаем таймаут для отслеживания зависания
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error("Превышено время ожидания. Проверьте подключение к интернету и настройки Firestore. Убедитесь, что правила безопасности Firestore разрешают запись в коллекцию 'contacts'."));
        }, 15000); // Увеличил до 15 секунд
      });

      // Сохранение в Firestore с таймаутом
      const savePromise = addDoc(collection(db, "contacts"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
      });

      console.log("Waiting for Firestore response...");
      console.log("Collection path: contacts");
      
      const result = await Promise.race([savePromise, timeoutPromise]);
      
      console.log("Successfully saved to Firestore!", result);

      // Отправка email через EmailJS (если настроен)
      const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      
      if (emailjsPublicKey && emailjsServiceId && emailjsTemplateId) {
        try {
          const emailParams = {
            from_name: formData.name.trim(),
            from_email: formData.email.trim(),
            message: formData.message.trim(),
            to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || "ramizmatlabov923@gmail.com",
          };

          await emailjs.send(
            emailjsServiceId,
            emailjsTemplateId,
            emailParams,
            emailjsPublicKey
          );

          console.log("Email sent successfully!");
        } catch (emailError) {
          console.warn("Email sending failed, but data saved to Firestore:", emailError);
          // Не показываем ошибку пользователю, так как данные уже сохранены в Firestore
        }
      } else {
        console.warn("EmailJS не настроен. Сообщение сохранено в Firestore, но email не отправлен.");
        console.warn("Для отправки email настройте EmailJS (см. EMAILJS_SETUP.md)");
      }

      // Успешная отправка
      setSubmitStatus({
        type: "success",
        message: "Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.",
      });
      
      // Очистка формы
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Автоматически скрыть сообщение через 5 секунд
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      console.error("Детали ошибки:", {
        code: error.code,
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      
      let errorMessage = "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.";
      
      // Более детальные сообщения об ошибках
      if (error.code === "permission-denied") {
        errorMessage = "Ошибка доступа. Проверьте правила безопасности Firestore в Firebase Console. Правила должны разрешать запись в коллекцию 'contacts'.";
      } else if (error.code === "unavailable") {
        errorMessage = "Сервис временно недоступен. Проверьте подключение к интернету.";
      } else if (error.message?.includes("Firebase не инициализирован")) {
        errorMessage = "Ошибка конфигурации Firebase. Проверьте файл .env.local и перезапустите сервер.";
      } else if (error.message?.includes("Превышено время ожидания")) {
        errorMessage = error.message + " Возможно, проблема с правилами безопасности Firestore. Убедитесь, что в Firebase Console → Firestore Database → Rules разрешена запись в коллекцию 'contacts'.";
      }
      
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
      console.log("Form submit finished");
    }
  };

  // Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Очистить сообщение об ошибке при изменении поля
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const contactLinks = [
    {
      name: "Email",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      url: "ramizmatlabov923@gmail.com",
    },
    {
      name: "GitHub",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      url: "https://github.com/RamizMatlabov",
    },
    {
      name: "Telegram",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
      ),
      url: "https://t.me/ramiz_matlabov",
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
      url: "https://instagram.com/ramiz_matlabov",
    },
    {
      name: "Upwork",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c0 1.406-1.14 2.546-2.546 2.546-1.406 0-2.546-1.14-2.546-2.546V3.392H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.914 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
      url: "https://www.upwork.com/freelancers/~010978185293265468",
    },
    {
      name: "Kwork",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      url: "https://kwork.ru/user/ramizmatlabov",
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
                <span className={styles.gradientText}> Building Modern Web Applications and Web Sites</span>
              </h1>
              <p className={styles.heroDescription}>
                I create scalable, performant, and user-friendly web applications and web sites using cutting-edge
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
  passion: "Building amazing apps and web sites",
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
                I&apos;m a dedicated Fullstack Developer with a passion for creating modern, efficient,
                and scalable web applications and web sites. With expertise spanning both frontend and backend
                technologies, I bring comprehensive solutions to complex development challenges.
              </p>
              <p>
                My approach combines clean code architecture, user-centered design, and performance
                optimization. I specialize in building responsive applications that deliver
                exceptional user experiences across all devices.
              </p>
              <p>
                Whether it&apos;s developing a new feature, optimizing existing code, or architecting a
                complete application from scratch, I&apos;m committed to delivering high-quality
                solutions that meet both technical and business objectives.
              </p>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills" subtitle="Technologies I work with" variant="skills">
          <div className={styles.skillsOrbitContainer}>
            {/* Frontend Orbital System */}
            <div className={styles.orbitSystem}>
              <div className={styles.orbitCenter}>
                <div className={styles.centerGlow}></div>
                <h3 className={styles.orbitTitle}>Frontend</h3>
              </div>
              <div className={styles.orbitPath}>
                {frontendSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  const angle = (360 / frontendSkills.length) * index;
                  return (
                    <div
                      key={index}
                      className={styles.orbitItem}
                      style={{
                        '--angle': `${angle}deg`,
                        '--delay': `${index * 0.1}s`,
                        '--radius': '180px',
                        '--duration': '20s',
                      }}
                    >
                      <SkillCard name={skill.name} icon={<IconComponent />} color={skill.color} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Backend Orbital System */}
            <div className={styles.orbitSystem}>
              <div className={styles.orbitCenter}>
                <div className={styles.centerGlow}></div>
                <h3 className={styles.orbitTitle}>Backend</h3>
              </div>
              <div className={styles.orbitPath}>
                {backendSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  const angle = (360 / backendSkills.length) * index;
                  return (
                    <div
                      key={index}
                      className={styles.orbitItem}
                      style={{
                        '--angle': `${angle}deg`,
                        '--delay': `${index * 0.1}s`,
                        '--radius': '180px',
                        '--duration': '20s',
                      }}
                    >
                      <SkillCard name={skill.name} icon={<IconComponent />} color={skill.color} />
                    </div>
                  );
                })}
              </div>
            </div>
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
        <Section id="contact" title="Contact" subtitle="Let's work together on your next project" variant="contact">
          <div className={styles.contactContent}>
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                {/* Сообщения об успехе/ошибке */}
                {submitStatus.type && (
                  <div
                    className={`${styles.formMessage} ${
                      submitStatus.type === "success" ? styles.formMessageSuccess : styles.formMessageError
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={styles.formInput}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={styles.formInput}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className={styles.formTextarea}
                    placeholder="Write your question"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className={styles.primaryButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
            <p className={styles.contactDescription}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
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
      <ScrollToTop />
    </div>
  );
}
