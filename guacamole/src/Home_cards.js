import React from 'react';
import { Card, Button, CardImg, Row, CardTitle, CardText, CardDeck, CardColumns, CardRows,
 CardSubtitle, CardBody } from 'reactstrap';
import Conejo1 from './Images/conejo1.jpg';
import Conejo2 from './Images/conejo2.jpg';
import Gato1 from './Images/gato1.jpg';
import Logo from './Images/192_black.png';




const Example = (props) => {
  return (

    <CardColumns>
     
     <Card style={{width:"80%", height:"15%"}}>
        <CardImg className="first_page_gif" top width="50%" src={Logo} alt="Card image cap" />
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

