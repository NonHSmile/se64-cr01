import { Controller, Get , Post ,Body, HttpException, HttpStatus, Param } from '@nestjs/common';

import { CoursesService } from './courses.sevice';

import { CreateCourseDto } from './dto/create-course.dto';
import { CreateReviewDto } from './dto/create-review.dto';

import Course from "./course.entity";
import Review from './review.entity';
import { ObjectID } from 'mongodb';

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

  @Post(':courseID/reviews')
  async createReview( @Param('courseID') courseID:string , 
                      @Body() createReviewDto: CreateReviewDto){
    if((createReviewDto.score !== undefined)&&(createReviewDto.comment !== undefined)){
      createReviewDto.courseID = new ObjectID(courseID);
      const newReview = this.coursesService.createReview(createReviewDto);
      return newReview;
    }
    else{
      throw new HttpException('Bad request',HttpStatus.BAD_REQUEST);
    }
  }

}


