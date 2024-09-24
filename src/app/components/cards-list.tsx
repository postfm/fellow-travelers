'use client';

import React, { useState } from 'react';
import Filters from './filters';
import { Button, IconButton, ThemeProvider } from '@material-tailwind/react';
import { ThemeIconButton } from '../constants/theme-icon-button';
import { cardMocks } from '../mocks/card-mocks';
import dynamic from 'next/dynamic';

const CardNoSSR = dynamic(() => import('./card-item'), { ssr: false });

const cards = cardMocks();

interface CardListProps {
  countrySelected: string;
}

export default function CardsList({ countrySelected }: CardListProps) {
  const [active, setActive] = React.useState(1);
  const [items, setItems] = useState(4);

  const filteredCards = countrySelected
    ? cards.filter((card) => card.country.some((element) => element === countrySelected))
    : [...cards];

  const getItemProps = (index: number) =>
    ({
      variant: active === index ? 'filled' : 'text',
      color: 'blue-gray',
      onClick: () => setActive(index),
      className: 'rounded-full font-bold text-xl leading-5 ',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

  const next = () => {
    if (active === 4) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const handleButtonClick = () => {
    const cardLength = document.querySelectorAll('.card').length;
    const newItems = items + 4;
    setItems(newItems);
    const array = Array.from(document.querySelectorAll('.card'));
    const visibleItems = array.slice(0, newItems);

    visibleItems.forEach((item) => item.classList.replace('hidden', 'block'));

    if (visibleItems.length === cardLength) {
      document.querySelector('.show-more')?.classList.add('hidden');
    }
  };

  return (
    <section className='flex justify-between w-full'>
      <div className='flex flex-col'>
        {filteredCards.map((card, index) => (
          <CardNoSSR
            key={index}
            card={card}
            hidden={index <= 3 ? '' : 'hidden'}
          />
        ))}
        <Button
          className='show-more mt-8 mb-[60px] mx-auto flex justify-between items-center font-bold text-xl leading-5 text-[#1D2E5B] hover:bg-transparent active:bg-transparent hover:opacity-60 active:opacity-30'
          variant={'text'}
          ripple={false}
          onClick={handleButtonClick}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <svg
            className='mr-6'
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              y='12'
              width='26'
              height='2'
              rx='1'
              fill='#1D2E5B'
            />
            <rect
              x='12'
              y='26'
              width='26'
              height='2'
              rx='1'
              transform='rotate(-90 12 26)'
              fill='#1D2E5B'
            />
          </svg>
          Показать еще
        </Button>
        <ThemeProvider value={ThemeIconButton}>
          <div className='flex justify-between items-center gap-4 w-full h-[100px] bg-white rounded-[20px] pl-[30px] pr-[40px]'>
            <div className='flex items-center gap-2'>
              <IconButton
                {...getItemProps(1)}
                ripple={false}
                size={'lg'}
                // className='hover:bg-transparent hover:opacity-60 active:bg-transparent'
              >
                1
              </IconButton>
              <IconButton
                {...getItemProps(2)}
                ripple={false}
                size={'lg'}
              >
                2
              </IconButton>
              <IconButton
                {...getItemProps(3)}
                ripple={false}
                size={'lg'}
              >
                3
              </IconButton>
              <IconButton
                {...getItemProps(4)}
                ripple={false}
                size={'lg'}
              >
                4
              </IconButton>
            </div>
            <div className='flex'>
              <Button
                variant='text'
                className='flex items-center gap-2 rounded-full p-[15px] hover:bg-transparent active:bg-transparent hover:opacity-60 active:opacity-30'
                ripple={false}
                onClick={prev}
                disabled={active === 1}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <svg
                  width='13'
                  height='20'
                  viewBox='0 0 13 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 10L9.75 1.33974L9.75 18.6603L0 10Z'
                    fill='#1D2E5B'
                  />
                </svg>
              </Button>

              <Button
                variant='text'
                className='flex items-center gap-2 rounded-full p-[15px] hover:bg-transparent active:bg-transparent hover:opacity-60 active:opacity-30'
                ripple={false}
                onClick={next}
                disabled={active === 4}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <svg
                  width='13'
                  height='20'
                  viewBox='0 0 13 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13 10L3.25 18.6603L3.25 1.33975L13 10Z'
                    fill='#1D2E5B'
                  />
                </svg>
              </Button>
            </div>
          </div>
        </ThemeProvider>
      </div>
      <Filters />
    </section>
  );
}
