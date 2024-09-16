import { Card, CardHeader, CardBody, Button } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';
import LikeBtn from '../icons/like-btn.svg';
import IconPlane from '../icons/icon-plane.svg';
import IconBus from '../icons/icon-bus.svg';
import IconBicycle from '../icons/icon-bicycle.svg';
import IconRun from '../icons/icon-run.svg';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CardItem() {
  return (
    <Card
      className='w-[951px] h-[285px] flex-row mb-[30px] shadow-4xl'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        shadow={false}
        floated={false}
        className='m-0 w-[285px] shrink-0 rounded-r-none'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Image
          src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
          alt='card-image'
          width={285}
          height={285}
          className='object-cover w-[285px] h-[285px]'
        />
      </CardHeader>
      <CardBody
        className='w-full h-[285px] pl-[36px] pt-[46px] pr-[42px] pb-[42px] text-foreground'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className='flex gap-[79px] '>
          <div className='flex flex-col'>
            <h2 className=' relative w-60 font-bold text-3xl leading-[30px] pl-[26px] mb-5'>
              <div className='absolute w-2 h-2 bg-[#f97676] rounded-full left-0 top-2/4 -translate-y-1/2'></div>
              Таня Фирсова
            </h2>
            <div className='w-[252px] pl-[26px] font-normal text-black text-xl leading-5 mb-[22px]'>
              #ЗОЖ #ПП #Фитнес #пляж #авокадо #смузи
            </div>
            <div className='flex ml-[18px] w-64 justify-between items-center'>
              <Button
                className='w-[150px] h-[50px] rounded-[25px] font-bold text-xl leading-5 text-[#161c35] bg-[#a8d2f4]'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Позвать!
              </Button>
              <Image
                src={LikeBtn}
                width={50}
                height={50}
                alt='like-btn'
              />
              <p className='font-bold text-xl leading-5'>1500</p>
            </div>
          </div>
          <div className='flex flex-col justify-between font-medium text-xl leading-5'>
            <div>
              <div className='flex items-center mb-3'>
                <Image
                  className='rounded-sm mr-[18px]'
                  src={'https://flagcdn.com/h24/ua.png'}
                  width={35}
                  height={24}
                  alt='Украина'
                />
                <div className='w-[153px] uppercase truncate'>Украина</div>
              </div>
              <div className='flex items-center mb-3'>
                <Image
                  className='rounded-sm mr-[18px]'
                  src={'https://flagcdn.com/h24/ua.png'}
                  width={35}
                  height={24}
                  alt='Украина'
                />
                <div className='w-[153px] uppercase truncate'>Украина</div>
              </div>
              <div className='flex items-center mb-3'>
                <Image
                  className='rounded-sm mr-[18px]'
                  src={'https://flagcdn.com/h24/ua.png'}
                  width={35}
                  height={24}
                  alt='Украина'
                />
                <div className='w-[153px] uppercase truncate'>Украина</div>
              </div>
            </div>
            <div className='flex w-full mt-6 justify-between'>
              <div className='flex gap-1'>
                <Image
                  src={IconPlane}
                  width={22}
                  height={22}
                  alt='icon-plane'
                />
                <Image
                  src={IconBus}
                  width={22}
                  height={22}
                  alt='icon-bus'
                />
                <Image
                  src={IconBicycle}
                  width={22}
                  height={22}
                  alt='icon-bicycle'
                />
                <Image
                  src={IconRun}
                  width={22}
                  height={22}
                  alt='icon-run'
                />
              </div>
              <div className='w-[60px] h-[60px]'>
                <CircularProgressbarWithChildren
                  value={66}
                  strokeWidth={3}
                  styles={buildStyles({
                    trailColor: 'transparent',
                    pathColor: '#4D99D6',
                  })}
                >
                  <div className='font-bold text-2xl leading-6 pt-[-5px] text-foreground'>66</div>
                  <div className='text-sm leading-[14px] border-t border-black border-opacity-10 w-[34px] pt-[2px] text-center text-foreground'>
                    level
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
