import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.sevice';
import Course from './entities/course.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test2',
      entities: [Course],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Course]),
  ],
  controllers: [AppController , CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
