import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
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
      background: `url(${props.imageUrl}) no-repeat center center `,
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

const StoryCard = (props) => {
  const [isClicked, setClick] = useState(false);

  const {story} = props;
  console.log('STORY', story);
  const classes = useStyles(story)();
  if (isClicked) {
    return (
      <Redirect
        to={{
          pathname: `/story/${story.uid}`,
          state: {story: story},
        }}
      />
    );
  }
  return (
    <div
      className={classes.cardContainer}
      onClick={() => {
        setClick(true);
      }}
    >
      <div className={classes.Image}></div>
      <div className={classes.Content}>
        <div className={classes.Title}>{story.title}</div>
        <div className={classes.Subtitle}>{story.content}</div>
        <div className={classes.TagContainer}>
          {Object.keys(story.tags).map((value) => (
            <div className={classes.Tag}>{story.tags[value]}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
