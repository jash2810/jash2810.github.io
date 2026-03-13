import { SectionShell } from "./SectionShell.jsx";
import { CONTACT } from "../constants/contact.constants.js";
import { SITE } from "../constants/site.constants.js";
import styles from "./contact.module.css";

export function Contact() {
  const c = CONTACT;
  return (
    <SectionShell id="contact" title="Contact" kicker="Let's talk">
      <div className={styles.card}>
        <div className={styles.left}>
          {c.availability ? (
            <div className={styles.avail}>{c.availability}</div>
          ) : null}
          {c.pitch ? <p className={styles.pitch}>{c.pitch}</p> : null}
          <div className={styles.actions}>
            {SITE.email ? (
              <a className={styles.primaryBtn} href={`mailto:${SITE.email}`}>
                Email me
              </a>
            ) : null}
            {SITE.linkedinUrl ? (
              <a
                className={styles.ghostBtn}
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            ) : null}
            {SITE.phone ? (
              <a
                className={styles.ghostBtn}
                href={"tel:"+SITE.phone}
                rel="noreferrer"
              >
                Phone
              </a>
            ) : null}
          </div>
        </div>
        {Array.isArray(c.social) && c.social.length ? (
          <div className={styles.social}>
            {c.social.filter((s) => Boolean(s.url)).map((s) => (
              <a
                key={s.label}
                className={styles.socialLink}
                href={s.url}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}
