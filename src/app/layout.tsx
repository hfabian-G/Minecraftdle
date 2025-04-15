import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minecraftdle - A Minecraft Wordle-like Game",
  description: "Test your Minecraft knowledge with this Wordle-like game! Guess the correct crafting recipe and become a master crafter.",
  keywords: "minecraft, wordle, game, crafting, recipe, puzzle",
  openGraph: {
    title: "Minecraftdle - A Minecraft Wordle-like Game",
    description: "Test your Minecraft knowledge with this Wordle-like game! Guess the correct crafting recipe and become a master crafter.",
    type: "website",
    url: "https://minecraftdle.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Minecraftdle Game Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minecraftdle - A Minecraft Wordle-like Game",
    description: "Test your Minecraft knowledge with this Wordle-like game! Guess the correct crafting recipe and become a master crafter.",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
