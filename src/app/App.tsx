import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Certificates } from "./components/Certificates";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      
      
      <Contact />
      <Footer />
    </div>
  );
}