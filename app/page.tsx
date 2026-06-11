import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CaseStudy />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
