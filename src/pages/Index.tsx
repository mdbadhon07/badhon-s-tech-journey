import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
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
        <Projects />
        <Skills />
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
