import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prima.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
