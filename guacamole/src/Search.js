import React from 'react';
import { Badge, Button } from 'reactstrap';
import Magnifier from './Images/magnifier.png';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" outline>
        <img src={Magnifier}  alt="text here" />

          Search 
        </Button>
      </div>
    );
  }
}