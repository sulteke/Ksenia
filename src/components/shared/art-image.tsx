import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ArtVariant, Media } from "@/content/types";

/**
 * Art-directed image slot.
 *
 * When `src` (real client photography) is present it renders an optimised
 * next/image. Until then it renders a warm, layered gradient "photograph" with
 * optional landscape motif and film grain — so the site looks intentional and
 * premium out of the box, and real images drop in with zero layout change.
 */

type Recipe = { base: string; glow: string };

const RECIPES: Record<ArtVariant, Recipe> = {
  dawn: {
    base: "linear-gradient(165deg, #F6EAD3 0%, #EFD9B4 46%, #E3C089 100%)",
    glow: "radial-gradient(60% 55% at 50% 12%, rgba(255,247,228,0.95), rgba(255,247,228,0) 70%)",
  },
  dusk: {
    base: "linear-gradient(170deg, #EFD3AC 0%, #D6A874 45%, #8E6C4C 100%)",
    glow: "radial-gradient(70% 60% at 50% 78%, rgba(255,224,178,0.85), rgba(255,224,178,0) 72%)",
  },
  sand: {
    base: "linear-gradient(160deg, #F4EAD6 0%, #E4D2B2 55%, #D2BB92 100%)",
    glow: "radial-gradient(60% 50% at 26% 22%, rgba(255,250,238,0.85), rgba(255,250,238,0) 70%)",
  },
  olive: {
    base: "linear-gradient(165deg, #EAE7CF 0%, #C4C79C 52%, #8E9068 100%)",
    glow: "radial-gradient(55% 50% at 72% 26%, rgba(247,247,224,0.8), rgba(247,247,224,0) 70%)",
  },
  gold: {
    base: "linear-gradient(160deg, #EEDBB5 0%, #D9B67E 52%, #B88E52 100%)",
    glow: "radial-gradient(58% 52% at 34% 20%, rgba(255,246,224,0.9), rgba(255,246,224,0) 72%)",
  },
  linen: {
    base: "linear-gradient(160deg, #F8F1E4 0%, #EFE3CD 60%, #E3D3B7 100%)",
    glow: "radial-gradient(60% 50% at 68% 24%, rgba(255,253,246,0.85), rgba(255,253,246,0) 72%)",
  },
  clay: {
    base: "linear-gradient(165deg, #EBC9A6 0%, #C79468 50%, #8A6244 100%)",
    glow: "radial-gradient(60% 55% at 30% 20%, rgba(255,237,214,0.82), rgba(255,237,214,0) 72%)",
  },
  mist: {
    base: "linear-gradient(165deg, #EAE9E1 0%, #D3D6CC 55%, #BFC2B4 100%)",
    glow: "radial-gradient(62% 52% at 50% 18%, rgba(252,251,246,0.9), rgba(252,251,246,0) 72%)",
  },
};

interface ArtImageProps extends Partial<Media> {
  variant: ArtVariant;
  className?: string;
  /** Enables a slow scale on hover of the nearest `.group`. */
  zoom?: boolean;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
  children?: React.ReactNode;
}

export function ArtImage({
  src,
  variant,
  alt = "",
  motif = "none",
  className,
  zoom = false,
  priority,
  sizes = "100vw",
  rounded = "rounded-[inherit]",
  children,
}: ArtImageProps) {
  const recipe = RECIPES[variant];

  return (
    <div
      className={cn(
        "grain relative isolate overflow-hidden bg-sand",
        rounded,
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 h-full w-full transition-transform [transition-duration:1400ms] ease-luxe will-change-transform",
          zoom && "group-hover:scale-[1.06]",
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0" style={{ background: recipe.base }} />
            <div className="absolute inset-0" style={{ background: recipe.glow }} />
            {motif === "sun" && (
              <div
                aria-hidden
                className="absolute left-1/2 top-[16%] h-40 w-40 -translate-x-1/2 rounded-full blur-2xl sm:h-56 sm:w-56"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,249,232,0.98) 0%, rgba(255,236,196,0.7) 45%, rgba(255,236,196,0) 72%)",
                }}
              />
            )}
            {motif === "horizon" && (
              <>
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-[34%] h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,248,232,0.7), transparent)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[34%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(90,69,48,0) 0%, rgba(90,69,48,0.18) 100%)",
                  }}
                />
              </>
            )}
          </>
        )}
      </div>
      {/* Screen-reader alt for the decorative placeholder case. */}
      {!src && alt ? <span className="sr-only">{alt}</span> : null}
      {children}
    </div>
  );
}
