import { Controller, Get , Post ,Body, HttpException, HttpStatus, Param } from '@nestjs/common';

import { CoursesService } from './courses.sevice';
import { CreateCourseDto } from './dto/create-course.dto';

import Course from "./course.entity";
import Review from './review.entity';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService : CoursesService){}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }
  
  @Post()
  async create(@Body() createCourseDto: CreateCourseDto){
    if((createCourseDto.number !== undefined)&&(createCourseDto.title !== undefined)){
      const newCourse = this.coursesService.create(createCourseDto);
      return newCourse;
    }
    else{
      throw new HttpException('Bad request',HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':courseID/reviews')
  async findAllReviews(@Param('courseID') courseID:string): Promise<Review[]>{
    return this.coursesService.findAllReviews(courseID);
  }

}


