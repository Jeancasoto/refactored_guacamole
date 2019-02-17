import React from 'react';
import Pnavbar from './profile_navbar.js'



export default class Perfil extends React.Component {
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
        <Pnavbar></Pnavbar>                
        <header className="App-header">



        </header>

        

       
      </div>
    );
  }
}
