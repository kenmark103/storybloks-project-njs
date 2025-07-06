// app/api/preview/route.ts
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const slug  = searchParams.get("slug") || "";

  if (token !== process.env.STORYBLOK_PREVIEW_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  (await draftMode()).enable();

  // Build an absolute URL by using the incoming request URL as base
  const base = request.url;   // e.g. 'http://localhost:3000/api/preview?...'
  const redirectPath = slug === "" ? "/" : `/${slug}`;
  const redirectUrl  = new URL(redirectPath, base);

  return NextResponse.redirect(redirectUrl);
}
