import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    margin: '10px',
    boxShadow: 'none',
  },
  icon: {
    color: 'white',
    fontWeight: 'bold',
  },
});
class ButtonAppBarCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wrapper: this.props.dataTarget.replace(/#/, ''),
      listMenus: this.props.menu,
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }
  toggleCollapse(e) {
    e.preventDefault();
    let collapsed = document.getElementById(this.state.wrapper);
    if (collapsed.style.display === 'block') {
      collapsed.style.display = 'none';
    } else {
      collapsed.style.display = 'block';
      collapsed.style.backgroundColor = '#000';
      collapsed.style.top = '50px';
      collapsed.style.textAlign = 'center';

      collapsed.style.position = 'absolute';
      collapsed.style.zIndex = 1450;
    }
  }
  render() {
    const classes = this.props.classes;
    return (
      <IconButton
        className={classes.buttonCollapse}
        onClick={this.toggleCollapse}
      >
        <MenuIcon className={classes.icon} />
      </IconButton>
    );
  }
}

export default withStyles(styles)(ButtonAppBarCollapse);
