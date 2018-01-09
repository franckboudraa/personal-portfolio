import React, { Component } from 'react';
import { NavLink as NLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands'

import '../css/Header.css';
import pic from '../img/pic.jpg';

/* navbar-dark bg-primary */

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar dark expand={false} toggleable className="navy">
        <Container>
          <NavbarToggler right="true" onClick={this.toggle} />
          <NavbarBrand tag={NLink} to="/">
            <img
              src={pic}
              id="logo-pic"
              className="rounded"
              alt="franckboudraa.me"
            />
            <span className="title-name">Franck Boudraa</span>
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={NLink} to="/" exact activeClassName="activeLink">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NLink} to="/about" activeClassName="activeLink">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NLink} to="/contact" activeClassName="activeLink">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://linkedin.com/in/franckboudraa" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/franckboudraa" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
