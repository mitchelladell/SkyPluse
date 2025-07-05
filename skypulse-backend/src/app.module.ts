import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { WeatherModule } from './weather/weather.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

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

    WeatherModule,
  ],
})
export class AppModule {}
