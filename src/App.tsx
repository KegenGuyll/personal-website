import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './componets/layout/Layout';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './componets/theme/ThemeController';
import { Home } from './componets/pages/home/Home';
import { About } from './componets/pages/about/About';
import { Blog } from './componets/pages/blog/Blog';
import { Projects } from './componets/pages/projects/Projects';
import { Resume } from './componets/pages/resume/Resume';

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </MuiThemeProvider>
);

export default App;
