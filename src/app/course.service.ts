import { Injectable } from '@angular/core';
import { Course } from './Models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Course[]{
    return [{
      id:1,
      name: 'Calculo',
      capacity: '20',
      schedule: 'lunes'
    }];
  }
}
