import React from 'react';
import Pnavbar from './profile_navbar.js';
import S from './Images/search.svg';
import Decks_dog from './Decks_dog.js';
import { Card, Button, CardImg, Row, CardTitle, CardText, CardDeck, CardColumns, CardRows,
  CardSubtitle, CardBody } from 'reactstrap';

export default class Buypets extends React.Component {
  render() {
    return (

      
      
      <div className="App inicio-bg-image">
        <Pnavbar></Pnavbar>   
        <Button outline color="link ">
        <img src={S} height="30" width="40" alt="text here" />
        <label className="prueba">Search
          <input type="text"></input>
          </label>
        </Button>
        <br/>
        <br/>
        

        <Decks_dog></Decks_dog>
      

      </div>
    );
  }
}
