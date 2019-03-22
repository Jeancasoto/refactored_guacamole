import React, { Component } from 'react';
import fb_logo from './Images/facebook_black.png';
import ig_logo from './Images/instagram_black.png';
import t_logo from './Images/twitter_black.png';
import githubLogo from './Images/githubLogo16.png';
import Logo from './Images/64_black.png'
import { Button, Col, Form, FormGroup, Label, Row, Input, FormText } from 'reactstrap';



class App extends Component {
  render() {
    return (
    <div className="footerGeneral">

      <h1>FOLLOW US!</h1>
      <div className="footerSocial">
        
         <a href="https://facebook.com">
        <img className="footerSocialIcons" src= {fb_logo} alt="Redirect to github" /> 
        </a>
        {" "}
         <a href="https://Twitter.com">
        <img className="footerSocialIcons" src= {t_logo} alt="Redirect to github" /> 
        </a>
        {""}
         <a href="https://Instagram.com">
        <img className="footerSocialIcons" src= {ig_logo} alt="Redirect to github" />
        </a>

      </div>
    

      <div>
      <img className="footerLogo" src= {Logo} alt="first page parrot" />
      </div>

      <text className="footerCreditsText">Developed by Jean Carlo Soto
      <a href="https://github.com" >
      <img src= {githubLogo} alt="Redirect to github" />
      </a>
      </text>
      
    


    </div>
    );
  }
}

export default App;