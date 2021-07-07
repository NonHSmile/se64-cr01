import React, { useEffect, useState } from 'react';

import LoginForm from './components/LoginForm';
import About from './components/About';
import CourseReview from './components/CourseReview';

import './App.css';

const App = () => {

  return (
    <div className="App"> 
      <CourseReview />
      <LoginForm />
      <About />
    </div>
  );
} 

export default App;
