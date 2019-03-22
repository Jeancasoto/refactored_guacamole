import React from 'react';
import parrot from './Images/parrot.gif';
import Logo from './Images/64_white.png'
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';
import Carousel from './loginCarousel.js';
 
export default class Login extends React.Component {
/*
    constructor(props) {
    super(props);
  
  }
*/

render() {
  return (

    <div >


    <div className="div_centered login-bg-image">
    


     
        <h1 className="brush_font"> PETTER </h1>

      
        <img className="first_page_gif" src= {Logo} alt="first page parrot" />
        <div className="reducedWidth">


        </div>
        {/*}
          <Carousel></Carousel>
          
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {*/}        
        {/*
        <img className="first_page_gif" src= {parrot} alt="first page parrot" />

        <div className="centeredDiv">

        </div>
      */}
          <Form>

            <FormGroup className="rowType">
              <label className="login_register">Username {" "}</label>
              <Input className="login_input" type="text"></Input>
            </FormGroup>

            <FormGroup className="rowType">
              <label className="login_register">Password {' '}</label>
              <Input className="login_input" type="password"></Input>
            </FormGroup>

            <Col>
              <div>
                <Button href="/inicio" outline color="primary">Log in</Button>{' '} 
              </div>
          
              <label className="login_create_account">Don't have account? Create one 
                <a href="/register" > here !</a>
              </label>
            </Col>

          </Form> 

        

    
  
      </div>
      </div>
    );
  }
}
