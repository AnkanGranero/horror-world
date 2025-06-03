import type { Metadata } from "next";
import { Amarante, Special_Elite } from "next/font/google";
import "@/styles/globals.css";
import { CountryProvider } from "@/contexts/countryContext";
import Header from "@/components/Header"


// Font-variables

const amarante = Amarante({
  weight: "400",
  variable: "--font-amarante",
  subsets: ["latin"],
})

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special-elite",
});

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
        className={`${amarante.variable} ${specialElite.variable} antialiased bg-black text-white min-h-screen`}
      >
        <CountryProvider>
          <Header/>
          {children}
        </CountryProvider>
      </body>
    </html >
  );
}
