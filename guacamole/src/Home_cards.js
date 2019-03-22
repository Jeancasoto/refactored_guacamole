import React from 'react';
import { Card, Button, CardImg, Row, CardTitle, CardText, CardDeck, CardColumns, CardRows,
 CardSubtitle, CardBody } from 'reactstrap';
import dog from './Images/dog.png';
import cat from './Images/cat.png';
import bird from './Images/bird.png';
import Logo from './Images/192_black.png';
import Adopta from './Images/adopta.jpg';




const Example = (props) => {
  return (

    <div>

    
    <CardColumns >
     
     <Card body inverse style={{ backgroundColor: '#dbd5e0b7' }} >
        <CardImg className="first_page_gif" top width="50%" src={dog} alt="Card image cap" />
        <CardBody >
          <CardTitle className="p_text">
            <strong>
            Buscas un perro?
            </strong>
            </CardTitle>
          <CardText className="p_text"> Visita nuestra tienda virtual y busca entre las opciones que tenemos para ofrecerte</CardText>
          <a href="/buydogs">
          <Button outline color="primary" >Comprar ahora</Button>
          </a>
        </CardBody>
      </Card>

      <Card body inverse style={{ backgroundColor: '#dbd5e0b7', borderColor: '#333' }} >
        <CardImg className="first_page_gif" top width="50%" src={cat} alt="Card image cap" />
        <CardBody className>
          <CardTitle className="p_text">
            <strong>
            Buscas un gato?
            </strong>

          </CardTitle>
          <CardText className="p_text"> Visita nuestra tienda virtual y busca entre las opciones que tenemos para ofrecerte</CardText>
          <a href="/buycats">
          <Button outline color="primary" >Comprar ahora</Button>
          </a>        
          </CardBody>
      </Card>

      <Card body inverse style={{ backgroundColor: '#dbd5e0b7', borderColor: '#333' }} >
        <CardImg className="first_page_gif" top width="50%" src={bird} alt="Card image cap" />
        <CardBody className>
          <CardTitle className="p_text">
            <strong>

            Buscas un ave?
            </strong>
            </CardTitle>
          <CardText className="p_text"> Visita nuestra tienda virtual y busca entre las opciones que tenemos para ofrecerte</CardText>
          <a href="/buybirds">
          <Button outline color="primary" >Comprar ahora</Button>
          </a>       
          </CardBody>
      </Card>

    
    
    </CardColumns>

    

    </div>
  );
};
export default Example;

