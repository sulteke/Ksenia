import { Marquee } from "@/components/motion/marquee";

const words = [
  "Calmer",
  "More rested",
  "Clearer",
  "Lighter",
  "More present",
  "Reconnected",
  "At home in yourself",
];

/** A slow-drifting band of felt outcomes — the emotional payoff, stated early. */
export function MarqueeStrip() {
  return (
    <section
      aria-label="How clients feel"
      className="border-y border-espresso/10 bg-cream/70 py-7"
    >
      <Marquee duration={40} gap="0px">
        {words.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 font-display text-2xl text-espresso/70 sm:text-3xl"
          >
            {w}
            <span className="text-lg text-gold/80">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
