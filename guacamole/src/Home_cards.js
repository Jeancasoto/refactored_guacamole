import React from 'react';
import { Card, Button, CardImg, Row, CardTitle, CardText, CardDeck, CardColumns, CardRows,
 CardSubtitle, CardBody } from 'reactstrap';
import Conejo1 from './Images/conejo1.jpg';
import Conejo2 from './Images/conejo2.jpg';
import Gato1 from './Images/gato1.jpg';
import Logo from './Images/192_black.png';
import Adopta from './Images/adopta.jpg';




const Example = (props) => {
  return (

    <CardColumns>
     
     <Card style={{width:"80%", height:"15%"}}>
        <CardImg className="first_page_gif" top width="50%" src={Logo} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Logo Petter</CardTitle>
          <CardText > Descarga nuestra app en IOS/ANDROID</CardText>
        
        </CardBody>
      </Card>

      <Card style={{width:"80%", height:"15%"}}>
        <CardImg className="first_page_gif" top width="50%" src={Adopta} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Programa de adopcion</CardTitle>
          <CardText > Adopta una mascota sin hogar</CardText>
          <Button outline color="primary" >Adoptar ahora</Button>
        </CardBody>
      </Card>
    
    </CardColumns>

    

  );
};
export default Example;

