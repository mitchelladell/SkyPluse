// city.resolver.ts
import { Resolver, Query, Args } from '@nestjs/graphql';
import { CityService } from './cities.service';
import { cityDTO } from './cities.dto';

@Resolver(() => cityDTO)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Query(() => [cityDTO])
  searchCities(@Args('q') query: string): cityDTO[] {
    return this.cityService.searchCities(query);
  }
}
