"use client";

import * as React from "react";
import { Github, Linkedin, Send } from "lucide-react";
import { LeetCodeIcon } from "@/app/components/icons";
import SectionHeading from "@/app/components/SectionHeading";
import Reveal from "@/app/components/Reveal";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com",
    href: "https://github.com/ckhater",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com",
    href: "https://linkedin.com/in/chaimae-khater",
  },
  {
    icon: LeetCodeIcon,
    label: "LeetCode",
    value: "leetcode.com",
    href: "https://leetcode.com/u/chaimaekhater/",
  },
];

const inputClass =
  "w-full rounded-md border border-foreground/15 bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/15";

export default function Contact() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setTimeout(() => {
      window.location.href = `mailto:chaymaekhater13@gmail.com?subject=${subject}&body=${body}`;
    }, 0);
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28 sm:px-8"
    >
      <Reveal>
        <SectionHeading
          title="Contact"
          subtitle="I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open."
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-10 text-left lg:grid-cols-2">
        {/* Social links */}
        <div className="flex flex-col justify-center gap-4">
          <Reveal delay={100}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Find me here
            </p>
          </Reveal>
          {contactLinks.map((link, i) => (
            <Reveal key={link.label} delay={180 + i * 120}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="editorial-card group flex items-center gap-4 px-5 py-4"
              >
                <link.icon className="h-5 w-5 text-primary" />
                <span className="flex-1">
                  <span className="block text-sm font-semibold transition-colors group-hover:text-primary">
                    {link.label}
                  </span>
                  <span className="block text-sm text-muted">
                    {link.value}
                  </span>
                </span>
                <span className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Message form */}
        <Reveal delay={200}>
          <div className="editorial-card p-8">
            <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Send a message
              </p>
            </div>
          <form onSubmit={handleSubmit} className="mt-7 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me something..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <Send className="h-4 w-4" />
              Send message
            </button>

            {sent && (
              <p className="text-center text-sm font-medium text-primary">
                Opening your email... thanks for reaching out! 🎉
              </p>
            )}
          </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
