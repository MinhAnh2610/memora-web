"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/landing/reveal";
import { memories, type MemoryId } from "@/lib/memories";

const ease = [0.22, 1, 0.36, 1] as const;

export function World() {
  const [open, setOpen] = useState<MemoryId | null>(null);
  const memory = memories.find((item) => item.id === open);

  return (
    <section id="world" className="scroll-mt-24 bg-surface px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <Reveal>
          <p className="text-label text-secondary">A LITTLE WORLD</p>
          <h2 className="mt-3 text-h1">A diary you can walk into.</h2>
          <p className="mt-4 max-w-xl text-body">Choose an object. Each one keeps a single moment.</p>
          <div className="relative mt-8">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/landing/village.jpg"
                alt="A cottage village on a hill, with floating islands in the sky"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            {memories.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`press absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-label text-primary shadow-md ring-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  open === item.id ? "ring-primary" : "ring-secondary/40"
                }`}
                style={{ left: item.left, top: item.top }}
                aria-pressed={open === item.id}
                onClick={() => setOpen(item.id)}
              >
                <span className="sr-only">{item.label}</span>
                <span aria-hidden>{index + 1}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <div aria-live="polite">
          <AnimatePresence mode="wait">
            {memory ? (
              <motion.article
                key={memory.id}
                className="card origin-left"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2, ease }}
              >
                <p className="text-label text-secondary">{memory.date}</p>
                <h3 className="mt-2 font-display text-3xl">{memory.title}</h3>
                <p className="mt-3 text-body">{memory.body}</p>
                <button
                  type="button"
                  className="press mt-4 text-label text-secondary underline-offset-4 hover:underline"
                  onClick={() => setOpen(null)}
                >
                  Close
                </button>
              </motion.article>
            ) : (
              <motion.p
                key="hint"
                className="text-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                The cottage, the house, the path, the island.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

