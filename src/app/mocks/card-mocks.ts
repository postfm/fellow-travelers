import { fakerRU as faker } from '@faker-js/faker';
import { Female, Genders, Male, Tags } from './mock-data';
import { Countries } from '../constants';

export interface ICard {
  image: string;
  name: string;
  tags: string;
  flag: string[];
  country: string[];
  likes: number;
  level: number;
  transport: boolean[];
}

type TGender = 'male' | 'female';

export function cardMocks() {
  const cards = [];
  const length = faker.number.int({ min: 10, max: 20 });

  for (let i = 0; i < length; i++) {
    const card: ICard = {
      image: '',
      name: '',
      tags: '',
      flag: [],
      country: [],
      likes: 0,
      level: 0,
      transport: [false, false, false, false],
    };
    const gender = Genders[faker.number.int({ min: 0, max: 1 })] as TGender;
    if (gender === ('male' as TGender)) {
      card.image = Male[faker.number.int({ min: 0, max: Male.length - 1 })];
    } else {
      card.image = Female[faker.number.int({ min: 0, max: Female.length - 1 })];
    }
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
    const numberCountries = faker.number.int({ min: 1, max: 3 });
    for (let i = 0; i < numberCountries; i++) {
      const country = Countries[faker.number.int({ min: 0, max: Countries.length - 1 })];
      card.flag[i] = `https://flagcdn.com/h24/${country.code}.webp`;
      card.country[i] = country.name;
    }
    card.likes = faker.number.int({ min: 0, max: 1500 });
    card.level = faker.number.int({ min: 0, max: 100 });
    card.transport = [
      faker.datatype.boolean(),
      faker.datatype.boolean(),
      faker.datatype.boolean(),
      faker.datatype.boolean(),
    ];
    cards.push(card);
  }
  return cards;
}
