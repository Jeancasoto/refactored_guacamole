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




const Example = (props) => {
  return (

    <CardColumns >
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg className="first_page_gif" top width="50%" src={Husky} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle> Siberian Husky</CardSubtitle>
          <CardText className="cards_price">$ 999.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />  
          </Button > <Pedigree/> 
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro1} alt="Card image cap" />
          <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Chow Chow</CardSubtitle>
          <CardText className="cards_price">$ 899.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Pajaro1} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Aves</CardTitle>
          <CardSubtitle>Guacamaya</CardSubtitle>
          <CardText className="cards_price">$ 799.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Conejo1} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Roedores</CardTitle>
          <CardSubtitle>Mini Lop</CardSubtitle>
          <CardText className="cards_price">$ 199.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Sphynx} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Felinos</CardTitle>
          <CardSubtitle>Sphynx</CardSubtitle>
          <CardText className="cards_price">$ 1099.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Pajaro3} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Aves</CardTitle>
          <CardSubtitle>Guacamayo jacinto</CardSubtitle>
          <CardText className="cards_price">$ 899.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro2} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Bulldog Frances</CardSubtitle>
          <CardText className="cards_price">$ 749.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Pajaro5} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Aves</CardTitle>
          <CardSubtitle>Cacatúa </CardSubtitle>
          <CardText className="cards_price">$ 599.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Pajaro4} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Aves</CardTitle>
          <CardSubtitle>Aratinga solstitialis </CardSubtitle>
          <CardText className="cards_price">$ 799.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro3} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Beagle</CardSubtitle>
          <CardText className="cards_price">$ 699.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Conejo2} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Roedores</CardTitle>
          <CardSubtitle>Conejo Californiano </CardSubtitle>
          <CardText className="cards_price">$ 399.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro4} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Cocker spaniel inglés</CardSubtitle>
          <CardText className="cards_price">$ 699.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro5} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Dalmata </CardSubtitle>
          <CardText className="cards_price">$ 749.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro6} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Bulldog Inglés </CardSubtitle>
          <CardText className="cards_price">$ 749.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro7} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Basset Hound</CardSubtitle>
          <CardText className="cards_price">$ 699.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro8} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Schnauzer</CardSubtitle>
          <CardText className="cards_price">$ 899.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro9} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Pitbull</CardSubtitle>
          <CardText className="cards_price">$ 1399.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Perro10} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Caninos</CardTitle>
          <CardSubtitle>Chihuahua</CardSubtitle>
          <CardText className="cards_price">$ 749.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Pajaro2} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Aves</CardTitle>
          <CardSubtitle>Pericos Australianos</CardSubtitle>
          <CardText className="cards_price">$ 49.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card>
      <Card style={{width:"80%", height:"15%"}}>
        <CardImg top width="50%" src={Gato1} alt="Card image cap" />
        <CardBody className>
          <CardTitle>Categoria: Felino</CardTitle>
          <CardSubtitle>Munchkins</CardSubtitle>
          <CardText className="cards_price">$ 749.99</CardText>
          <Row>

          <Button outline color="primary" >Add to cart
          <img src={Carrito} height="30" width="50" alt="text here" />
          </Button> <Pedigree/>
          <Button outline color="primary">
          <img src={Profile} height="30" width="40" alt="text here" />
 
          </Button>
          </Row>
        </CardBody>
      </Card> 
    </CardColumns>

    

  );
};
export default Example;

