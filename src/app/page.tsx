import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import LoopCode from "@/components/LoopCode";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import LearningFocus from "@/components/LearningFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <LoopCode />
        <Projects />
        <Experience />
        <Education />
        <LearningFocus />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
