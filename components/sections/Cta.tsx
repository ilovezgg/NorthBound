import { cta, siteConfig } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Cta() {
  return (
    <section id="contacts" className="bg-moss py-section-y">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl font-display text-h2 font-semibold uppercase leading-[1.02] tracking-tight text-moss-ink">
            {cta.title}
          </h2>
          <p className="mt-5 max-w-md text-body text-moss-ink/80">{cta.subtitle}</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 flex flex-col gap-6 border-t border-moss-ink/20 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex w-fit items-center rounded-full bg-moss-ink px-8 py-4 text-body font-medium text-moss transition-colors duration-200 hover:bg-cream"
          >
            {cta.buttonLabel}
          </a>
          <div className="text-body-sm text-moss-ink/80">
            <a href={`mailto:${siteConfig.email}`} className="block hover:text-moss-ink">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="mt-1 block hover:text-moss-ink">
              {siteConfig.phone}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
