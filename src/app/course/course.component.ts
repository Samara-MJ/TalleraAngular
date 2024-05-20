import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Array<Course> = [];
  selectedCourse: Course | null = null;

  constructor(private courseService: CourseService) { }
 
  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  onSelect(target: any) {
    const selectedIndex = target.selectedIndex;
    this.selectedCourse = this.courses[selectedIndex];
  }
}

