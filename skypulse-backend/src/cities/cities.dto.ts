import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class cityDTO {
  @Field()
  value: string;
  @Field()
  label: string;
}
