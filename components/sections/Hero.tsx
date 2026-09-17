import Image from "next/image";
import { hero } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function splitTitle(title: string): [string, string] {
  const splitIndex = title.indexOf(". ");
  if (splitIndex === -1) return [title, ""];
  return [title.slice(0, splitIndex + 1), title.slice(splitIndex + 2)];
}

export function Hero() {
  const [titleFirst, titleSecond] = splitTitle(hero.title);

  return (
    <section id="top" className="bg-bg">
      <Container className="pt-10 lg:pt-16">
        <Reveal>
          <span className="inline-block text-label font-medium uppercase tracking-wide text-accent">
            {hero.eyebrow}
          </span>
          <h1 className="mt-6 font-display uppercase leading-[1.02] tracking-tight text-ink">
            <span className="grid grid-cols-1 gap-y-1 text-display lg:grid-cols-2 lg:gap-x-8">
              <span>{titleFirst}</span>
              {titleSecond && <span className="lg:text-right">{titleSecond}</span>}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-body text-ink-secondary">{hero.subtitle}</p>
          <a
            href="#trips"
            className="inline-flex w-fit shrink-0 items-center rounded-full bg-accent px-8 py-4 text-body font-medium text-bg transition-colors duration-200 hover:bg-ink hover:text-bg"
          >
            {hero.cta}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-8">
          {hero.meta.map((m, i) => (
            <div key={m.label} className={i > 0 ? "border-l border-border pl-4 sm:pl-8" : ""}>
              <span className="block font-display text-h2 font-semibold text-ink">{m.value}</span>
              <span className="mt-1 block text-body-sm text-ink-secondary">{m.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>

      <Reveal delay={0.15} className="mt-12 lg:mt-16">
        <div className="relative aspect-[16/7] w-full overflow-hidden bg-surface">
          <Image
            src={hero.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
