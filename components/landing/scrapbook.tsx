import Image from "next/image";
import { Reveal } from "@/components/landing/reveal";

const pieces = [
  {
    title: "A note",
    body: "Don't forget the train after dusk.",
    className: "md:absolute md:-top-10 md:-left-28 md:w-52 md:-rotate-6",
  },
  {
    title: "August 14",
    body: "The day the light stayed.",
    className: "md:absolute md:-top-8 md:-right-24 md:w-44 md:rotate-3",
  },
  {
    title: "The station",
    body: "Platform two, last carriage.",
    className: "md:absolute md:-bottom-8 md:-left-20 md:w-48 md:rotate-2",
  },
];

export function Scrapbook() {
  return (
    <section id="memories" className="scroll-mt-24 bg-neutral px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-label text-secondary">WHAT A MEMORY HOLDS</p>
          <h2 className="mt-3 max-w-xl text-h1">Every object has a story.</h2>
        </Reveal>
        <div className="relative mx-auto mt-16 flex max-w-md flex-col gap-4 md:my-24 md:block">
          <Reveal className="z-10 w-full max-w-md">
            <div className="rounded-lg bg-white p-4 shadow-[0_22px_50px_-28px_rgba(26,11,60,0.55)]">
              <div className="relative h-80 overflow-hidden rounded-md">
                <Image
                  src="/landing/blossoms.jpg"
                  alt="Two girls walking under cherry blossom trees"
                  fill
                  sizes="(min-width: 768px) 28rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          {pieces.map((piece) => (
            <article key={piece.title} className={`card ${piece.className}`}>
              <h3 className="font-display text-2xl">{piece.title}</h3>
              <p className="mt-2 text-body">{piece.body}</p>
            </article>
          ))}
          <article className="card md:absolute md:-right-20 md:-bottom-6 md:w-52">
            <h3 className="font-display text-2xl">Evening</h3>
            <div className="mt-4 flex h-10 items-end gap-1" aria-hidden>
              {[45, 80, 55, 100, 70, 40].map((height, index) => (
                <span
                  key={height}
                  className="eq w-1.5 rounded-full bg-secondary"
                  style={{ height: `${height}%`, animationDelay: `${index * 0.12}s` }}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
