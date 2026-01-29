import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  const { pathname } = request.nextUrl;
  if (acceptLanguage?.includes("es")) {
    return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
  } else {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|en|es|.*\\.svg$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$).*)",
  ],
};
