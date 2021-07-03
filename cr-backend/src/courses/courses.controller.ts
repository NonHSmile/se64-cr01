import { Controller, Get , Post ,Body, HttpException, HttpStatus } from '@nestjs/common';
import Course from "./course.entity";
import { CoursesService } from './courses.sevice';
import { CreateCourseDto } from './dto/create-course.dto';

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

}


