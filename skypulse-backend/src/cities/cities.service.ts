import { Injectable } from '@nestjs/common';
import cities from './cities.json'; // assuming it's a string[]

@Injectable()
export class CityService {
  searchCities(search?: string): { value: string; label: string }[] {
    if (!search) {
      return cities.map((element) => ({
        value: element,
        label: element,
      }));
    }

    const lowerSearch = search.toLowerCase();

    return (
      cities
        .filter((element) => element.toLowerCase().includes(lowerSearch))
        //.slice(0, 20)
        .map((element) => ({
          value: element,
          label: element,
        }))
    );
  }
}
