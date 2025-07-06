import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoryblokBridge from "@/components/StoryblokBridge";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Storyblok Next Js App",
  description: "Created by Ken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <head>
        {/* loads the Storyblok Bridge before React hydrates */}
        <Script
          src="https://app.storyblok.com/f/storyblok-latest.js"
          strategy="afterInteractive"
        />
      </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <StoryblokBridge />
        </body>
      </html>
    
  );
}
