import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import SearchCourse from './components/searchfilter'
import Course from './components/Course'
import Cart from './components/Cart'

import filtercourse from './components/searchfilter'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CourseCard from './components/coursecard'
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home';
import Filter from './components/Filter'
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft:'40px',
    paddingRight:'40px',
    paddingTop: '40px'
  }
});

function App() {

  return (
    <Router>

  
   <div className="App">
      <Search/>
      
      <Switch>
              <Route exact path='/' >
                <Home/>
              </Route>
              <Route  path='/searchfilter' >
                < SearchCourse/>
                <Filter/>
              </Route>

              <Route  path='/Cart' >
                <Cart/>
              </Route>
              
              <Route  path='/Course' >
                <Course/>
              </Route>
             
             
          </Switch>
   
    </div>
    </Router>


  );
}

export default App;
