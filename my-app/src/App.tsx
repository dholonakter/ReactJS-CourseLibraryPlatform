import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchBar'
import SearchCourse from './pages/SearchPage'
import Cart from './components/Cart'

import filtercourse from './pages/SearchPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import Home from './pages/HomePage';
import Tab from './components/CourseTab'
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
              
          </Switch>
   
    </div>
    </Router>


  );
}

export default App;
