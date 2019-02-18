import React from 'react';
import Pnavbar from './profile_navbar.js'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class Perfil extends React.Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <Pnavbar></Pnavbar>   
          
        <header className="App-header">

        </header>


        <body>
                                
          <Card></Card>



        </body>

        <footer class="login_register">
          <div class="col-sm-4">
        <h3>We are Social!</h3>        
      
      <a title="Social" href="https://www.facebook.com/elcanariohn/">
              <img src="https://vignette.wikia.nocookie.net/logopedia/images/a/aa/Facebook_Home_logo.png/revision/latest?cb=20130406221119"
                  width="100" alt="algo" />
          </a>
          <a title="Social" href="https://www.veterinariasoto.hn/">
              <img src="https://www.veterinariasoto.hn/static/images/logo.png" width="100" alt="algo"
              />
          </a>
          <a title="Social" href="https://www.instagram.com/explore/locations/553606092/clinica-veterinaria-soto/?hl=es-la ">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" width="100" alt="algo" />
          </a>
      </div>
        </footer>

       
      </div>
    );
  }
}
