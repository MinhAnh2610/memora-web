import { Close } from "@/components/landing/close";
import { Concept } from "@/components/landing/concept";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { Scrapbook } from "@/components/landing/scrapbook";
import { Share } from "@/components/landing/share";
import { World } from "@/components/landing/world";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <World />
        <Scrapbook />
        <Share />
        <Close />
      </main>
    </>
  );
}
