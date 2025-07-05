import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { WeatherUpdate } from './weather.model';
import { redisPubSub } from 'src/pubsub/redis.pubsub';

@Resolver(() => WeatherUpdate)
export class WeatherResolver {
  // ✅ Dummy root query to satisfy GraphQL schema
  @Query(() => String)
  ping() {
    return 'pong';
  }

  @Subscription(() => WeatherUpdate, {
    name: 'weatherUpdates',
  })
  weatherUpdates() {
    return redisPubSub.asyncIterator('weatherUpdates');
  }
}
