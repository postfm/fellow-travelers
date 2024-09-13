'use client';

import Image from 'next/image';
import IconFilter from './icons/icon_filter.svg';
import { Button } from '@material-tailwind/react';
import { Continents, Letters } from './constants';

export default function Home() {
  return (
    <div className='grid grid-rows-[216px_1fr_154px] w-[1440px] items-center justify-items-center min-h-screen pt-[134px] pb-0 gap-[58px] mx-auto'>
      <header className='relative w-full h-full bg-foreground rounded-b-[60px] pl-[126px] pt-[109px]'>
        <div className='absolute w-[288px] h-2 bg-[#4d99d6] rounded-[4px] left-[126px] top-[213px]'></div>
        <p className='text-white font-bold text-6xl leading-5 uppercase'>Попутчики</p>
      </header>
      <main className='w-full px-[60px]'>
        <section className='w-full px-5'>
          <div className='flex justify-between mb-[74px]'>
            <div className='flex font-bold justify-items-center text-[20px] leading-5 uppercase'>
              <Image
                className='mr-5'
                src={IconFilter}
                alt='Иконка фильтра'
                width={23}
                height={15}
              />
              <div className='inline mr-1 my-auto'>Фильтрация по странам:</div>
              {Continents.map((continent) => (
                <Button
                  key={continent.name}
                  className='text-[20px] text-opacity-30 hover:text-opacity-60 hover:bg-transparent active:text-opacity-100 active:bg-transparent'
                  variant='text'
                  ripple={false}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {continent.value}
                </Button>
              ))}
            </div>
            <Button
              className='text-[20px] text-opacity-30 hover:text-opacity-60 hover:bg-transparent active:text-opacity-100 active:bg-transparent'
              variant='text'
              ripple={false}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Показать все ...
            </Button>
          </div>
          <div className='grid grid-cols-5 grid-rows-5'>
            {Letters.map((letter) => (
              <div
                key={letter}
                className='mb-[30px] font-bold text-[60px] leading-[60px] uppercase'
              >
                {letter}
              </div>
            ))}
            {}
          </div>
        </section>
      </main>
      <footer className='w-full h-full bg-white rounded-t-[60px] shadow-3xl'></footer>
    </div>
  );
}
