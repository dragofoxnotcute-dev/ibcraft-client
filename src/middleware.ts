import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {

  const isProd = process.env.NEXT_PUBLIC_DEVMODE;
  const url = request.nextUrl;
  console.log('🔍 middleware called:', request.nextUrl.pathname);

  if (isProd) {
    return NextResponse.redirect(new URL('/', request.url))
  }


  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
};
