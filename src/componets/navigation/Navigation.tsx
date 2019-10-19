import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter, RouteComponentProps } from 'react-router';
import { MenuComponet } from '../menu/MenuComponet';

interface Props extends RouteComponentProps {
  children?: any;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Navbar = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLocationTitle = () => {
    const { location } = props;
    let title: string;

    if (location.pathname === '/') {
      title = 'Home';
    } else {
      title = location.pathname.replace('/', '');
    }

    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  return (
    <div className={classes.root}>
      <AppBar color='primary'>
        <Toolbar>
          <IconButton
            onClick={toggleMenu}
            className={classes.menuButton}
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit'>
            {handleLocationTitle()}
          </Typography>
        </Toolbar>
      </AppBar>
      <MenuComponet open={open} toggleMenu={toggleMenu} />
      {props.children}
    </div>
  );
};

export default withRouter(Navbar);
