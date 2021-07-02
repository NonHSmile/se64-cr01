import { Injectable } from "@nestjs/common";
import Course from "./course.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course> 
  ){}

  async findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
    
    /*
    return [ 
      {
        id: '100',
        number: '01204111',
        title: 'Computer and Programming'
      },
      {
        id: '123',
        number: '01223111',
        title: 'Happy Smile'
      },
      {
        id: '132',
        number: '01204091',
        title: 'Wang Han Wen'
      }
    ];
    */
  }
}