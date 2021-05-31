import Grid from "@material-ui/core/Grid"
import CourseCard from '../components/coursecard'
import { makeStyles } from '@material-ui/core/styles';
import courses from '../courses.json'


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
          
        {courses.map(course => 
        <Grid item ><CourseCard course={course.title} 
        /></Grid>)
                
        }

        </Grid>

    )
    








  }