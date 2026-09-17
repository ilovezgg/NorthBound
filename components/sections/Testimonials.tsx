import { testimonials } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section id="reviews" className="border-b border-border py-section-y">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.08} className="border-t border-border pt-6">
            <p className="text-h3 font-medium leading-snug text-ink">«{t.quote}»</p>
            <div className="mt-6">
              <span className="block text-body-sm font-medium text-ink">{t.author}</span>
              <span className="block text-body-sm text-accent">{t.role}</span>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
