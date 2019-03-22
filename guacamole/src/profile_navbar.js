import React from 'react';
import Search from './Search.js';

import Cart from './Cart.js';
import Logo from './Images/petter_logo_morado.png';
import Perfil from './Images/user.png';
import './App.css';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Pnavbar extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md">
        <a href="/inicio">
          <img src={Logo} height="50" width="150" alt="text here" /> </a>
          <NavbarBrand className="brush_font_navbar"></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
       {/*}     
                <a href="/mycart">
                <Cart></Cart> 
                </a>
    {*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <img src={Perfil} alt="text here" />
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Manage Account
                  </DropdownItem>
             
                  <DropdownItem href="/buypets">
                    Programa de adopcion
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/">
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}