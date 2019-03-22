import React from 'react';
import Pnavbar from './profile_navbar.js';
import Carousel from './Carousel.js';
import Homecards from './Home_cards.js';
import Aliados from './Cards_aliados';
import Jumbotron from './Jumbotron.js';
import JumbotronAliados from './Jumbotron_aliados';
import Publicidad from "./Images/compania.jpeg"
import Footer from './Footer.js';
import "./App.css"; 

export default class Perfil extends React.Component {

  render() {
    return (
      /*
      <div className="fondo">
      */
      <div className="inicio-bg-image">


      <div className="App">
      

        <Pnavbar ></Pnavbar>   
        <div className="container">
          

        <Carousel></Carousel>
        </div>

        <br/>


        <Jumbotron/>
        {/*}
        <img src={Publicidad} height="800" width="1000" alt="text here" />  
        <Jumbotron/>
      {*/}
      <br></br>
        <Homecards></Homecards>
     

        <JumbotronAliados/>
        <br></br>
        <Aliados/>
        <Footer></Footer>


      </div>
    
      </div>
    );
  }
}
