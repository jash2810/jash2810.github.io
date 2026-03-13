import { SiteLayout } from "./layout/SiteLayout.jsx";
import { About } from "./sections/About.jsx";
import { Contact } from "./sections/Contact.jsx";
import { Credentials } from "./sections/Credentials.jsx";
import { Education } from "./sections/Education.jsx";
import { Experience } from "./sections/Experience.jsx";
import { Hero } from "./sections/Hero.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Skills } from "./sections/Skills.jsx";

export default function App() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Credentials />
      <Contact />
    </SiteLayout>
  );
}
