import React, { useEffect, useState } from 'react';
import { Course } from './interfaces';
import './App.css';
import CourseItem from './components/CourseItem';
import NewCourseForm from './components/newCourseForm'; 

import CoursesService from './services/CoursesService';

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const toggleFormVisible = () => {
    setFormVisible(!formVisible);
  }

  const fetchCourses = () => {
    CoursesService.fetchCourses()
    .then(courses => {
      setCourses(courses);
    });
  }
  const handleNewCourseCreated = (course: Course) => {
    fetchCourses();
    setFormVisible(false);
  }

  useEffect(() => {
    fetchCourses();
  },[]);

  return (
    <div className="App"> 
      <ul>
        {courses.map(item => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
      <button onClick={toggleFormVisible}>New course</button>
      {
        formVisible && 
        <NewCourseForm onNewCourseCreated={handleNewCourseCreated}/>
      }

    </div>
  );
} 


export default App;
