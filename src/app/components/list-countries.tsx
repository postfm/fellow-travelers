import React from 'react';
import { Countries, ICountry } from '../constants';

interface ListCountriesProps {
  letter: string;
  continents: string[];
}

export default function ListCountries({ letter, continents }: ListCountriesProps) {
  const initialValue = '';
  const emtryContinents = continents.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  let filteredCountries: ICountry[] = [];

  if (emtryContinents === '') {
    filteredCountries = Countries.filter((country) => letter.toUpperCase() === country.name[0]);
  } else {
    filteredCountries = Countries.filter(
      (country) =>
        letter.toUpperCase() === country.name[0] &&
        continents.some((continent) => country.place === continent)
    );
  }

  return (
    <div className='mt-[30px]'>
      {filteredCountries.map((country) => (
        <div
          key={country.name}
          className='font-normal text-xl normal-case'
          role='button'
        >
          {country.name}
        </div>
      ))}
    </div>
  );
}
