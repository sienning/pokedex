import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import General from './components/General';
import { Menu, Container, Card } from 'semantic-ui-react';

import './App.css';
import PokeDetails from './components/PokeDetails';
import Filtre from './components/Filtre';


class App extends Component{
  render(){
    return (
      <div className="App">
          

        <Router>
          <div>
          <Menu attached='top'>
            <Link to="/"><Menu.Item name='pokedex'/></Link>
              <Menu.Menu position='right'>
                {/* <Filtre handleSubmit={this.handleSubmit} value={this.state.value}></Filtre> */}
              </Menu.Menu>
          </Menu>

            <Switch>
              <Route exact path="/">
                <General></General>
              </Route>
              <Route path="/about">
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
