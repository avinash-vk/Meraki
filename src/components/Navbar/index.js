import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import ButtonAppBarCollapse from './ButtonAppbarCollapse';
import Newlogo from '../../assets/MERAKI1.png'
const styles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    right: 0,
  },
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    margin: '10px',
    paddingLeft: '16px',
    right: 0,
    position: 'relative',
    width: '100%',
    background: 'transparent',
  },
  listContainer: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  listMenus: {
    float: 'left',
  },
  listItems: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '6px 8px',
    color: 'white',
    textDecoration: 'none',
  },
  navbar: {
    backgroundColor: '#F5564E',
  },
  appTitle: {
    fontSize: '1.5em',
  },
}));
function AppBarCollapse() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse dataTarget="#appbar-collapse" />
      <div className={classes.wrapper} id="appbar-collapse">
        <ul className={classes.listContainer} id="list-appbar-collapse">
        <li className={classes.listMenus}>
            <Link to="/home" className={classes.listItems}>
              Home
            </Link>
          </li>
          <li className={classes.listMenus}>
            <Link to="/story/new/:id" className={classes.listItems}>
              Create Stories
            </Link>
          </li>
          <li className={classes.listMenus}>
            <Link to="/signin" className={classes.listItems}>
              Sign In
            </Link>
          </li>
          <li className={classes.listMenus}>
            <Link to="/signup" className={classes.listItems}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

const Navbar = (props) => {
  const classes = styles();
  const logo =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png';
  
    return (
    <AppBar position="sticky" className={classes.navbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Menu"
          className={classes.toggleDrawer}
          onClick={classes.slideDrawer}
        >
          <img src={Newlogo} className="img-xxs" height={50} />
        </IconButton>
       
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
