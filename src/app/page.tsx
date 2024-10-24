'use client';

import Image from 'next/image';
import IconFilter from './icons/icon-filter.svg';
import IconClose from './icons/icon-close.svg';
import { Button } from '@material-tailwind/react';
import { Continents, Letters } from './constants';
import ListCountries from './components/list-countries';
import React, { Fragment, ReactEventHandler, useState } from 'react';
import CardsList from './components/cards-list';

const initialActiveContinents = [false, false, false, false];
const initialNameContinents = ['', '', '', ''];

export default function Home() {
  const [closeCountriesList, setCloseCountryList] = useState(true);
  const [isConteinentSelected, setIsContinentsSelected] = useState(initialActiveContinents);
  const [continentSelected, setContinentsSelected] = useState(initialNameContinents);
  const [countrySelected, setCountrySelected] = useState<string>('');

  const handleContinentsButtonClick: ReactEventHandler<HTMLElement> = (evt) => {
    const button = evt.target as HTMLButtonElement;
    const activeContinents = isConteinentSelected.map((continent, index) =>
      index === Number(button.dataset.index) ? (continent = !continent) : (continent = continent)
    );
    const nameContinents = continentSelected.map((continent, index) =>
      index === Number(button.dataset.index)
        ? (continent = activeContinents[index] ? (button.dataset.continent as string) : '')
        : (continent = continent)
    );
    setIsContinentsSelected(activeContinents);
    setContinentsSelected(nameContinents);
  };

  const onClickHandler: ReactEventHandler<HTMLElement> = (evt) => {
    const div = evt.target as HTMLDivElement;
    setCountrySelected(div.dataset.country as string);
  };

  return (
    <div className='grid grid-rows-[216px_1fr_154px] w-[1440px] items-center justify-items-center min-h-screen pt-[134px] pb-0 gap-[42px] mx-auto'>
      <header className='relative w-full h-full bg-foreground rounded-b-[60px] pl-[126px] pt-[109px]'>
        <div className='absolute w-[288px] h-2 bg-[#4d99d6] rounded-[4px] left-[126px] top-[213px]'></div>
        <p className='text-white font-bold text-[52px] leading-[29px] uppercase'>Попутчики</p>
      </header>
      <main className='w-full px-[60px]'>
        <section className='w-full'>
          <div className='flex justify-between mb-[61px] px-5'>
            <div className='flex font-bold justify-items-center text-[20px] leading-5 uppercase'>
              <Image
                className='mr-[23px]'
                src={IconFilter}
                alt='Иконка фильтра'
                width={23}
                height={15}
              />
              <div className='inline mr-1 mt-[20px] mb-auto'>Фильтрация по странам:</div>
              {Continents.map((continent, index) => (
                <Button
                  key={continent.name}
                  className={`${
                    isConteinentSelected[index] ? 'text-opacity-100' : 'text-opacity-30'
                  } text-[19px] ml-[-24px] mt-[5px] hover:text-opacity-60 hover:bg-transparent active:text-opacity-100 active:bg-transparent`}
                  variant='text'
                  ripple={false}
                  data-continent={continent.name}
                  data-index={index}
                  onClick={handleContinentsButtonClick}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {continent.value}
                </Button>
              ))}
            </div>
            <Button
              className={`text-[20px] ${
                closeCountriesList ? 'text-opacity-100' : 'text-opacity-30'
              } hover:text-opacity-60 hover:bg-transparent active:text-opacity-100 active:bg-transparent`}
              variant='text'
              ripple={false}
              onClick={() => setCloseCountryList(false)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Показать все ...
            </Button>
          </div>
          <div
            className={`${
              closeCountriesList ? 'hidden' : 'flex'
            } flex-wrap pl-[38px] pr-[31px] gap-x-[44px]`}
          >
            {Letters.map((letter) => (
              <Fragment key={letter}>
                <div
                  key={letter}
                  className='w-[206px] mb-[30px] font-bold text-[60px] leading-[60px] uppercase text-wrap'
                >
                  {letter}
                  <ListCountries
                    key={letter}
                    letter={letter}
                    continents={continentSelected}
                    onClickHandler={onClickHandler}
                  />
                </div>
              </Fragment>
            ))}
          </div>
          <Button
            className={`${
              closeCountriesList ? 'hidden' : 'block'
            } w-full mt-3 mb-[150px] bg-[#d6daed] py-[42px] hover:bg-[#c8cee8] active:bg-[#c8cee8]`}
            variant='text'
            ripple={false}
            onClick={() => setCloseCountryList(true)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className='flex justify-center font-bold text-xl leading-5 active:opacity-30'>
              <Image
                className='inline mr-[17px]'
                src={IconClose}
                alt='Иконка фильтра'
                width={22}
                height={24}
              />
              Свернуть
            </div>
          </Button>
        </section>
        <CardsList countrySelected={countrySelected} />
      </main>
      <footer className='w-full h-full bg-white rounded-t-[60px] shadow-3xl'></footer>
    </div>
  );
}
