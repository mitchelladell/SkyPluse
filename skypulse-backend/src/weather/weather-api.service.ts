import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { redisPubSub } from 'src/pubsub/redis.pubsub';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherApiService {
  private readonly logger = new Logger(WeatherApiService.name);
  private readonly BASE_URL = 'http://api.weatherapi.com/v1/current.json';
  private readonly API_KEY: string | undefined;

  constructor(private configService: ConfigService) {
    this.API_KEY = this.configService.get<string>('WEATHER_API_KEY');
  }

  async fetchAndPublish(city: string) {
    try {
      const response = await axios.get(this.BASE_URL, {
        params: {
          key: this.API_KEY,
          q: city,
        },
      });

      await redisPubSub.publish('weatherUpdates', {
        weatherUpdates: {
          city: response.data.location.name,
          temperature: response.data.current.temp_c,
          location: response.data.location.country,
          humidity: response.data.current.humidity,
        },
      });

      this.logger.log(`Published weather for ${city}`);
    } catch (error) {
      this.logger.error('Error fetching weather data:', error.message);
    }
  }
}
