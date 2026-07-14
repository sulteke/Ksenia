"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SunMark } from "@/components/shared/logo";
import { getUi } from "@/content/ui";
import { defaultLocale, isLocale, localizedPath } from "@/i18n/config";

export default function NotFound() {
  const pathname = usePathname();
  const seg = pathname.split("/").filter(Boolean)[0];
  const locale = isLocale(seg) ? seg : defaultLocale;
  const ui = getUi(locale).notFound;

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
        <h1 className="mt-4 font-display text-3xl text-ink">{ui.title}</h1>
        <p className="mt-4 max-w-md text-espresso/70">{ui.body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href={localizedPath(locale, "/")}>{ui.home}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={localizedPath(locale, "/#contact")}>{ui.contact}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
