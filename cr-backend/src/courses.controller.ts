import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll(): any {
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
  }
}


