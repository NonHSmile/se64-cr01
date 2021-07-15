import React, { useEffect, useState } from 'react';

import { Course } from '../interfaces';
import CourseItem from './CourseItem';
import NewCourseForm from './newCourseForm';

import CoursesService from '../services/CoursesService';
import AuthService from '../services/AuthService';
import { Redirect } from 'react-router-dom';

const CourseReview = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsUserLoggedIn(AuthService.isUserLoggedIn());
  },[]);


  const toggleFormVisible = () => {
    setIsUserLoggedIn(AuthService.isUserLoggedIn());
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
    <div className="CourseReview"> 
      <ul>
        {courses.map(item => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
      <button onClick={toggleFormVisible}>New course</button>
      {
        (formVisible && isUserLoggedIn) && 
        <NewCourseForm onNewCourseCreated={handleNewCourseCreated}/>
      }
      {
        (formVisible && !(isUserLoggedIn)) && 
        <Redirect to="/login"/>
      }
      
    </div>
  );
} 

export default CourseReview;
