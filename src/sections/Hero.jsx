import { useMemo, useState } from "react";
import fallbackSvg from "../assets/avatar-fallback.svg";
import { HERO } from "../constants/hero.constants.js";
import { SITE } from "../constants/site.constants.js";
import styles from "./hero.module.css";

function Pill({ children }) {
  return <span className={styles.pill}>{children}</span>;
}

export function Hero() {
  const initialSrc = useMemo(() => `${import.meta.env.BASE_URL}profile.jpeg`, []);
  const [src, setSrc] = useState(initialSrc);

  return (
    <section id="top" className={styles.hero} aria-label="Intro">
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.nameRow}>
            <h1 className={styles.h1}>
              {SITE.name}
              <span className={styles.dot} aria-hidden="true">
                .
              </span>
            </h1>
            <div className={styles.miniPhotoFrame} aria-hidden="true">
              <img
                className={styles.miniPhoto}
                src={src}
                alt=""
                loading="eager"
                decoding="async"
                onError={() => setSrc(fallbackSvg)}
              />
            </div>
          </div>
          <p className={styles.lead}>{HERO.blurb}</p>
          <div className={styles.badges}>
            {SITE.location ? <Pill>{SITE.location}</Pill> : null}
            {SITE.headline ? <Pill>{SITE.headline}</Pill> : null}
          </div>
          <div className={styles.ctaRow}>
            <a className={styles.primaryBtn} href="#contact">
              Contact
            </a>
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
            {SITE.githubUrl ? (
              <a
                className={styles.ghostBtn}
                href={SITE.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
          </div>
          {Array.isArray(HERO.highlights) && HERO.highlights.length ? (
            <div className={styles.metrics} role="list">
              {HERO.highlights.slice(0, 3).map((m) => (
                <div key={m.label} className={styles.metric} role="listitem">
                  <div className={styles.metricValue}>{m.value}</div>
                  <div className={styles.metricLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className={styles.right}>
          <div className={styles.photoFrame}>
            <img
              className={styles.photo}
              src={src}
              alt={`${SITE.name} headshot`}
              loading="eager"
              decoding="async"
              onError={() => setSrc(fallbackSvg)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
