import React from 'react';
import { Badge, Button } from 'reactstrap';
import Carrito from './Images/carrito.svg';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" outline>
        <img src={Carrito} height="30" width="50" alt="text here" />

          Carrito <Badge color="secondary">4</Badge>
        </Button>
      </div>
    );
  }
}