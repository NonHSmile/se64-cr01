import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import Course from './courses/course.entity';
import Review from './courses/review.entity';

import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test2',
      entities: [Course, Review],
      synchronize: true,
    }),

    CoursesModule,

    UsersModule,

    AuthModule,
  ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
