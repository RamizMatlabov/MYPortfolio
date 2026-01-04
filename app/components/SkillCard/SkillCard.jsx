import styles from "./SkillCard.module.scss";

export default function SkillCard({ name, icon, color }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon} style={{ color: color || 'var(--accent-primary)' }}>
        {icon}
      </div>
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
}

