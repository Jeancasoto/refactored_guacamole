import React from 'react';
import { Card, Button, CardImg, Row, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';


import Pedigree from './Pedigree.js';

import tigo from './Images/tigomoney.png';
import bac from './Images/bac.png';
import paypal from './Images/paypal.png';






const Example = () => {
  return (

    <CardColumns >

    
      <Card style={{width:"90%", height:"15%"}}>
        <CardImg top width="50%" src={"https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/felinos%2Fangora.jpg?alt=media&token=73f5ed14-9fcf-4cc6-ba25-2d50418bbae2"} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Felinos</CardTitle>
          <CardSubtitle>Angora</CardSubtitle>
          <CardText className="cards_price">$ 369.99</CardText>
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
        <CardImg top width="50%" src={"https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/felinos%2Fsiames.jpg?alt=media&token=aca6a658-f73f-4566-b7fd-7a97d246490e"} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Felinos</CardTitle>
          <CardSubtitle>Siames</CardSubtitle>
          <CardText className="cards_price">$ 129.99</CardText>
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
        <CardImg top width="50%" src={"https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/felinos%2Fpersa.jpg?alt=media&token=6f2416c2-69b9-4264-9796-bef9c4d19657"} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Felino</CardTitle>
          <CardSubtitle>Persa</CardSubtitle>
          <CardText className="cards_price">$ 529.99</CardText>
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

