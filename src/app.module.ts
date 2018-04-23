import { TableService } from './table/table.service';
import { TableController } from './table/table.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController, TableController],
  components: [TableService],
})
export class AppModule {}
