import type { Metadata } from "next";
import { Geist, Geist_Mono, Amarante } from "next/font/google";
import "./globals.css";

// Font-variabler
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amarante = Amarante({
  weight: "400",
  variable: "--font-amarante",
  subsets: ["latin"],
})

// Metadata
export const metadata: Metadata = {
  title: "Horror World",
  description: "Explore top horror films by country.",
};

// Root-layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${amarante.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
