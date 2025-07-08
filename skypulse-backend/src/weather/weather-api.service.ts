import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { redisPubSub } from 'src/pubsub/redis.pubsub';

@Injectable()
export class WeatherApiService {
  private readonly logger = new Logger(WeatherApiService.name);
  private readonly API_KEY = 'f492c2da3b844ce9b98164208250507'; // Replace with env later
  private readonly BASE_URL = 'http://api.weatherapi.com/v1/current.json';

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
