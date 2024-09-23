import React from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Checkbox,
  Input,
} from '@material-tailwind/react';
import Image from 'next/image';
import Slider from '@mui/material/Slider';
import IconPlane from '../icons/icon-plane.svg';
import IconBus from '../icons/icon-bus.svg';
import IconBicycle from '../icons/icon-bicycle.svg';
import IconRun from '../icons/icon-run.svg';

interface IconProps {
  open: boolean;
}

function Icon({ open }: IconProps) {
  return (
    <svg
      width='10'
      height='5'
      viewBox='0 0 10 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${open ? 'rotate-180' : ''} h-[6px] w-[10px] transition-transform`}
    >
      <path
        d='M5 5L0.669872 0.5L9.33013 0.5L5 5Z'
        fill='#192144'
      />
    </svg>
  );
}

function valuetext(value: number) {
  return `${value}°C`;
}

export default function Filters() {
  const [openAcc1, setOpenAcc1] = React.useState(false);
  const [openAcc2, setOpenAcc2] = React.useState(false);
  const [openAcc3, setOpenAcc3] = React.useState(false);
  const [openAcc4, setOpenAcc4] = React.useState(false);
  const [openAcc5, setOpenAcc5] = React.useState(false);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
  const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);
  const handleOpenAcc5 = () => setOpenAcc5((cur) => !cur);

  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <>
      <div className='w-[285px] bg-[#cce5fa] self-start rounded-[20px] py-12 px-[46.5px]'>
        <h2 className='mb-[34px] font-bold text-[30px] leading-[30px]'>
          Подберите идеального попутчика
        </h2>
        <Accordion
          className='mb-5'
          open={openAcc1}
          icon={<Icon open={openAcc1} />}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <AccordionHeader
            className='border-none py-0 text-[#1D2E5B] hover:opacity-60 active:opacity-30'
            color=''
            onClick={() => handleOpenAcc1()}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Хобби
          </AccordionHeader>
          <AccordionBody className='pt-5 pb-3'>
            <div className='hover:opacity-60 active:opacity-20'>
              <Checkbox
                className='w-6 h-6 bg-white checked:bg-white border-none hover:bg-none before:content-none active:before:bg-none'
                label='Вязание'
                ripple={false}
                containerProps={{
                  className: 'py-2  hover:bg-none hover:opacity-60',
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='#161C35'
                    stroke='#161C35'
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className='hover:opacity-60 active:opacity-20'>
              <Checkbox
                className='w-6 h-6 label:pt-0 stiles:{label:py-0} bg-white checked:bg-white border-none hover:bg-none before:content-none active:before:bg-none'
                label='Фотография'
                ripple={false}
                containerProps={{
                  className: 'py-2',
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='#161C35'
                    stroke='#161C35'
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className='hover:opacity-60 active:opacity-20'>
              <Checkbox
                className='w-6 h-6 pt-0 pb-4 bg-white checked:bg-white border-none hover:bg-none before:content-none active:before:bg-none'
                label='Вышивание'
                ripple={false}
                containerProps={{
                  className: 'py-2',
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='#161C35'
                    stroke='#161C35'
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion
          className='mb-5'
          open={openAcc2}
          icon={<Icon open={openAcc2} />}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <AccordionHeader
            className='border-none py-0 text-[#1D2E5B] hover:opacity-60 active:opacity-30'
            onClick={() => handleOpenAcc2()}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Музыка
          </AccordionHeader>
          <AccordionBody className='pt-5 pb-3'>
            <div className='hover:opacity-60 active:opacity-20'>
              <Checkbox
                className='w-6 h-6 pt-0 pb-4 bg-white checked:bg-white border-none hover:bg-none before:content-none active:before:bg-none'
                label='Тяжелый рок'
                ripple={false}
                containerProps={{
                  className: 'py-2',
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='#161C35'
                    stroke='#161C35'
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className='hover:opacity-60 active:opacity-20'>
              <Checkbox
                className='w-6 h-6 label:pt-0 stiles:{label:py-0} bg-white checked:bg-white border-none hover:bg-none before:content-none active:before:bg-none'
                label='Русский рэп'
                ripple={false}
                containerProps={{
                  className: 'py-2',
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='#161C35'
                    stroke='#161C35'
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className='hover:opacity-60 active:opacity-20'>
              <Checkbox
                className='w-6 h-6 pt-0 pb-4 bg-white checked:bg-white border-none hover:bg-none before:content-none active:before:bg-none'
                label='Евроденс'
                ripple={false}
                containerProps={{
                  className: 'py-2',
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='#161C35'
                    stroke='#161C35'
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion
          className='mb-5'
          open={openAcc3}
          icon={<Icon open={openAcc3} />}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <AccordionHeader
            className='border-none py-0 text-[#1D2E5B] hover:opacity-60 active:opacity-30'
            onClick={() => handleOpenAcc3()}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Еда
          </AccordionHeader>
          <AccordionBody className='flex flex-col pt-5 pb-3'>
            <div className='hover:opacity-60 active:opacity-20'>
              <Checkbox
                className='w-6 h-6 pt-0 pb-4 bg-white checked:bg-white border-none hover:bg-none before:content-none active:before:bg-none'
                label='Веган'
                ripple={false}
                containerProps={{
                  className: 'py-2',
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='#161C35'
                    stroke='#161C35'
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className='hover:opacity-60 active:opacity-20'>
              <Checkbox
                className='w-6 h-6 label:pt-0 stiles:{label:py-0} bg-white checked:bg-white border-none hover:bg-none before:content-none active:before:bg-none'
                label='Фастфуд'
                ripple={false}
                containerProps={{
                  className: 'py-2',
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='#161C35'
                    stroke='#161C35'
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className='hover:opacity-60 active:opacity-20'>
              <Checkbox
                className='w-6 h-6 pt-0 pb-4 bg-white checked:bg-white border-none hover:bg-none before:content-none active:before:bg-none'
                label='Смузи'
                ripple={false}
                containerProps={{
                  className: 'py-2',
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='#161C35'
                    stroke='#161C35'
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion
          className='mb-5'
          open={openAcc4}
          icon={<Icon open={openAcc4} />}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <AccordionHeader
            className='border-none py-0 text-[#1D2E5B] hover:opacity-60 active:opacity-30'
            onClick={() => handleOpenAcc4()}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Транспорт
          </AccordionHeader>
          <AccordionBody className='pt-5 pb-3'>
            <div className='flex gap-[1px]'>
              <div className='flex justify-center w-11 h-11 rounded-full bg-white hover:opacity-70 active:opacity-30 hover:cursor-pointer'>
                <Image
                  src={IconPlane}
                  width={22}
                  height={22}
                  alt='icon-plane'
                />
              </div>
              <div className='flex justify-center w-11 h-11 rounded-full bg-white hover:opacity-70 active:opacity-30 hover:cursor-pointer'>
                <Image
                  src={IconBus}
                  width={22}
                  height={22}
                  alt='icon-bus'
                />
              </div>
              <div className='flex justify-center w-11 h-11 rounded-full bg-white hover:opacity-70 active:opacity-30 hover:cursor-pointer'>
                <Image
                  src={IconBicycle}
                  width={22}
                  height={22}
                  alt='icon-bicycle'
                />
              </div>
              <div className='flex justify-center w-11 h-11 rounded-full bg-white hover:opacity-70 active:opacity-30 hover:cursor-pointer'>
                <Image
                  src={IconRun}
                  width={22}
                  height={22}
                  alt='icon-run'
                />
              </div>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion
          className='mb-[38px]'
          open={openAcc5}
          icon={<Icon open={openAcc5} />}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <AccordionHeader
            className='border-none py-0 text-[#1D2E5B] hover:opacity-60 active:opacity-30'
            onClick={() => handleOpenAcc5()}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Уровень
          </AccordionHeader>
          <AccordionBody className='pt-5 pb-0'>
            <div className='relative flex w-full mb-8'>
              <Input
                type='number'
                className='!border rounded-r-none !border-[#CBCED9] bg-white font-medium text-xl leading-5 text-[#1D2E5B] text-center hover:!border-[#959BB2] hover:!border-t-[#959BB2] focus:!border-[#161C35] focus:!border-t-[#161C35] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: '!min-w-0 !w-24' }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                type='number'
                className='!border rounded-l-none !border-[#CBCED9] bg-white font-medium text-xl leading-5 text-[#1D2E5B] text-center hover:!border-[#959BB2] hover:!border-t-[#959BB2] focus:!border-[#161C35] focus:!border-t-[#161C35] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: '!min-w-0 !w-24' }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <div className='absolute flex items-center top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 w-5 h-[15px] bg-transparent'>
                <div className='w-full h-[1px] bg-[#CBCED9]'></div>
              </div>
            </div>
            <div className='flex justify-center'>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay='off'
                getAriaValueText={valuetext}
                sx={{
                  width: '88%',
                  '& .MuiSlider-thumb': {
                    width: '13px',
                    height: '13px',
                    boxShadow: 'none',
                  },
                  '& .MuiSlider-thumb:hover': {
                    width: '19px',
                    height: '19px',
                    boxShadow: 'none',
                  },
                  '& .MuiSlider-thumb:active': {
                    width: '19px',
                    height: '19px',
                    boxShadow: '0px 3px 7px 0px #0000003D',
                  },
                }}
              />
            </div>
          </AccordionBody>
        </Accordion>
        <Button
          className='w-full py-[18px] bg-white text-[#161C35] rounded-full hover:shadow-5xl active:text-opacity-30 active:bg-[#4D99D6]'
          placeholder={undefined}
          onPointerLeaveCapture={undefined}
          onPointerEnterCapture={undefined}
        >
          Показать
        </Button>
      </div>
    </>
  );
}
