import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { WeatherModule } from './weather/weather.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { CityModule } from './cities/cities.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      // Auto-generate the GraphQL schema file
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

      // Enable subscriptions over WebSocket
      subscriptions: {
        'graphql-ws': true,
        // optional: support for legacy tools (Apollo Client v2, Playground)
        'subscriptions-transport-ws': true,
      },

      // Enable GraphQL Playground in browser
      playground: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true, // makes config available app-wide
    }),

    WeatherModule,
    CityModule,
  ],
})
export class AppModule {}
