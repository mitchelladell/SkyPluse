import { Injectable, OnModuleInit } from '@nestjs/common';
import { redisPubSub } from 'src/pubsub/redis.pubsub';

@Injectable()
export class WeatherService implements OnModuleInit {
  onModuleInit() {
    this.startMockPublisher();
  }

  startMockPublisher() {
    setInterval(() => {
      redisPubSub.publish('weatherUpdates', {
        weatherUpdates: {
          city: 'London',
          temperature: 25 + Math.random() * 5,
          humidity: 60 + Math.random() * 10,
        },
      });
    }, 5000);
  }
}
