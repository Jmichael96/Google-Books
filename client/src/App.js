import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Saved from './pages/Saved.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Nav from './components/Nav/Nav.jsx';

import './App.css';

const App = () => {
  return (
    <Router>
      <article>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
        <footer>
          &copy; 2018
        </footer>
      </article>
    </Router>
  );
}

export default App;