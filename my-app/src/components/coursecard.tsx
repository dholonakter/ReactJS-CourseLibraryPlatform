import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import courses from './courses.json';
import Course from './Cart';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 1px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  courses:{
    padding: 20
  }
});


export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Typography className="courses">
      {courses.map(course=>{
        return(
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2">
        {course.title}

        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Arjan Egges, Utrecht University
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          {course.demoCourse}
          <br />
          {course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>

    </Card>
        )
     })}
    </Typography>
  );
}
