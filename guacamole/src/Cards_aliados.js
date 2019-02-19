import React from 'react';
import { Card, Button, CardImg, Row, CardTitle, CardText, CardDeck, CardColumns, CardRows,
 CardSubtitle, CardBody } from 'reactstrap';
import Conejo1 from './Images/conejo1.jpg';
import Conejo2 from './Images/conejo2.jpg';
import Gato1 from './Images/gato1.jpg';
import Pajaro1 from './Images/pajaro1.jpg';
import Pajaro2 from './Images/pajaro2.jpg';
import Pajaro3 from './Images/pajaro3.jpg';
import Pajaro4 from './Images/pajaro4.jpg';
import Pajaro5 from './Images/pajaro5.jpg';
import Perro1 from './Images/perro1.jpg';
import Perro2 from './Images/perro2.jpg';
import Sphynx from './Images/sphynx.jpg';
import Perro3 from './Images/perro3.jpg';
import Perro4 from './Images/perro4.jpg';
import Perro5 from './Images/perro5.jpg';
import Perro6 from './Images/perro6.jpg';
import Perro7 from './Images/perro7.jpg';
import Perro8 from './Images/perro8.jpg';
import Perro9 from './Images/perro9.jpg';
import Perro10 from './Images/perro10.jpg';
import Husky from './Images/husky.jpg';
import Carrito from './Images/carrito.svg';
import Profile from './Images/profile.svg';
import Pedigree from './Pedigree.js';
import Veterinaria_soto from './Images/veterinaria_soto.png';
import Super_mascota from './Images/super_mascotas.jpg';
import Happy_pets from './Images/happy_pets.jpg';




const Example = (props) => {
  return (

    <CardColumns>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg className="first_page_gif" top width="50%" src={Veterinaria_soto} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Hospital y linica veterinaria Soto</CardTitle>
          <CardText className="cards_price">Abierto 24/7</CardText>
          <Button outline color="primary" >Visitar sitio web</Button > 
        </CardBody>
      </Card>

      <Card style={{width:"80%", height:"15%"}}>
        <CardImg className="first_page_gif" top width="50%" src={Super_mascota} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Hospital y linica veterinaria Soto</CardTitle>
          <CardText className="cards_price">Abierto 24/7</CardText>
          <Button outline color="primary" >Visitar sitio web</Button > 
        </CardBody>
      </Card>

      <Card style={{width:"80%", height:"15%"}}>
        <CardImg className="first_page_gif" top width="50%" src={Happy_pets} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Hospital y linica veterinaria Soto</CardTitle>
          <CardText className="cards_price">Abierto 24/7</CardText>
          <Button outline color="primary" >Visitar sitio web</Button > 
        </CardBody>
      </Card>
    
    </CardColumns>

    

  );
};
export default Example;

