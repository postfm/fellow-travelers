import React from 'react';
import Filters from './filters';
import Card from './card-item';
import { Button, IconButton, ThemeProvider } from '@material-tailwind/react';

const theme = {
  iconButton: {
    styles: {
      base: {
        position: 'relative',
        verticalAlign: 'align-middle',
        userSelect: 'select-none',
        fontFamily: 'font-sans',
        fontWeight: 'font-medium',
        textAlign: 'text-center',
        textTransform: 'uppercase',
        transition: 'transition-all',
        disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
      },
      sizes: {
        lg: {
          width: 'w-[50px]',
          maxWidth: 'max-w-[50px]',
          height: 'h-[50px]',
          maxHeight: 'max-h-[50px]',
          borderRadius: 'rounded-lg',
          fontSize: 'text-xl',
        },
      },
      variants: {
        filled: {
          'blue-gray': {
            backgroud: '#4d99d6',
            color: 'text-white',
            shadow: 'none',
            hover: 'hover:shadow-none hover:shadow-none',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
        },
        gradient: {
          'blue-gray': {
            backgroud: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-gray-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/40',
            active: 'active:opacity-[0.85]',
          },
        },
        outlined: {
          'blue-gray': {
            border: 'border border-blue-gray-500',
            color: 'text-blue-gray-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-blue-gray-200',
            active: 'active:opacity-[0.85]',
          },
        },
        text: {
          'blue-gray': {
            color: 'text-blue-gray-500',
            hover: 'hover:bg-blue-gray-500/10',
            active: 'active:bg-blue-gray-500/30',
          },
        },
      },
    },
  },
};

export default function CardsList() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: number) =>
    ({
      variant: active === index ? 'filled' : 'text',
      color: 'blue-gray',
      onClick: () => setActive(index),
      className: 'rounded-full font-bold text-xl leading-5 text-[#1D2E5B]',
      ripple: 'false',
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

  return (
    <section className='flex justify-between w-full'>
      <div className='flex flex-col'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Button
          className='mt-8 mb-[60px] mx-auto flex justify-between items-center font-bold text-xl leading-5 text-[#1D2E5B] hover:bg-transparent active:bg-transparent hover:opacity-60 active:opacity-30'
          variant={'text'}
          ripple={false}
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
        <ThemeProvider value={theme}>
          <div className='flex justify-between items-center gap-4 w-full h-[100px] bg-white rounded-[20px] pl-[30px] pr-[40px]'>
            <div className='flex items-center gap-2'>
              <IconButton {...getItemProps(1)}>1</IconButton>
              <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
              <IconButton {...getItemProps(4)}>4</IconButton>
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
                disabled={active === 5}
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
