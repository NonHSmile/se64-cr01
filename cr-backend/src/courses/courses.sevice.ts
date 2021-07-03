import { Injectable } from "@nestjs/common";
import Course from "./course.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { create } from "domain";
import { CreateCourseDto } from "./dto/create-course.dto";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course> 
  ){}

  async findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  async create(createCourseDto: CreateCourseDto) {
    return this.coursesRepository.save(createCourseDto); 
  }

}