import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from '../navigation/Navigation';

interface Props {
  children: any;
}

export const Layout = (props: Props) => (
  <Navbar>
    <Container>
      <div style={{ height: '7vh' }} />
      {props.children}
    </Container>
  </Navbar>
);
