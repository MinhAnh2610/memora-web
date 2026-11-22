import Image from "next/image";
import { Reveal } from "@/components/landing/reveal";

export function Close() {
  return (
    <section id="close" className="relative min-h-[80svh] scroll-mt-24 overflow-hidden">
      <Image
        src="/landing/frieren3.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_60%]"
      />
      <div className="relative z-10 flex min-h-[80svh] flex-col px-6 pt-28 pb-10">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center rounded-lg bg-neutral/80 px-8 py-10 text-center">
          <h2 className="text-h1">Your memories deserve a world.</h2>
          <p className="mt-4 max-w-md text-body">Start building something that feels like you.</p>
          <a href="#world" className="btn-primary mt-8">
            Create your world
          </a>
        </Reveal>
        <p className="mt-auto pt-16 text-center text-label text-primary">
          <span className="rounded-full bg-neutral/80 px-3 py-1">Memora · 2026</span>
        </p>
      </div>
    </section>
  );
}
