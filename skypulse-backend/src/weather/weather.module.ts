import { Module } from '@nestjs/common';
import { WeatherResolver } from './weather.resolver';
import { WeatherApiService } from './weather-api.service';
import { WeatherService } from './weather.service';

@Module({
  providers: [WeatherResolver, WeatherApiService, WeatherService],
})
export class WeatherModule {}
