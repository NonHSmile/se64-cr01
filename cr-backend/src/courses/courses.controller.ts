import { Controller, Get } from '@nestjs/common';
import  Course  from "./course.entity";
import { CoursesService } from './courses.sevice';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService : CoursesService){}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }
    
}


