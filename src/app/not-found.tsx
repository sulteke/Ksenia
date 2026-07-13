import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SunMark } from "@/components/shared/logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 0%, rgba(230,199,152,0.4), rgba(230,199,152,0) 60%)",
        }}
      />
      <div className="container-x flex flex-col items-center text-center">
        <SunMark className="h-10 w-10" />
        <p className="mt-8 font-display text-[6rem] leading-none text-ink sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-ink">
          This path has drifted off the map.
        </h1>
        <p className="mt-4 max-w-md text-espresso/70">
          The page you were looking for isn’t here — but every good journey has
          a wrong turn or two. Let’s guide you back.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">Return home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
