import Image from "next/image";
import { process, about } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" className="bg-bg-dark text-cream">
      <Container className="grid grid-cols-1 gap-14 py-section-y lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="text-label font-medium uppercase tracking-wide text-accent">Как это устроено</span>
            <h2 className="mt-4 font-display text-h2 font-semibold uppercase leading-[1.02] tracking-tight text-cream">
              От брони до маршрута
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06} className="border-t border-cream/20 pt-5">
                <span className="text-body-sm text-cream/50">{step.n}</span>
                <h3 className="mt-3 text-body font-medium leading-tight text-cream">{step.title}</h3>
                <p className="mt-3 text-body-sm text-cream/70">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="relative flex flex-col justify-end">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream/10">
            <Image
              src={about.image}
              alt="Лагерь команды NORTHBOUND в горах"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <p className="mt-6 max-w-md text-h3 font-medium leading-snug text-cream">
            «{about.quote}»
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-cream/20 pt-5">
            {about.stats.map((s) => (
              <div key={s.label}>
                <span className="block font-display text-h3 font-semibold text-cream">{s.value}</span>
                <span className="mt-1 block text-body-sm text-cream/70">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
