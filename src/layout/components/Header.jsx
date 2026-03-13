import { useEffect, useState } from "react";
import { SITE } from "../../constants/site.constants.js";
import styles from "./header.module.css";

function NavLink({ href, label, onClick }) {
  return (
    <a className={styles.navLink} href={href} onClick={onClick}>
      {label}
    </a>
  );
}

export function Header() {
  const [theme, setTheme] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label="Home">
          <span className={styles.brandMark} />
          <span className={styles.brandText}>{SITE.name}</span>
        </a>
        <nav className={styles.nav} aria-label="Primary">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#credentials" label="Credentials" />
          <NavLink href="#education" label="Education" />
          <NavLink href="#contact" label="Contact" />
        </nav>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.burgerBtn}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className={styles.burgerIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <button
            type="button"
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <span className={styles.themeIcon} aria-hidden="true">
              {theme === "dark" ? "☾" : "☀"}
            </span>
            <span className={styles.themeText}>{theme === "dark" ? "Dark" : "Light"}</span>
          </button>
          {SITE.resumeUrl ? (
            <a className={styles.primaryBtn} href={SITE.resumeUrl}>
              Resume
            </a>
          ) : null}
        </div>
      </div>

      {mobileOpen ? (
        <div className={styles.mobileLayer} onClick={closeMobile} role="presentation">
          <nav
            id="mobile-nav"
            className={styles.mobileNav}
            aria-label="Mobile"
            onClick={(e) => e.stopPropagation()}
          >
            <NavLink href="#about" label="About" onClick={closeMobile} />
            <NavLink href="#experience" label="Experience" onClick={closeMobile} />
            <NavLink href="#projects" label="Projects" onClick={closeMobile} />
            <NavLink href="#skills" label="Skills" onClick={closeMobile} />
            <NavLink href="#credentials" label="Credentials" onClick={closeMobile} />
            <NavLink href="#education" label="Education" onClick={closeMobile} />
            <NavLink href="#contact" label="Contact" onClick={closeMobile} />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
