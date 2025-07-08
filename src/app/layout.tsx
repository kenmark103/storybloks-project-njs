
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoryblokBridgeComponent from "@/components/StoryblokBridge"

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
          <script src="//app.storyblok.com/f/storyblok-v2-latest.js" async /> 
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            {children}
             <StoryblokBridgeComponent />
         
        </body>
      </html>
    
  );
}
