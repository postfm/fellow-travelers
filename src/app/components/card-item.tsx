'use client';

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
import { ICard } from '../mocks/card-mocks';

export const transport = [
  { image: IconPlane, name: 'plane', title: 'Самолет' },
  { image: IconBus, name: 'bus', title: 'Автобус' },
  { image: IconBicycle, name: 'bicycle', title: 'Велосипед' },
  { image: IconRun, name: 'run', title: 'Бег' },
];
interface CardItemProps {
  card: ICard;
  hidden: string;
}

export default function CardItem({ card, hidden }: CardItemProps) {
  return (
    <div
      className={`card ${hidden}`}
      suppressHydrationWarning
    >
      <Card
        className={`w-[949px] h-[285px] flex-row mb-[30px] shadow-4xl hover:cursor-pointer rounded-[20px]`}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        suppressHydrationWarning
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
            src={card.image}
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
          <div className='flex gap-[65px] '>
            <div className='flex flex-col'>
              <h2 className=' relative w-72 font-bold text-3xl leading-[30px] pl-[26px] mb-5 truncate'>
                <div className='absolute w-2 h-2 bg-[#f97676] rounded-full left-0 top-2/4 -translate-y-1/2'></div>
                {card.name}
              </h2>
              <div className='w-[252px] h-[62px] overflow-hidden pl-[26px] font-normal text-black text-xl leading-[22px] mb-[28px]'>
                {card.tags}
              </div>
              <div className='flex ml-[18px] w-[252px] items-center'>
                <Button
                  className='w-[150px] h-auto mr-[3px] rounded-[25px] font-bold text-[19px] pt-[15px] leading-5 text-[#161c35] bg-[#a8d2f4] !overflow-hidden'
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
                  className='mr-[3px]'
                />
                <p className='font-bold text-xl leading-5 overflow-hidden'>{card.likes}</p>
              </div>
            </div>
            <div className='flex flex-col justify-between font-medium text-xl mt-[5px] leading-[21px]'>
              <div>
                {card.flag.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center mb-[12px]'
                  >
                    <Image
                      className='rounded-sm mr-[18px]'
                      src={item}
                      width={35}
                      height={24}
                      alt={card.country[index]}
                    />
                    <div className='w-[153px] uppercase truncate'>{card.country[index]}</div>
                  </div>
                ))}
              </div>
              <div className='flex w-full mt-[3px] justify-between'>
                <div className='flex w-[121px] gap-[11px] mt-[10px] flex-wrap'>
                  {transport.map((item, index) => (
                    <Image
                      key={index}
                      src={item.image}
                      width={22}
                      height={22}
                      alt={item.title}
                      className={`${card.transport[index] ? 'opacity-15' : 'opacity-100'}`}
                    />
                  ))}
                </div>
                <div className='w-[60px] h-[58px] relative bottom-[-2px] left-[26px]'>
                  <CircularProgressbarWithChildren
                    value={card.level}
                    strokeWidth={5}
                    styles={buildStyles({
                      trailColor: 'transparent',
                      pathColor: '#4D99D6',
                    })}
                  >
                    <div className='font-extrabold text-2xl leading-6 mt-[5px] text-foreground'>
                      {card.level}
                    </div>
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
    </div>
  );
}
