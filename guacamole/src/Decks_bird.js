import React from 'react';
import { Card, Button, CardImg, Row, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';
import Cacatua from './Images/cacatua.jpg';
import Africano from './Images/africano.jpg';
import Australiano from './Images/australiano.jpg';

import Pedigree from './Pedigree.js';
import tigo from './Images/tigomoney.png';
import bac from './Images/bac.png';
import paypal from './Images/paypal.png';




const Example = () => {
  return (


    <CardColumns >

      <Card style={{width:"90%", height:"15%"}}>
        <CardImg top width="50%" src={"https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/aves%2Fcacatua.jpg?alt=media&token=9bf1cac1-d3e1-4966-95ac-2e3457013854"} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Aves</CardTitle>
          <CardSubtitle>Cacatua</CardSubtitle>
          <CardText className="cards_price">$ 74.99</CardText>
          <Row>
          <a href="https://paypal.com">
          <Button outline color="primary" >
          <img src={paypal} height="30" width="60" alt="text here" />  
          </Button > 
          </a>

          <a href="https://ayuda.tigo.com.hn/hc/es/categories/115000830928-Tigo-Money">
          <Button outline color="primary" >
          <img src={tigo} height="30" width="80" alt="text here" />  
          </Button > 
          </a>

          <a href="https://www.baccredomatic.com/es-hn">
          <Button outline color="primary" >
          <img src={bac} height="30" width="60" alt="text here" />  
          </Button > 
          </a>

          <Pedigree/> 

          </Row>
        </CardBody>
      </Card>
  
      <Card style={{width:"90%", height:"15%"}}>
        <CardImg top width="50%" src={"https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/aves%2Faustraliano.jpg?alt=media&token=3090c43c-7d8b-44fe-afc9-564e58dc628e"} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Aves</CardTitle>
          <CardSubtitle>Pericos Australianos</CardSubtitle>
          <CardText className="cards_price">$ 14.99</CardText>
          <Row>
          <a href="https://paypal.com">
          <Button outline color="primary" >
          <img src={paypal} height="30" width="60" alt="text here" />  
          </Button > 
          </a>

          <a href="https://ayuda.tigo.com.hn/hc/es/categories/115000830928-Tigo-Money">
          <Button outline color="primary" >
          <img src={tigo} height="30" width="80" alt="text here" />  
          </Button > 
          </a>

          <a href="https://www.baccredomatic.com/es-hn">
          <Button outline color="primary" >
          <img src={bac} height="30" width="60" alt="text here" />  
          </Button > 
          </a>

          <Pedigree/> 

          </Row>
        </CardBody>
      </Card>

      <Card style={{width:"90%", height:"15%"}}>
        <CardImg top width="50%" src={"https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/aves%2Fafricano.jpg?alt=media&token=ccb09768-c0d9-4aa2-aa63-57142481267f"} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Aves</CardTitle>
          <CardSubtitle>Pericos Africanos </CardSubtitle>
          <CardText className="cards_price">$ 64.99</CardText>
          <Row>
          <a href="https://paypal.com">
          <Button outline color="primary" >
          <img src={paypal} height="30" width="60" alt="text here" />  
          </Button > 
          </a>

          <a href="https://ayuda.tigo.com.hn/hc/es/categories/115000830928-Tigo-Money">
          <Button outline color="primary" >
          <img src={tigo} height="30" width="80" alt="text here" />  
          </Button > 
          </a>

          <a href="https://www.baccredomatic.com/es-hn">
          <Button outline color="primary" >
          <img src={bac} height="30" width="60" alt="text here" />  
          </Button > 
          </a>

          <Pedigree/> 

          </Row>
        </CardBody>
      </Card>
     

    </CardColumns>

    
  
  );
};
export default Example;

