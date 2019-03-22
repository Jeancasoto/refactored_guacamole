import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./App.css"; 

const Example = (props) => {
  return (
    <div className="footerGeneral">
    {/*}
      <Jumbotron fluid>
        <Container>
  {*/}
          <h1 className="jumbotron_text">Que es petter?</h1>
          <p className="lead">Petter es una plataforma que permite a sus usuarios la venta, compra <br/> 
          y adopcion de mascotas con pedigree y sin pedigree</p>
          {/*}
        </Container>
      </Jumbotron>
{*/}
    </div>
  );
};

export default Example;