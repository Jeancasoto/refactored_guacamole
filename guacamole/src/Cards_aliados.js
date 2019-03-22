import React from 'react';
import { Card, Button, CardImg, Row, CardTitle, CardText, CardDeck, CardColumns, CardRows,
 CardSubtitle, CardBody } from 'reactstrap';

import Veterinaria_soto from './Images/veterinaria_soto.png';
import Super_mascota from './Images/super_mascotas.jpg';
import Happy_pets from './Images/happy_pets.jpg';




const Example = (props) => {
  return (

    <CardColumns>
      <Card body inverse style={{ backgroundColor: '#dbd5e0b7' }}>
        <CardImg className="first_page_gif" top width="50%" src={Veterinaria_soto} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Hospital y linica veterinaria Soto</CardTitle>
          <CardText className="cards_price">Abierto 24/7</CardText>
          <Button outline color="primary" >Visitar sitio web</Button > 
        </CardBody>
      </Card>

      <Card body inverse style={{ backgroundColor: '#dbd5e0b7' }}>
        <CardImg className="first_page_gif" top width="50%" src={Super_mascota} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Super Mascotas</CardTitle>
          <CardText className="cards_price">Abierto 24/7</CardText>
          <Button outline color="primary" >Visitar sitio web</Button > 
        </CardBody>
      </Card>

      <Card body inverse style={{ backgroundColor: '#dbd5e0b7' }}>
        <CardImg className="first_page_gif" top width="50%" src={Happy_pets} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Happy Pets</CardTitle>
          <CardText className="cards_price">Abierto 24/7</CardText>
          <Button outline color="primary" >Visitar sitio web</Button > 
        </CardBody>
      </Card>
    
    </CardColumns>

    

  );
};
export default Example;

