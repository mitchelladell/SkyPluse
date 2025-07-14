import { Module } from '@nestjs/common';
import { CityService } from './cities.service';
import { CityController } from './cities.controller';
import { CityResolver } from './cities.resolver';

@Module({
  controllers: [CityController],
  providers: [CityService, CityResolver],
})
export class CityModule {}
