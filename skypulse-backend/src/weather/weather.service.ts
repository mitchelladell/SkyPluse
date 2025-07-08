import { Injectable, OnModuleInit } from '@nestjs/common';
import { WeatherApiService } from './weather-api.service';

const cities = ['New York', 'Paris', 'Amsterdam', 'London'];

@Injectable()
export class WeatherService implements OnModuleInit {
  constructor(private readonly weatherApi: WeatherApiService) {}

  onModuleInit() {
    setInterval(() => {
      cities.forEach((city) => this.weatherApi.fetchAndPublish(city));
    }, 5000); // every 5 seconds
  }
}
