import type { Metadata } from "next";
import { Amarante } from "next/font/google";
import "./globals.css";
import { CountryProvider } from "@/contexts/countryContext";
import Header from "@/components/Header"


// Font-variables

const amarante = Amarante({
  weight: "400",
  variable: "--font-amarante",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Horror World",
  description: "Explore top horror films by country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${amarante.variable} antialiased bg-black text-white min-h-screen`}
      >
          <CountryProvider>
            <Header />
            {children}
          </CountryProvider>
      </body>
    </html >
  );
}
