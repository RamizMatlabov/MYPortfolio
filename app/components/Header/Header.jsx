"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Закрываем мобильное меню после клика
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Ramiz Matlabov's Portfolio</span>
        </div>
        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
          <button onClick={() => scrollToSection("about")} className={styles.navLink}>
            About
          </button>
          <button onClick={() => scrollToSection("skills")} className={styles.navLink}>
            Skills
          </button>
          <button onClick={() => scrollToSection("projects")} className={styles.navLink}>
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className={styles.navLink}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

