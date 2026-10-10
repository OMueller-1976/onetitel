export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">{eyebrow}</p>
      )}
      <h2
        className={`font-serif text-3xl font-bold leading-tight md:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/80" : "text-graphite"}`}>
          {lede}
        </p>
      )}
    </div>
  );
}
