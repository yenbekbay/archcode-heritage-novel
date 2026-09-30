import { WEBSITE_URL } from "#config/website.ts";
import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  if (request.headers.get("host") !== new URL(WEBSITE_URL).host) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/|fonts/|__generated__/|favicon.ico).*)"],
};
