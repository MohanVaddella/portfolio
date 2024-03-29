import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import Experience from "../Experience";   
import Projects from "../Projects";
import MySkills from "../MySkills";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      <MySkills />
      <ContactMe />
      <Footer />
    </>
  );
}
