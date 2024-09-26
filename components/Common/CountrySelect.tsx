import React, { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";

interface CountryOption {
  value: string;
  label: string;
  flag: string; // Add a flag property
}

const CountrySelect = () => {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<SingleValue<CountryOption> | null>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all") // Fetch all countries
      .then((response) => response.json())
      .then((data) => {
        const formattedCountries = data.map((country: any) => ({
          value: country.cca2, // ISO 3166-1 alpha-2 code
          label: country.name.common,
          flag: country.flags.png, // URL of the flag image
        }));
        setCountries(formattedCountries);
      });
  }, []);

  // Custom option component to display flag and label
  const formatOptionLabel = ({ label, flag }: CountryOption) => (
    <div className="flex items-center">
      <img src={flag} alt={label} style={{ width: 20, height: 20, marginRight: 10 }} />
      {label}
    </div>
  );

  return (
    <>
    <Select
      options={countries}
      name="country"
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
      formatOptionLabel={formatOptionLabel} // Use the custom option format
    />
    </>
  );
};

export default CountrySelect;
