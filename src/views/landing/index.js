import React from 'react';
import './landing.css';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Man from './assets/worker.jpg'
import { Button } from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: '#F5564E',
    '&:hover': {
      backgroundColor: '#F5564E',
    },
  },
}))(Button);

const Landing = () => {
  return  <div className="container">
    <div className="headercontainer">
        <Navbar/>
        <div>
        <section className="first-col">
          <text className="tagline">We Make</text><br></br><text className="tagline">Lives Better</text>
        </section>
        <section className="second-col">
          <img src={Man} className="image"></img>
        </section>
        </div>
    </div>
    <div className="purposecontainer">
      <div style={{float:'right',padding:"6vh"}}>
          <text style={{color:'#F5564E',float:'right'}}>WHAT DO WE DO.</text><br></br>
          <text style={{color:'white',fontSize:"8vh",float:'right'}}>Fighting Unemployment</text><br></br>
          <text style={{color:'#F5564E',opacity:0.7,fontSize:"6vh",float:'right'}}>One story at a time</text><br></br>
      </div>
      <div style={{float:'left',padding:"6vh"}}>
        <section className="first-col" style={{width:"60%"}}>
        <text style={{color:'white',fontSize:"4vh",fontWeight:"lighter"}}>We believe that no one deserves to have anything short of a basic stable livelihood. And we believe that doing good, is the purest form of humanity.Making a life is something that goes a long way. </text>
        </section>
        <section className="second-col" style={{alignSelf:"center"}}>
        <ColorButton variant="contained" size="large" color="primary">JOIN US</ColorButton>
        </section>
      </div>
        </div>
        <Contact/>
  </div>
};
export default Landing;
