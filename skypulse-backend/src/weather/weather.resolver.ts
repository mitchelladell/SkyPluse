import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { WeatherUpdate } from './weather.model';
import { redisPubSub } from 'src/pubsub/redis.pubsub';
import { Args } from '@nestjs/graphql';

@Resolver(() => WeatherUpdate)
export class WeatherResolver {
  // ✅ Dummy root query to satisfy GraphQL schema
  @Query(() => String)
  ping() {
    return 'pong';
  }

  @Subscription(() => WeatherUpdate, {
    name: 'weatherUpdates',
    filter: (payload, variables) => {
      return payload.weatherUpdates.city === variables.city;
    },
  })
  weatherUpdates(@Args('city') city: string) {
    return redisPubSub.asyncIterator('weatherUpdates');
  }
}
