import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = (props) =>
  makeStyles(() => ({
    cardContainer: {
      height: '40vh',
      width: '80%',
      zIndex: 3,
      boxShadow: '3px 4px 4px rgba(0,0,0,0.25)',
      borderRadius: '20px',
      margin: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
    },
    Image: {
      width: '30%',
      height: '100%',
      background: `url(${props.thumbnail}) no-repeat center center `,
      backgroundSize: 'cover',
    },
    Content: {
      width: '70%',
      height: '100%',
      backgroundColor: 'white',
      padding: '10px',
    },
    Title: {
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
    Subtitle: {
      padding: '10px',
      fontSize: '1em',
    },
    TagContainer: {
      display: 'flex',
      justifySelf: 'center',
      width: '100%',
    },
    Tag: {
      backgroundColor: 'red',
      margin: '10px',
      borderRadius: '20px',
      padding: '10px',
    },
  }));

const data = {
  thumbnail:
    'https://images.unsplash.com/photo-1559294824-627e9738df81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  title: 'The tale of one man and three kids',
  subtitle:
    'Rajesh was 4 years old when his two siblings and his father was moving in as an immigrant into London with 2 euros and no job ...',
  tags: ['job needed', 'carpenter'],
};

const StoryCard = () => {
  const classes = useStyles(data)();
  return (
    <div className={classes.cardContainer}>
      <div className={classes.Image}></div>
      <div className={classes.Content}>
        <div className={classes.Title}>{data.title}</div>
        <div className={classes.Subtitle}>{data.subtitle}</div>
        <div className={classes.TagContainer}>
          {data.tags.map((value) => (
            <div className={classes.Tag}>{value}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
