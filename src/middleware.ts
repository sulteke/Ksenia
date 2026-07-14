import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";

function resolveLocale(req: NextRequest): string {
  // 1) explicit choice remembered in a cookie
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) return cookie;

  // 2) browser preference
  const accept = req.headers.get("accept-language") ?? "";
  const preferred = accept
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
  for (const code of preferred) {
    if ((locales as readonly string[]).includes(code)) return code;
  }

  // 3) default (Russian)
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = resolveLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  // Run on everything except Next internals, metadata routes and static files.
  matcher: [
    "/((?!_next/|api/|opengraph-image|icon.svg|robots.txt|sitemap.xml|manifest.webmanifest|.*\\..*).*)",
  ],
};
