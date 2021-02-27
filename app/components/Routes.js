import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './About';
import Main from './Main';
import Menu from './Menu';
import Hours from './Hours';
import Contact from './Contact';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/hours'>Hours/Location</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us/Delivery</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/hours'>
            <Hours />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
