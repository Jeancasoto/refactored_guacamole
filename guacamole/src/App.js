import React, { Component } from 'react';
import parrot from './Images/parrot.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1 className="brush_font"> PETTER </h1>
          <img className="first_page_gif" src= {parrot} alt="first page parrot" />
          <label className="login_register">Username
          <input type="text"></input>
          </label>

          <label className="login_register">Password     
          <input type="text"></input>
          
          </label>


          <button className="login_button">LOG IN</button>

          <label className="login_create_account">Don't have account? Create on here!</label>
          
        </header>

        

       
      </div>
    );
  }
}

export default App;
