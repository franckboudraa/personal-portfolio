import React, { Component } from 'react';
import { RRLink } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import Sticky from 'react-stickynode';

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


export default class Header extends Component {
  componentDidMount = () => {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  };

  componentWillUnmount = () => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  scrollTo = () => {
    scroll.scrollTo(100);
  };
  scrollMore = () => {
    scroll.scrollMore(100);
  };
  handleSetActive = to => {
    console.log(to);
  };

  renderLink = (section, text) => {
    return (
      <Link
        activeClass="active"
        className="nav-link"
        to={section}
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
        onSetActive={this.handleSetActive}
      >
        {text}
      </Link>
    );
  };

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
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
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
        <Sticky enabled={true} innerZ={1000}>
          <div className="page-nav-space-holder d-none d-md-block">
            <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
              <div className="container">
                <ul id="page-nav" className="nav page-nav list-inline">
                  <li className="nav-item">
                    {this.renderLink('experiences-section', 'Experiences')}
                  </li>
                  <li className="nav-item">
                    {this.renderLink('education-section', 'Education')}
                  </li>
                  <li className="nav-item">
                    {this.renderLink('skills-section', 'Skills')}
                  </li>
                  <li className="nav-item">
                    {this.renderLink('portfolio-section', 'Portfolio')}
                  </li>
                  <li className="nav-item">
                    {this.renderLink("contact-section", "Contact")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Sticky>
      </header>
    );
  }
}
