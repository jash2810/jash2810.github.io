import styles from "./sectionShell.module.css";

export function SectionShell({ id, title, kicker, children }) {
  return (
    <section id={id} className={styles.section} aria-label={title}>
      <div className={styles.heading}>
        {kicker ? <div className={styles.kicker}>{kicker}</div> : null}
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  );
}

