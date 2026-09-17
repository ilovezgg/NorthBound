import Image from "next/image";
import { trips } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Trips() {
  return (
    <section id="trips" className="bg-surface py-section-y">
      <Container>
        <Reveal>
          <span className="text-label font-medium uppercase tracking-wide text-accent">Маршруты</span>
          <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold uppercase leading-[1.02] tracking-tight text-ink">
            Ближайшие экспедиции
          </h2>
        </Reveal>
      </Container>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3">
        {trips.map((trip, i) => (
          <Reveal key={trip.title} delay={i * 0.08}>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <div className="border-t border-border px-6 py-5 md:px-12">
              <span className="text-label font-medium uppercase tracking-wide text-accent">{trip.tag}</span>
              <h3 className="mt-2 text-h3 font-medium leading-tight text-ink">{trip.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
