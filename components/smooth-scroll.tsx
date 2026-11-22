"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const page = reduce ? (
    children
  ) : (
    <ReactLenis root options={{ anchors: true, lerp: 0.08, autoRaf: true }}>
      {children}
    </ReactLenis>
  );

  return <MotionConfig reducedMotion="user">{page}</MotionConfig>;
}
