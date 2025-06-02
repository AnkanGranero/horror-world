export type Country = {
    name: { common: string };
    cca2: string;
    flags: { png: string; svg: string };
};

export type CountryContextType = {
    selectedCountry: Country | null;
    setSelectedCountry: (country: Country | null) => void;
};