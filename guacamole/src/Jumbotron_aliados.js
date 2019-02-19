import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Nuestros aliados</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;