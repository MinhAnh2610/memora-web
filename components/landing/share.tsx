"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/landing/reveal";

export function Share() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const left = useTransform(scrollYProgress, [0, 1], [-56, 0]);
  const right = useTransform(scrollYProgress, [0, 1], [56, 0]);

  return (
    <section id="share" ref={ref} className="scroll-mt-24 overflow-x-clip bg-surface px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-label text-secondary">TOGETHER</p>
          <h2 className="mt-3 text-h1">Some memories are better when shared.</h2>
          <p className="mt-4 max-w-md text-body">
            Invite someone into your world. Let them find the places, photographs, and stories that mean something to you.
          </p>
        </Reveal>
        <div className="relative grid grid-cols-2 gap-4">
          <motion.div style={ready && !reduce ? { x: left } : undefined} className="relative h-72 overflow-hidden rounded-lg">
            <Image src="/landing/field.jpg" alt="" fill sizes="40vw" className="object-cover" />
            <p className="absolute inset-x-3 bottom-3 rounded-md bg-neutral/85 px-3 py-2 font-display text-2xl text-primary">
              Your world
            </p>
          </motion.div>
          <motion.div style={ready && !reduce ? { x: right } : undefined} className="relative h-72 overflow-hidden rounded-lg">
            <Image src="/landing/shore.jpg" alt="" fill sizes="40vw" className="object-cover" />
            <p className="absolute inset-x-3 bottom-3 rounded-md bg-neutral/85 px-3 py-2 font-display text-2xl text-primary">
              Their world
            </p>
          </motion.div>
          <div className="pointer-events-none absolute top-1/2 right-[18%] left-[18%] h-1 -translate-y-1/2 rounded-full bg-neutral" />
        </div>
      </div>
    </section>
  );
}
