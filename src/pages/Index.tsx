import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Stats from "@/components/portfolio/Stats";
import Resume from "@/components/portfolio/Resume";
import FutureGoals from "@/components/portfolio/FutureGoals";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Stats />
        <Resume />
        <FutureGoals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
