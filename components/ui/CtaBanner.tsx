import Link from "next/link";
import { PrimaryButton } from "./Button";
import Container from "./Container";

export default function CtaBanner({
  headline,
  body,
  primary = { href: "/kontakt", label: "Kostenlose Erstberatung anfragen" },
  secondary,
}: {
  headline: string;
  body: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-t-4 border-accent bg-ink py-16 text-white md:py-20">
      <Container className="max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{headline}</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/80">{body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href={primary.href}>{primary.label}</PrimaryButton>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-sm border-2 border-white px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
