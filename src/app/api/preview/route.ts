import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("secret");
  const slug  = searchParams.get("slug") || "";

  // 1) Validate your preview token
  if (token !== process.env.STORYBLOK_PREVIEW_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  // 2) Enable Draft Mode (sets the bypass cookie)
   const draft = await draftMode();
  draft.enable();

  // 3) Build an absolute URL for redirect
  const redirectUrl = new URL(request.url);
  // Overwrite the path to your slug (e.g. "/" or "/posts/my‑post")
  redirectUrl.pathname = slug.startsWith("/") ? slug : `/${slug}`;
  // Clear out any query string
  redirectUrl.search = "";

  // 4) Redirect
  return NextResponse.redirect(redirectUrl);
}

