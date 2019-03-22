import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Inicio from './Inicio.js';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch} from "react-router-dom";
import Route from 'react-router-dom/Route';
import Buy_birds from './buybirds.js';
import Buy_dogs from './buydogs.js';
import Buy_cats from './buycats.js';
import Register from './Register.js';




class App extends Component {




  render() {
    return (
     
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/inicio" component={Inicio} exact/>
            <Route path="/buybirds" component={Buy_birds} exact/>
            <Route path="/buycats" component={Buy_cats} exact/>
            <Route path="/buydogs" component={Buy_dogs} exact/>
            <Route path="/register" component={Register} exact/>

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
