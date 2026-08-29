import { ArrowUpRight, Coffee, GitBranch, HeartHandshake, Terminal, Layers, Rocket, Tag } from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import Reveal from "@/app/components/Reveal";

const highlights = [
  { icon: Coffee, value: "3+", label: "Years coding" },
  { icon: Layers, value: "10+", label: "Projects built" },
  {icon: Terminal, value: "CTFs", label: "Security challenges"},
];

const path = [
  {
    year: "2020",
    title: "Baccalaureate - Physical Sciences",
    text: "The beginning of my higher-education journey, built on curiosity, science, and problem-solving.",
  },
  {
    year: "2023",
    title: "Bachelor - Physical Sciences",
    text: "Developed a strong analytical mindset through physics, mathematics, and scientific problem-solving.",
  },
  {
    year: "2026",
    title: "Junior Developper",
    text: "Transitioned into software development at 1337, turning my problem-solving background into practical skills through projects, collaboration, and hands-on coding.",
  },
];

const softSkills = [
  "Problem solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Patience & Persistence",
  "Critical Thinking",
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          title="About"
          subtitle="Software engineer who cares about craft."
        />
      </Reveal>

      <div className="relative space-y-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
          <Reveal delay={100} className="lg:col-span-3">
            <div>
              <p className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-6 py-3 text-base font-semibold uppercase tracking-widest text-primary">
                <HeartHandshake className="h-5 w-5" />
                Who I am
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              I'm a software engineer with a strong interest in both modern web development and low-level programming. I was certified as a junior developer at
              <strong className="text-foreground"> 1337 School</strong>, where I completed an intensive, project-based, peer-to-peer learning program.
              <br/>During my training, I worked on challenging projects covering<strong> software development</strong>,<strong> algorithms</strong>,
              <strong> C/C++</strong>,<strong> system programming</strong>, and <strong> object-oriented concepts</strong>. 
              This experience strengthened my problem-solving skills and taught me how to approach complex technical challenges from different perspectives.
              <br/>Beyond development, I enjoy continuously learning and challenging myself through <strong>Capture The Flag (CTF) competitions </strong>and personal projects. 
              Working in a peer-to-peer environment also taught me the importance of<strong> communication, collaboration, knowledge sharing, and independent problem-solving</strong>.
              <br/>Today, I'm particularly interested in building <strong> clean, performant web applications </strong>while continuing to deepen my understanding 
              of<strong> software architecture,low-level programming, and how systems work under the hood</strong>.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Let&apos;s work together
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-3 gap-4 lg:col-span-2">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={200 + i * 120} className="h-full">
                <div className="editorial-card group h-full p-4 text-center">
                  <h.icon className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 text-2xl font-extrabold text-foreground">
                    {h.value}
                  </p>
                  <p className="text-xs font-medium text-muted">{h.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* My Path timeline — full width band */}
        <Reveal delay={150}>
          <div className="editorial-card p-8 sm:p-12">
            <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
              <h4 className="flex items-center gap-3 text-lg font-bold">
                <GitBranch className="h-5 w-5 text-primary" />
                My Path
              </h4>
            </div>
            <ol className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {path.map((step, i) => (
                <li key={step.title} className="group relative">
                  <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary">
                    {step.year}
                  </span>
                  <h5 className="text-base font-semibold transition-colors group-hover:text-primary">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Soft skills */}
        <Reveal delay={200}>
          <div className="editorial-card p-8">
            <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
              <h4 className="flex items-center gap-3 text-lg font-bold">
                <Rocket className="h-5 w-5 text-primary" />
                Soft Skills
              </h4>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                >
                  <Tag className="h-3.5 w-3.5 text-primary/60 transition-colors group-hover:text-primary" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
