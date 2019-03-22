import React from 'react';
import { Card, Button, CardImg, Row, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';
import tigo from './Images/tigomoney.png';
import bac from './Images/bac.png';
import paypal from './Images/paypal.png';
import Rotweiler from './Images/rotweiler1.jpg';
import Husky from './Images/husky.jpg';
import Schnauzer from './Images/schnauzer.jpg';
import Shitzu from './Images/shitzu2.jpg';

import Pedigree from './Pedigree.js';
import storag from './firebase';



const Example = (props) => {
  return (

    

    <CardColumns >
      <Card style={{width:"90%", height:"15%"}}>
        <CardImg className="first_page_gif" top width="50%" src={'https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/caninos%2Fhusky.jpg?alt=media&token=6f288959-e57b-4cfa-92bb-b7ae95be6f25'} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle> Siberian Husky</CardSubtitle>
          <CardText className="cards_price">$ 289.99</CardText>


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


          {/*}
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
          </Button>
  {*/}
        </CardBody>
      </Card>

      <Card style={{width:"90%", height:"15%"}}>

        <CardImg top width="50%" src={"https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/caninos%2Fperro8.jpg?alt=media&token=32b94045-cc4f-42c7-b39b-6d17557c0cdb"} alt="Card image cap" />
          <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Schnauzer</CardSubtitle>
          <CardText className="cards_price">$ 289.99</CardText>
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

        <CardImg top width="50%" src={"https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/caninos%2Frotweiler.jpg?alt=media&token=6ff7cfe2-b617-4011-8d09-53937fb926cc"} alt="Card image cap" />
          <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Rotweiler</CardSubtitle>
          <CardText className="cards_price">$ 499.99</CardText>
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

<CardImg top width="50%" src={"https://firebasestorage.googleapis.com/v0/b/petter-2cb73.appspot.com/o/caninos%2Fshitzu.jpg?alt=media&token=6ceb1f24-c1d2-4136-b564-afd52e2e86e5"} alt="Card image cap" />
  <CardBody className>
  <CardTitle>Categoria: Caninos</CardTitle>
  <CardSubtitle>Shi tzu</CardSubtitle>
  <CardText className="cards_price">$ 619.99</CardText>
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

