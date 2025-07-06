import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const slug = searchParams.get("slug") || ""; // homepage fallback

  // validate token
  if (token !== process.env.STORYBLOK_PREVIEW_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  // enable preview
  (await draftMode()).enable();

  // redirect to the given slug
  const redirectUrl = slug === "" ? "/" : `/${slug}`;
  return NextResponse.redirect(redirectUrl);
}
