// src/pubsub/redis.pubsub.ts
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { RedisOptions } from 'ioredis';

const options: RedisOptions = {
  host: 'localhost',
  port: 6379,
  retryStrategy: (times) => Math.min(times * 50, 2000),
};

export const redisPubSub = new RedisPubSub({
  connection: options,
});
