import React from 'react'
import Grid from "@material-ui/core/Grid"
import CourseCard from './coursecard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft:'40px',
      paddingRight:'40px',
      paddingTop: '40px'
    }
  
  });

export default function Home(){
    const classes=useStyles();
    

    return( 

        <Grid container spacing={3}   className={classes.gridContainer} justify="center">
        
        <Grid item xs={4}>
            <CourseCard/>
        </Grid>
       
        <Grid item xs={4}>
        <CourseCard/>

        </Grid>
        
        <Grid item xs={4}>
        <CourseCard/>

        </Grid>
       
        
       

      </Grid>
    )
}