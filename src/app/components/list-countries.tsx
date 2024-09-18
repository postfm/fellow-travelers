import React from 'react';
import { Countries } from '../constants';

interface ListCountriesProps {
  letter: string;
}

export default function ListCountries({ letter }: ListCountriesProps) {
  const filteredCountries = Countries.filter((country) => letter.toUpperCase() === country.name[0]);
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
