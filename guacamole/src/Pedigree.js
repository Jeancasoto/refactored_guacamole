import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Certificado from './Images/certificacion.svg';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button outline color="primary" onClick={this.toggle}> 
        <img src={Certificado} height="30" width="50" alt="text here" />
        {this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Pedigree</ModalHeader>
          <ModalBody>
            Puede adquirir sus mascotas con toda confianza.
            Petter le garantiza<br/>
            ● Carné de vacunas <br/>
            ● Certificado de Pedigree<br/>
            ● Seguridad de pago

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Ok</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;