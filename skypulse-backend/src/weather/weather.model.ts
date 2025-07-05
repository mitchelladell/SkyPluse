import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class WeatherUpdate {
  @Field()
  city: string;

  @Field(() => Float)
  temperature: number;

  @Field(() => Float)
  humidity: number;

  @Field()
  location: string;
}
