import { Resolver, Query, Subscription } from '@nestjs/graphql';
import { redisPubSub } from '../pubsub/redis.pubsub';

@Resolver()
export class WeatherResolver {
  @Query(() => String)
  currentWeather() {
    return 'Sunny ☀️'; // stub for now
  }

  @Subscription(() => String, {
    resolve: (payload) => payload.weatherUpdates,
  })
  weatherUpdates() {
    return redisPubSub.asyncIterator('weatherUpdates');
  }
}
