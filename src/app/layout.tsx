import type { Metadata } from "next";
import { Amarante } from "next/font/google";
import "./globals.css";
import { fetchCountries } from "@/lib/fetchCountries"
import CountrySelect from "@/components/countrySelect";
import { CountryProvider } from "@/contexts/countryContext";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const countries = await fetchCountries();
  return (
    <html lang="en">

      <body
        className={`${amarante.variable} antialiased bg-black text-white min-h-screen`}
      >
        <CountryProvider>
          <header className="p-[4rem] absolute top-[20vh] w-full">
            <h1 className="font-bold font-serif text-3xl md:text-9xl text-warm text-center glow">HORROR WORLD</h1>
            <nav className="flex justify-center p-[2rem] mt-4">
              <CountrySelect countries={countries}></CountrySelect>
            </nav>
          </header>
          {children}
        </CountryProvider>
      </body>
    </html >
  );
}
