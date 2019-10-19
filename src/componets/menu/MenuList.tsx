import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Inbox from '@material-ui/icons/Inbox';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
  toggleMenu: VoidFunction;
}

const MenuList = (props: Props) => {
  const handleRoute = (pathName: string) => {
    const { history, toggleMenu } = props;
    const redirect = pathName.charAt(0).toLowerCase() + pathName.slice(1);
    if (redirect === 'home') {
      toggleMenu();
      history.push('/');
    } else {
      toggleMenu();
      history.push(`/${redirect}`);
    }
  };

  return (
    <List>
      {['Home', 'About', 'Blog', 'Projects', 'Resume'].map((text, index) => (
        <ListItem onClick={() => handleRoute(text)} button key={text}>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default withRouter(MenuList);
