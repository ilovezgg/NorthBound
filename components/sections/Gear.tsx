import Image from "next/image";
import { gear } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Gear() {
  return (
    <section id="gear" className="border-b border-border py-section-y">
      <Container>
        <Reveal>
          <span className="text-label font-medium uppercase tracking-wide text-accent">Снаряжение напрокат</span>
          <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold uppercase leading-[1.02] tracking-tight text-ink">
            Не тащите свой скарб через полстраны
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {gear.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-surface">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <h3 className="text-body font-medium leading-tight text-ink">{item.title}</h3>
                <span className="shrink-0 text-body-sm text-accent">{item.price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
