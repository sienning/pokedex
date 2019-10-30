import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import General from './components/General';
import { Menu } from 'semantic-ui-react';

import './App.css';
import PokeDetails from './components/PokeDetails';


class App extends Component {
  render() {
    return (
      <div className="App">


        <Router>
          <div>
            <Menu attached='top'>
              <Link to="/">
                <Menu.Item name='pokedex' />
              </Link>
            </Menu>

            <Switch>
              <Route exact path="/">
                <General></General>
              </Route>
              <Route path="/pokmemon">
                <PokeDetails></PokeDetails>
              </Route>
            </Switch>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
