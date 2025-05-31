"use client";
import { createContext, useContext, useState } from "react";
import { CountryContextType, Country } from "../types/country"

export const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    return (
        <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
            {children}
        </CountryContext.Provider>
    );
}
export const useCountry = () => {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error("useCountry must be used within a CountryProvider");
    }
    return context;
};