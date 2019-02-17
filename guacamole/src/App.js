import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Perfil from './perfil.js';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch} from "react-router-dom";
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/perfil" component={Perfil} exact/>
            
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
