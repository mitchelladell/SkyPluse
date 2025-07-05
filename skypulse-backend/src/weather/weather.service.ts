import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  getCurrentWeather(): string {
    // TODO: Call real weather API or Redis cache
    return 'Sunny 25°C';
  }

  // Later, you can add methods to publish updates via PubSub or NATS
}
