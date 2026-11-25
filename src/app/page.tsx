import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Products } from "@/components/sections/products";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Products />
        <HowWeWork />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
