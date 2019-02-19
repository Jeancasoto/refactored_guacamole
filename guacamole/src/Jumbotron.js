import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Que es petter?</h1>
          <p className="lead">Petter es una plataforma que permite a sus usuarios la venta, compra <br/> 
          y adopcion de mascotas con pedigree y sin pedigree</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;