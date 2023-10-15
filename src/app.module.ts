import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MutationService } from './mutation-service/mutation.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MutationService],
})
export class AppModule {}
