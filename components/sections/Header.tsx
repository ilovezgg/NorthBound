import { nav, siteConfig } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="bg-bg py-5">
      <Container className="flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-body font-semibold uppercase tracking-wide text-ink"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-pillbg px-2 py-2 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-body-sm text-ink-secondary transition-colors duration-200 hover:bg-surface hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="rounded-full bg-accent px-5 py-2.5 text-body-sm font-medium text-bg transition-colors duration-200 hover:bg-ink hover:text-bg"
        >
          Записаться
        </a>
      </Container>
    </header>
  );
}
