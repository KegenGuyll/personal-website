import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuList from './MenuList';

interface Props {
  open: boolean;
  toggleMenu: VoidFunction;
}

export const MenuComponet = (props: Props) => {
  const { open, toggleMenu } = props;
  return (
    <Drawer anchor='left' open={open} onClose={toggleMenu}>
      <MenuList toggleMenu={toggleMenu} />
    </Drawer>
  );
};
