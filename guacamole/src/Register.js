import React from 'react';
import parrot from './Images/parrot.gif';
import Logo from './Images/64_white.png'
import { Button, Col, Form, FormGroup, Label,Row, Input, FormText } from 'reactstrap';
import Footer from './Footer.js'

export default class Register extends React.Component {

  render() {
    return (

      <div className="div_centered bg-image" >

      <div className="registerDiv">
        
          <img className="first_page_gif" src= {Logo} alt="first page parrot" />

        <Form className="side">

        
        <FormGroup className="rowType">
    
        <Label className="register-font" for="exampleEmail">Nombre </Label>
        <Input type="text" name="primer_nombre" id="primerNombre" placeholder="Primer nombre" />
        </FormGroup>    

        <FormGroup className="rowType">

        <Label className="register-font" for="exampleEmail"> Apellido 
        </Label>
        {" "}
        <Input type="text" name="primer_nombre" id="primerNombre" placeholder="Primer nombre" />
        </FormGroup>

        <FormGroup className="rowType">
          <Label className="register-font" for="exampleEmail">Username
          </Label>
          <Input type="text" name="Username" id="Username" placeholder="Alias petter" />
          {/*}<Input valid />{*/}
        </FormGroup>
        

        <FormGroup className="rowType">
          <Label className="register-font" for="exampleEmail">Email
          </Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Example@petter.com" />
        </FormGroup>

        <FormGroup className="rowType">
          <Label className="register-font" for="examplePassword">Password
          </Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password " />
        </FormGroup>



        {/*}
        <FormGroup row>
          <Label for="exampleFile" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Select a profile picture
            </FormText>
          </Col>
        </FormGroup>
    {*/}

          </Form>


        <div className= "registerDiv">

            <Row>
        
            <Button href="/inicio" color="primary" size="lg" active>Submit</Button>{" "}
            <Button href="/" color="secondary" size="lg" active>Cancel</Button>
            </Row>

        </div>

          

        

    
      </div>

      <br/>
      <br/>
      <br/>
      
      <Footer></Footer>
      </div>  


    );
  }
}
