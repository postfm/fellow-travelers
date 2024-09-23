import { fakerRU as faker } from '@faker-js/faker';
import { Genders, Tags } from './mock-data';
import { Countries } from '../constants';

interface ICard {
  name: string;
  tags: string;
  flag: string;
  country: string;
  likes: number;
  level: number;
}

type TGender = 'male' | 'female';
const cards: ICard[] = [];

export function cardMocks() {
  const length = faker.number.int({ min: 10, max: 20 });
  const card: ICard = {
    name: '',
    tags: '',
    flag: '',
    country: '',
    likes: 0,
    level: 0,
  };

  for (let i = 0; i < length; i++) {
    const gender = Genders[faker.number.int({ min: 1, max: 2 })] as TGender;
    const firstName = faker.person.firstName(gender);
    const lastName = faker.person.lastName(gender);
    card.name = `${firstName} ${lastName}`;
    card.tags = `#${Tags[faker.number.int({ min: 0, max: Tags.length - 1 })]} #${
      Tags[
        faker.number.int({
          min: 0,
          max: Tags.length - 1,
        })
      ]
    } #${Tags[faker.number.int({ min: 0, max: Tags.length - 1 })]} #${
      Tags[
        faker.number.int({
          min: 0,
          max: Tags.length - 1,
        })
      ]
    }`;
    const country = Countries[faker.number.int({ min: 0, max: Countries.length - 1 })];
    card.flag = `https://flagcdn.com/h24/${country.code}.webp`;
    card.country = country.name;
    card.likes = faker.number.int({ min: 0, max: 1500 });
    card.level = faker.number.int({ min: 0, max: 100 });
    cards.push(card);
    console.log(cards);
  }
}
