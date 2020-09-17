import React from 'react';
import './landing.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Man from './assets/worker.jpg';
import {Button} from '@material-ui/core';
import API from '../../api';
import {withStyles} from '@material-ui/core/styles';
const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: '#F5564E',
    '&:hover': {
      backgroundColor: '#F5564E',
    },
    fontSize: '4vh',
    marginLeft: '16%',
    marginTop: '2%',
  },
}))(Button);

const Landing = () => {
  return (
    <div className="container">
      <div className="headercontainer">
        <Navbar />

        <button
          onClick={async () => {
            try {
              const data = {
                uid: '1234',
                imageUrl:
                  'https://images.unsplash.com/photo-1599687349533-82f24a0b62cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                title: 'Its a great day',
                target: {
                  name: 'joe',
                  age: 20,
                  gender: 'male',
                  contact: '874832438247',
                  location: {
                    lat: '12.9772793',
                    long: '77.671645',
                  },
                },
                content: 'it was indeed a great day',
                tags: ['plumber', 'job needed'],
              };
              console.log('Checking', await API.CreateStory(data));
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Click me
        </button>
        <div>
          <section className="first-col">
            <text
              className="tagline"
              style={{float: 'right', textAlign: 'right'}}
            >
              We <text className="white-text">Make</text>
              <br></br>
              Lives <text className="white-text">Better</text>
            </text>
          </section>
          <section className="second-col">
            <img src={Man} className="image"></img>
          </section>
        </div>
      </div>
      <div className="purposecontainer">
        <div style={{float: 'right', padding: '6vh'}}>
          <text
            style={{
              color: '#F5564E',
              float: 'right',
              fontSize: '4vh',
              fontWeight: 'bold',
            }}
          >
            WHAT DO WE DO.
          </text>
          <br></br>
          <text style={{color: 'white', fontSize: '8vh', float: 'right'}}>
            Fighting Unemployment
          </text>
          <br></br>
          <text
            style={{
              color: '#F5564E',
              opacity: 0.7,
              fontSize: '6vh',
              float: 'right',
            }}
          >
            One story at a time
          </text>
          <br></br>
        </div>
        <div style={{float: 'left', padding: '6vh'}}>
          <section className="first-col" style={{width: '60%'}}>
            <text
              style={{color: 'white', fontSize: '4vh', fontWeight: 'lighter'}}
            >
              We believe that no one deserves to have anything short of a basic
              stable livelihood. And we believe that doing good, is the purest
              form of humanity.Making a life is something that goes a long way.{' '}
            </text>
          </section>
          <ColorButton variant="contained" size="large">
            JOIN US
          </ColorButton>
        </div>
      </div>
      <Contact id="contact" />
    </div>
  );
};
export default Landing;
