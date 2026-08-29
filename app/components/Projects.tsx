import { Github } from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import Reveal from "@/app/components/Reveal";

const projects = [
  {
    title: "Galactik Pingpong",
  description:
"Team-built multiplayer 3D Pong platform. Developed the 3D game experience with Babylon.js, implemented real-time gameplay with Socket.IO, and integrated RabbitMQ for asynchronous score communication.",  tech: ["TypeScript", "Babylon.js", "Socket.IO", "Node.js", "RabbitMQ", "Tailwind CSS"],
    repo: "https://github.com/ckhater/ft_transcendence",
  },
  {
    title: "Webserv",
  description:
    "Collaborative HTTP/1.0 server built in C++. Contributed to configuration handling, GET and DELETE methods, and CGI integration for GET and POST requests.",
  tech: ["C++", "HTTP/1.0", "GET", "DELETE", "CGI", "Configuration"],
    repo: "https://github.com/ckhater/Webserv",
  },
    {
    title: "Inception",
    description:
      "Built a containerized web infrastructure using Docker Compose, NGINX, WordPress, and MariaDB, with isolated services and persistent volumes.",
    tech: ["Docker", "Docker Compose", "NGINX", "WordPress", "MariaDB", "Linux"],
    repo: "https://github.com/ckhater/Inception",
  },
  {
    title: "CPP Modules 00–09",
    description:
     "Completed C++ Modules 00–09, progressing from C++ fundamentals to object-oriented programming, inheritance, polymorphism, templates, exceptions, and the STL.",
    tech: ["C++", "OOP", "STL", "Diamond Inheritance", "Templates"],
    repo: "https://github.com/ckhater/CPP_modules",
  },
    {
    title: "Philosophers",
    description:
       "Solved the Dining Philosophers problem in C using multithreading and multiprocessing, with mutexes and semaphores for synchronization and resource management.",
    tech: ["C", "Threads", "Processes", "Mutexes", "Semaphores", "Concurrency"],
    repo: "https://github.com",
  },
  {
    title: "CUB3D",
    description:
      "A 3D maze game built in C using raycasting, transforming a 2D map into a first-person 3D environment.",
    tech: ["C", "Raycasting", "MiniLibX", "Graphics", "Game Development"],
    repo: "https://github.com/ckhater/CUB3D",
  },
  {
    title: "Pipex",
    description:
      "A Unix pipeline implementation in C, handling process creation, pipes, file descriptors, and command execution.",
    tech: ["C", "Unix", "Pipes", "Processes", "File Descriptors"],
    repo: "https://github.com/ckhater/pipex",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading title="Projects" subtitle="A selection of things I&apos;ve built" />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 120} className="h-full">
            <article className="editorial-card group flex h-full flex-col p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold transition-colors group-hover:text-primary">
                {project.title}
              </h4>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} repository`}
                className="text-muted transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            <span className="mt-3 block h-px w-full bg-foreground/10 transition-colors group-hover:bg-primary/40" />

            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 border-t border-foreground/10 pt-4">
              {project.tech.map((tech, idx) => (
                <li key={tech} className="text-xs font-medium text-primary">
                  {tech}
                  {idx < project.tech.length - 1 && (
                    <span className="mx-2 text-foreground">/</span>
                  )}
                </li>
              ))}
            </ul>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
