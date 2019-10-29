import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import General from './components/General';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>
          <div>

            <Switch>
              <Route exact path="/">
                <General></General>
              </Route>
              <Route path="/about">
                
              </Route>
              <Route path="/lorem">
                
              </Route>
            </Switch>
          </div>
          
        </Router>
      </div>
    );
  }
}

export default App;
