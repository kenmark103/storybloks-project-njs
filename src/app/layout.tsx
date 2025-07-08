"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});  

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <html lang="en">

        <head>
          <Script
                src="https://app.storyblok.com/f/storyblok-v2-latest.js"
                strategy="beforeInteractive"
                onLoad={() => console.log("✅ Storyblok Bridge loaded")}
              />
        </head>

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            {children}         
        </body>
      </html>
    
  );
}
