import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/fontawesome-free-solid';
import {
  faLinkedinIn,
  faGithub,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands';

import '../css/styles.css';
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
      <header className="header">
        <div className="top-bar container-fluid">
          <div className="actions">
            <a
              className="btn d-none d-md-inline-block"
              href="mailto:someone@example.com"
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Hire Me
            </a>
          </div>
          <ul className="social list-inline">
            <li className="list-inline-item">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faStackOverflow} />
              </a>
            </li>
          </ul>
        </div>

        <div className="intro">
          <div className="container text-center">
            <img
              className="profile-image img-thumbnail rounded-circle"
              src={pic}
              alt=""
            />
            <h1 className="name">Franck Boudraa</h1>
            <div className="title">Full Stack Developer</div>
            <div className="profile">
              <p>
                Profile info goes here. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet.
              </p>
            </div>
          </div>
        </div>

        <div className="page-nav-space-holder d-none d-md-block">
          <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
            <div className="container">
              <ul id="page-nav" className="nav page-nav list-inline">
                <li className="nav-item">
                  <a className="scrollto nav-link" href="#experiences-section">
                    Experiences
                  </a>
                </li>
                <li className="nav-item">
                  <a className="scrollto nav-link" href="#education-section">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="scrollto nav-link" href="#skills-section">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="scrollto nav-link" href="#testimonials-section">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="scrollto nav-link" href="#portfolio-section">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="scrollto nav-link" href="#contact-section">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
