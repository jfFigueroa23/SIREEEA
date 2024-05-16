import { Module } from '@nestjs/common';
import { DatabaseSetUp } from './setup.service';

@Module({
  imports: [],
  exports: [DatabaseSetUp],
})
export class SetupModule {}
