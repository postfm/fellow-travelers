import React from 'react';
import Filters from './filters';
import Card from './card-item';

export default function CardsList() {
  return (
    <section className='flex justify-between w-full'>
      <div className='flex flex-col'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Filters />
    </section>
  );
}
