import { BotService } from './bot.service';
import { Controller, Get, Res, Body, Post, HttpStatus } from '@nestjs/common';

@Controller('/')
export class BotController {
    constructor(private botService:BotService){}
    
    @Get()
    dialogueHomepage(@Res() res) {
        res.render('index');
    }

    @Post()
    startDialogue(@Res() res, @Body() data) {
        this.botService.sendDialogue(data);
        res.status(HttpStatus.OK).send("Posted successfully");
    }

}