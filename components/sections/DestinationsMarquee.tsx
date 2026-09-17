import { destinations } from "@/lib/content";
import { Marquee } from "@/components/ui/Marquee";

export function DestinationsMarquee() {
  return (
    <section className="border-b border-border bg-surface py-6">
      <Marquee speed={26}>
        {destinations.map((name) => (
          <span key={name} className="flex items-center gap-12 text-body-sm font-medium uppercase tracking-wide text-ink-secondary">
            {name}
            <span className="text-ink-muted">·</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
