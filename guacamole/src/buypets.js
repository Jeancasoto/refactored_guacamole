import React from 'react';
import Pnavbar from './profile_navbar.js';
import Carousel from './Carousel.js';
import Decks from './Decks.js';


export default class Buypets extends React.Component {

  render() {
    return (
      <div className="App">
        <Pnavbar></Pnavbar>   
        <br/>
        <Decks></Decks>
      </div>
    );
  }
}
