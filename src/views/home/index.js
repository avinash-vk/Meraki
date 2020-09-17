import React from 'react';
import Maps from './Maps';
import StatusBar from './StatusBar';
import SearchBar from './SearchBar';
import StoryCard from '../story/storyCard';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import GMap from './Maps/googlemaps'
const useStyles = makeStyles(() => ({
  storyContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  storyHeading: {
    marginLeft: '20px',
    display: 'inline-block',
    //textDecoration: 'underline',
    borderBottom: '4px solid red',
    lineHeight: '0px',
    borderBottomLeftRadius: '10px',
  },
  storyList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();
  const location = [
    {address: 'Plumber',
    lat: 37.42216,
    lng: -120.08427},
    {address: 'Carpenter',
    lat: 37.42216,
    lng: -122.08427},
    {address: 'Maid',
    lat: 38.42216,
    lng: -122.08427}

  ];
  return (
    <div>
      <Maps />
      <GMap location={location} zoomLevel={17}/>
      <StatusBar />
      <SearchBar />
      <div className={classes.storyHeading}>
        <h1>Stories</h1>
      </div>
      <div className={classes.storyContainer}>
        <div className={classes.storyList}>
          <StoryCard />
          <StoryCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
