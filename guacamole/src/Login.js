import React from 'react';
import parrot from './Images/parrot.gif';
import { Button } from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

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

          
          <Button outline color="primary">Log in</Button>{' '} 
          
          {/*}
          <button tag={Prueba} to="/prueba" className="login_button">LOG IN</button>
           {*/}

          <label className="login_create_account">Don't have account? Create on here!</label>

        </header>

        
        
       
      </div>
    );
  }
}
