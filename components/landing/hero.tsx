"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const polaroids = [
  {
    src: "/landing/pavilion.jpg",
    caption: "The pavilion",
    className: "left-[4%] bottom-[8%] -rotate-6",
  },
  {
    src: "/landing/field.jpg",
    caption: "Open sky",
    className: "right-[6%] top-[18%] rotate-3",
  },
] as const;

export function Hero() {
  const lead = {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease },
  };
  const withLead = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay: 0.1, ease },
  };

  return (
    <section id="hero" className="relative min-h-svh overflow-hidden">
      <Image
        src="/landing/frieren4.jpeg"
        alt="A figure seated on a cliff above a castle in the clouds"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[30%_58%] md:object-[center_42%]"
      />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-4xl flex-col items-center justify-center px-6 pt-24 pb-28 text-center">
        <motion.div {...lead} className="rounded-lg bg-neutral/80 px-6 py-8">
          <p className="font-display text-display text-primary">MEMORA</p>
        </motion.div>
        <motion.div {...withLead} className="mt-4 flex flex-col items-center rounded-lg bg-neutral/75 px-6 py-6">
          <h1 className="max-w-xl text-h1">A diary you can walk into.</h1>
          <p className="mt-4 max-w-md text-primary/80">
            Turn the moments you cherish into a world you can explore, revisit, and share.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#close" className="btn-primary">
              Create your world
            </a>
            <a href="#world" className="btn-outline">
              Explore a demo world
            </a>
          </div>
        </motion.div>
        <div className="mt-8 md:hidden">
          <Polaroid src={polaroids[0].src} caption={polaroids[0].caption} />
        </div>
      </div>

      {polaroids.map((card) => (
        <div key={card.src} className={`float pointer-events-none absolute hidden md:block ${card.className}`}>
          <Polaroid src={card.src} caption={card.caption} />
        </div>
      ))}

      <p className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <span className="cue inline-block rounded-full bg-neutral/80 px-3 py-1 text-label text-secondary">Scroll</span>
      </p>
    </section>
  );
}

function Polaroid({ src, caption }: { src: string; caption: string }) {
  return (
    <div className="w-28 rounded-md bg-white/90 p-2 shadow-[0_16px_40px_-24px_rgba(26,11,60,0.7)]">
      <div className="relative h-16 overflow-hidden rounded-sm">
        <Image src={src} alt="" fill sizes="112px" className="object-cover" />
      </div>
      <p className="mt-2 text-center text-label text-secondary">{caption}</p>
    </div>
  );
}
