import { Get, Controller, Res } from '@nestjs/common';

@Controller('home')
export class AppController {
  @Get()
  root(@Res() res) {
    res.render('index');
  }
}
