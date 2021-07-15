import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AuthService from './services/AuthService';

import CourseReview from './components/CourseReview';
import LoginForm from './components/LoginForm';
import About from './components/About';

import './App.css';

const App = () => {
  const [username, setUsername] = useState<string|null>(null);

  useEffect(() => {
    setUsername(AuthService.getUsername());
  },[]);

  const handleUserLogin = () => {
    setUsername(AuthService.getUsername());
  }

  const logout = () => {
    AuthService.logoutUser();
    setUsername(null);
  };

  return (
    <Router>
      <div className="App"> 
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/about'>About</Link></li>
            { username && (
              <li>
                (user: {username})
                <button onClick={logout}>Log out</button>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route path='/login'>
            <LoginForm loginCallBack={handleUserLogin}/>
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
