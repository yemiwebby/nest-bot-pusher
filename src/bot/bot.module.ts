import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { Module } from '@nestjs/common';


@Module({
    components: [BotService],
    controllers: [BotController]
})

export class BotModule {}