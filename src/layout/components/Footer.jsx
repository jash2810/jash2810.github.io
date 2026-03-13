import styles from "./footer.module.css";
import { SITE } from "../../constants/site.constants.js";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.name}>{SITE.name}</div>
          <div className={styles.meta}>
            {SITE.location ? <span>{SITE.location}</span> : null}
            {SITE.email ? <a href={`mailto:${SITE.email}`}>{SITE.email}</a> : null}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            {SITE.linkedinUrl ? (
              <a href={SITE.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : null}
            {SITE.githubUrl ? (
              <a href={SITE.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : null}
            {SITE.websiteUrl ? (
              <a href={SITE.websiteUrl} target="_blank" rel="noreferrer">
                Website
              </a>
            ) : null}
          </div>
          <div className={styles.copy}>© {year}</div>
        </div>
      </div>
    </footer>
  );
}

