import { NextResponse, NextRequest } from "next/server";
import { i18n } from "./utils/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      "/manifest.json",
      "/favicon.ico",
      "/about.jpeg",
      "/bedrock/m6-player.jpeg",
      "/bedrock/m6-player-page.jpeg",
      "/bedrock/rtlnl-player.jpeg",
      "/bedrock/rtlnl-player-page.jpeg",
      "/bedrock/rtlhu-player.jpeg",
      "/bedrock/rtlhu-player-page.jpeg",
      "/bedrock/rtlde-player.jpeg",
      "/bedrock/rtlde-player-page.jpeg",
      "/skewer/graph.png",
      "/skewer/media_lib.png",
      "/skewer/key_value.png",
      "/skewer/preview.png",
      "/skewer/external-preview.png",
      "/skewer/preview.png",
      "/skewer/external-preview.png",
      "/skewer/demo.mp4",
      "/user_manager/user.png",
      "/user_manager/profile.png",
      "/user_manager/create.png",
      "/spotify-clone/1.png",
      "/spotify-clone/2.png",
      "/spotify-clone/3.png",
      "/spotify-clone/4.png",
      "/spotify-clone/5.png",
      "/spotify-clone/6.png",
      "/miro-clone/1.png",
      "/miro-clone/2.png",
      "/miro-clone/3.png",
      "/miro-clone/4.png",
      "/miro-clone/5.png",
    ].includes(pathname)
  )
    return;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
