import React from 'react';
import Pnavbar from './profile_navbar.js';
import Carousel from './Carousel.js';
import Decks from './Decks.js';
import Homecards from './Home_cards.js';
import Aliados from './Cards_aliados';
import Jumbotron from './Jumbotron.js';
import JumbotronAliados from './Jumbotron_aliados';

export default class Perfil extends React.Component {

  render() {
    return (
      <div className="App">
        <Pnavbar></Pnavbar>   
        <Carousel></Carousel>
        <br/>
        <Jumbotron/>
        <Homecards></Homecards>
        <JumbotronAliados/>
        <Aliados/>
        
      </div>
    );
  }
}
