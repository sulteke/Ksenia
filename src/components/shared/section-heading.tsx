import { Reveal } from "@/components/motion/reveal";
import { WordReveal } from "@/components/motion/text-reveal";
import { cn } from "@/lib/utils";

/** Reusable eyebrow + serif title + lede block with reveal animation. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  titleClassName,
  id,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "flex flex-col",
        align === "center" && "mx-auto max-w-3xl items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <h2
        className={cn(
          "mt-5 text-balance text-display-lg text-ink",
          titleClassName,
        )}
      >
        <WordReveal text={title} />
      </h2>
      {lede && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed text-espresso/70",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
