import styles from "./Section.module.scss";

export default function Section({ id, title, subtitle, children, className = "", variant = "default" }) {
  return (
    <section id={id} className={`${styles.section} ${styles[variant]} ${className}`}>
      <div className={styles.container}>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}

