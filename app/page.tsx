import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { DestinationsMarquee } from "@/components/sections/DestinationsMarquee";
import { Features } from "@/components/sections/Features";
import { Trips } from "@/components/sections/Trips";
import { Gear } from "@/components/sections/Gear";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <DestinationsMarquee />
        <Features />
        <Trips />
        <Gear />
        <Process />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
