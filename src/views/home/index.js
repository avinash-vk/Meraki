import React, {useEffect, useState} from 'react';
import Maps from './Maps';
import StatusBar from './StatusBar';
import SearchBar from './SearchBar';
import StoryCard from '../story/storyCard';
import {withStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import GMap from './Maps/googlemaps';
import API from '../../api';

const useStyles = () => ({
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
});

class Home extends React.Component {
  state = {
    loading: true,
    stories: [],
  };
  componentDidMount = async () => {
    let output = await API.GetStory();
    this.setState({
      loading: false,
      stories: output.data.data,
    });
    console.log(this.state.stories);
  };

  location = [
    {address: 'Plumber', lat: 37.42216, lng: -120.08427},
    {address: 'Carpenter', lat: 37.42216, lng: -122.08427},
    {address: 'Maid', lat: 38.42216, lng: -122.08427},
  ];
  render() {
    const {classes} = this.props;
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <GMap location={this.location} zoomLevel={7} />
          <StatusBar />
          <SearchBar />
          <div className={classes.storyHeading}>
            <h1>Stories</h1>
          </div>
          <div className={classes.storyContainer}>
            <div className={classes.storyList}>
              {this.state.stories.map((story) => {
                return <StoryCard story={story} />;
              })}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withStyles(useStyles)(Home);
