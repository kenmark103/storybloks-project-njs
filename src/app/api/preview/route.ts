// app/api/preview/route.ts
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug  = searchParams.get("slug") || "";

  (await draftMode()).enable();

  const base = request.url; 
  const redirectPath = slug === "" ? "/" : `/${slug}`;
  const redirectUrl  = new URL(redirectPath, base);

  return NextResponse.redirect(redirectUrl);
}
