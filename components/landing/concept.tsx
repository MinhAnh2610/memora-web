import Image from "next/image";
import { Reveal } from "@/components/landing/reveal";

export function Concept() {
  return (
    <section id="story" className="scroll-mt-24 bg-neutral px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-label text-secondary">THE IDEA</p>
          <h2 className="mt-3 text-h1">Memories aren&apos;t just dates.</h2>
          <p className="mt-4 max-w-md text-body">
            They are places, objects, people, feelings, and moments that deserve to live somewhere.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-7 md:-mr-6">
          <Scene src="/landing/field.jpg" alt="A girl standing in a flower field under a bright sky" />
        </Reveal>
        <Reveal className="md:order-3 md:col-span-7 md:-ml-6" delay={0.12}>
          <Scene src="/landing/pavilion.jpg" alt="A girl on a pavilion looking over pink trees and the sea" />
        </Reveal>
        <Reveal className="md:order-4 md:col-span-5">
          <p className="text-label text-secondary">THE PLACE</p>
          <h2 className="mt-3 text-h1">They deserve a world.</h2>
          <p className="mt-4 max-w-md text-body">
            Memora turns your personal collection of moments into a space that reflects how you remember them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Scene({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-80 overflow-hidden rounded-lg shadow-[0_22px_50px_-28px_rgba(26,11,60,0.45)] md:h-[28rem]">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
    </div>
  );
}
