import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import styles from "./siteLayout.module.css";

export function SiteLayout({ children }) {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content" className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
