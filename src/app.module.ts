import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BotModule } from 'bot/bot.module';

@Module({
  imports: [BotModule],
  controllers: [AppController],
  components: [],
})
export class AppModule {}
