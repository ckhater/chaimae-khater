import { ArrowDown, Github, Linkedin } from "lucide-react";
import { LeetCodeIcon } from "@/app/components/icons";
import Reveal from "@/app/components/Reveal";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/ckhater" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/chaimae-khater" },
  { icon: LeetCodeIcon, label: "LeetCode", href: "https://leetcode.com/u/chaimaekhater/" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 text-center sm:px-6"
    >
      <Reveal delay={0}>
        <p className="mb-4 text-sm font-bold">Hi, my name is</p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          Chaimae Khater
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <h2 className="mt-4 max-w-2xl text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
          Software Engineer building modern web experiences.
        </h2>
      </Reveal>
      <Reveal delay={300}>
        <p className="mt-6 max-w-xl px-4 text-base leading-relaxed text-muted sm:text-lg">
          I&apos;m passionate about building responsive, accessible, and performant applications with React, Next.js, and TypeScript, while also exploring 
          low-level programming with C/C++ and object-oriented software development.
        </p>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-8 flex gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-primary hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={500}>
        <a
          href="#projects"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          View my work
          <ArrowDown className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}