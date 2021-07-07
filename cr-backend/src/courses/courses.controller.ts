import { Controller, Get , Post ,Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ObjectID } from 'mongodb';

import { CoursesService } from './courses.sevice';
import { ParseObjectIdPipe } from '../common/pipes';

import { CreateCourseDto } from './dto/create-course.dto';
import { CreateReviewDto } from './dto/create-review.dto';

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
    return this.coursesService.create(createCourseDto);
  }

  @Get(':courseID/reviews')
  async findAllReviews(@Param('courseID', ParseObjectIdPipe) courseID: ObjectID): Promise<Review[]>{
    return this.coursesService.findAllReviews(courseID);
  }

  @Post(':courseID/reviews')
  async createReview( @Param('courseID', ParseObjectIdPipe) courseID:ObjectID , 
                      @Body() createReviewDto: CreateReviewDto){

    createReviewDto.courseID = courseID;
    return this.coursesService.createReview(createReviewDto);
  }

}


