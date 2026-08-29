"use client";

import * as React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  blur = 10,
  once = true,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = React.useState(true);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(false);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHidden(false);
            if (once) io.disconnect();
          } else if (!once) {
            setHidden(true);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition:
          "opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), filter 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: hidden ? "0ms" : `${delay}ms`,
        opacity: hidden ? 0 : 1,
        filter: hidden ? `blur(${blur}px)` : "blur(0px)",
        transform: hidden ? `translateY(${y}px)` : "translateY(0)",
        willChange: "opacity, filter, transform",
      }}
    >
      {children}
    </div>
  );
}