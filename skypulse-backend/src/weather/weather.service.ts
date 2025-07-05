import { redisPubSub } from 'src/pubsub/redis.pubsub';

export class WeatherService {
  startMockPublisher() {
    setInterval(() => {
      redisPubSub.publish('weatherUpdates', {
        weatherUpdates: {
          city: 'London',
          temperature: 25 + Math.random() * 5,
          humidity: 60 + Math.random() * 10,
        },
      });
    }, 5000); // every 5 sec
  }
}
