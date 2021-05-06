import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Searchbar/Search'
import Course from './components/Course/Course'
import CourseCard from './components/Course/coursecard'
import Grid from "@material-ui/core/Grid"


function App() {
  return (
    <div className="App">
      <Search/>
      <Grid container>
        <Grid item xs={4}>
         <CourseCard/>

       </Grid>
      </Grid>
      <Grid item xs={4}>
         <CourseCard/>

       </Grid>
       <Grid item xs={4}>
         <CourseCard/>

       </Grid>
       <Grid item xs={4}>
         <CourseCard/>

       </Grid>
      
    </div>
  );
}

export default App;
