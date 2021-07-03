import React, { useEffect, useState } from 'react';
import { Course } from './interfaces';
import './App.css';
import CourseItem from './components/CourseItem';
import NewCourseForm from './components/newCourseForm'; 

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const toggleFormVisible = () => {
    setFormVisible(!formVisible);
  }

  useEffect(() => {
    fetch ('http://localhost:3000/courses')
    .then(res => res.json())
    .then(courses =>  {
      console.log(courses);
      setCourses(courses);
    });

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
        <NewCourseForm />
      }

    </div>
  );
} 


export default App;
