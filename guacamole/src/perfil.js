import React from 'react';
import Pnavbar from './profile_navbar.js';
import Carousel from './Carousel.js';


export default class Perfil extends React.Component {

  render() {
    return (
      <div className="App">
        <Pnavbar></Pnavbar>   
        <Carousel></Carousel>
      </div>
    );
  }
}
