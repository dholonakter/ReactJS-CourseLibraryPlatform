import Grid from "@material-ui/core/Grid"
import CourseCard from './coursecard'
import { makeStyles } from '@material-ui/core/styles';
import courses from './courses.json';


const useStyles = makeStyles({
    gridContainer: {
      paddingLeft:'40px',
      paddingRight:'40px',
      paddingTop: '40px'
    }
  
  });

export default function Home(){
    const classes=useStyles();
    // {courses.map(()=>{
    // 
    

    return( 
       
        <Grid container spacing={3}   className={classes.gridContainer} justify="center">
           {/* {courses.map(()=>{
            
          })}   
        <Grid item xs={4}>
         
            <CourseCard courseTitle="c sharp"/>
        </Grid>
       
        <Grid item xs={4}>
        <CourseCard   courseTitle=" Web development"/>

        </Grid>
        
        <Grid item xs={4}>
        <CourseCard courseTitle=" Python Programming"/>

        </Grid> */}
        {courses.map(course => 
        <Grid item ><CourseCard course={course.title} /></Grid>)}

        </Grid>

    )
    
}