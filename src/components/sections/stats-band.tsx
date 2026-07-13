import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { stats } from "@/content/approach";

export function StatsBand() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink py-20 text-cream lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div className="container-x grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="flex flex-col items-center px-4 text-center lg:px-8"
          >
            <Counter
              value={s.value}
              className="font-display text-5xl font-semibold text-gold-soft lg:text-6xl"
            />
            <p className="mt-3 max-w-[14ch] text-xs uppercase tracking-[0.18em] text-cream/55">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
