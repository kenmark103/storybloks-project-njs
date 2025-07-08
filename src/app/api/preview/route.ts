// app/api/preview/route.ts
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token   = searchParams.get("secret");
  const slug    = searchParams.get("slug") || "";

  if (token !== process.env.STORYBLOK_PREVIEW_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  const url = slug.startsWith("/") ? slug : `/${slug}`;
  return NextResponse.redirect(url);
}
