import { features } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Features() {
  return (
    <section className="border-b border-border py-section-y">
      <Container>
        <Reveal>
          <span className="text-label font-medium uppercase tracking-wide text-accent">Почему с нами</span>
          <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold uppercase leading-[1.02] tracking-tight text-ink">
            Готовим маршрут так, будто идём с вами сами
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.06} className="min-w-0 border-t border-border pt-6">
              <span className="text-body-sm text-ink-muted">{f.n}</span>
              <h3 className="mt-3 min-w-0 break-words text-h3 font-medium leading-tight text-ink">{f.title}</h3>
              <p className="mt-3 text-body-sm text-ink-secondary">{f.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
