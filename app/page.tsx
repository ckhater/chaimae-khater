import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Grainient from "@/app/components/Grainient";
import ScrollProgress from "@/app/components/ScrollProgress";
import Reveal from "@/app/components/Reveal";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />

      <div className="fixed inset-0 -z-10">
        <Grainient
          timeSpeed={0.4}
          contrast={1}
          grainAmount={0.04}

          color1="#0e1627"
          color2="#d8a694"
          color3="#a86a65"
        />
        <div className="absolute inset-0 bg-background/45 dark:bg-background/60" />
      </div>

      <div className="relative">
        <Navbar />
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
    </div>
  );
}
