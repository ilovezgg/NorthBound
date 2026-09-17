import { footer, siteConfig, nav } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-bg-dark py-10 text-cream">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-display text-base font-semibold uppercase tracking-wide text-cream">{siteConfig.name}</span>
          <span className="ml-3 text-body-sm text-cream/60">{siteConfig.city}</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-body-sm text-cream/70 transition-colors duration-200 hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <span className="text-body-sm text-cream/50">{footer.copyright}</span>
      </Container>
    </footer>
  );
}
