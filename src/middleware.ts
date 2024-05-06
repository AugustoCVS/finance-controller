import { NextRequest, NextResponse } from "next/server";

const publicRoute = ["/"];

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("@token");

  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoute.includes(path);

  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
