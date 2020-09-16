import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
    zIndex: 10,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#F5564E',
  },
  subTitle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  item: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const StatusBar = () => {
  const classes = useStyles();

  const data = {
    'Waiting for your help': 64,
    'helped users': 64,
    'No of users': 64,
  };

  return (
    <div className={classes.container}>
      {Object.keys(data).map((key) => (
        <div className={classes.item}>
          <span className={classes.title}>{key}</span>
          <span className={classes.subTitle}>{data[key]}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusBar;
