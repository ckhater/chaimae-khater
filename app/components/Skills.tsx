import { Code2, Database,Container,Boxes, BrainCircuit,} from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import Reveal from "@/app/components/Reveal";
import { title } from "process";

const skills = [
  { icon: Code2, title: "Programmming Languages", items: ["c","c++"," TypeScript","JavaScript","SQL","Bash","HTML","CSS"] },
  {icon: Database, title: "Databases", items: ["SQLite", "MariaDB", "PostgreSQL"] },
  {icon: Container, title:"DevOps and Cloud", items: ["Docker", "Docker Compose", "Nginix", "Linux Administration"]},
  {icon: Boxes, title: "Frameworks and Tools", items: ["Babylon.js", "Next.js","Node.js", "Express", "React", "TailwindCSS", "Socket.IO", "RabbitMQ",
"REST APIs", "Git"]},
  {icon: BrainCircuit, title: "Concepts", items:[ "OOP", "Containerization", "TCP/IP Networking", "Unix Systems"]},
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <Reveal key={skill.title} delay={(i % 3) * 120} className="h-full">
            <div className="editorial-card group h-full p-6">
              <div className="flex items-center justify-between">
                <skill.icon className="h-5 w-5 text-primary" />
              </div>

              <h4 className="mt-5 border-b border-foreground/10 pb-3 text-lg font-semibold">
                {skill.title}
              </h4>

              <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
                {skill.items.map((item, idx) => (
                  <li
                    key={item}
                    className="text-sm text-muted"
                  >
                    <span className="transition-colors group-hover:text-foreground">
                      {item}
                    </span>
                    {idx < skill.items.length - 1 && (
                      <span className="mx-2 text-foreground/20">/</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
