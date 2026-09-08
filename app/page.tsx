import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import ScrollProgress from "@/app/components/ScrollProgress";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgress />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      <footer className="border-t border-foreground/10 py-8 text-center text-sm text-muted">
            <p>
              Built with love and care{" "}
              <span className="inline-block text-primary">♥</span>
            </p>
          </footer>
      </div>
  );
}
