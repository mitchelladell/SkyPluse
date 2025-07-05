import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';

const options = {
  host: 'localhost', // or your Redis host
  port: 6379,
  retryStrategy: (times) => Math.min(times * 50, 2000),
};

export const redisPubSub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options),
});
