export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] select-none text-[7rem] font-black leading-none text-foreground/5 sm:text-[10rem]"
      >
        {title}
      </span>
      <h3 className="relative text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h3>
      {subtitle && (
        <p className="relative mt-3 text-muted">{subtitle}</p>
      )}
    </div>
  );
}
