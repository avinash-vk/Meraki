import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '10px',
  },
  searchContainer: {
    width: '50%',
    padding: '10px',
  },
  search: {
    borderRadius: '100px',
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        className={classes.searchContainer}
        placeholder="Search"
        variant="outlined"
        InputProps={{
          classes: {
            root: classes.search,
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
