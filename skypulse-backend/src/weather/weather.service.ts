import { Injectable, OnModuleInit } from '@nestjs/common';
import { WeatherApiService } from './weather-api.service';

@Injectable()
export class WeatherService implements OnModuleInit {
  constructor(private readonly weatherApi: WeatherApiService) {}

  onModuleInit() {
    setInterval(() => {
      this.weatherApi.fetchAndPublish('London');
    }, 10000); // every 10 seconds
  }
}
