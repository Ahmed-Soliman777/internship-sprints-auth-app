import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const token = request.cookies.get("token");
  const { pathname } = request.nextUrl;
  const authRoute =
    pathname === "/" ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/reset-password");
  const homePageRoute = pathname.startsWith("/home");
  if (authRoute && token)
    return NextResponse.redirect(new URL("/home", request.url));
  if (homePageRoute && !token)
    return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/reset-password", "/register", "/home"],
};
