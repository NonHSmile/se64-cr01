import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginForm from './components/LoginForm';
import About from './components/About';
import CourseReview from './components/CourseReview';

import './App.css';

const App = () => {

  return (
    <Router>
      <div className="App"> 
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <CourseReview />
          </Route>
        </Switch>
      </div>
    </Router>

  );
} 

export default App;
