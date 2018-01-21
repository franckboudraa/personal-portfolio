import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LinksList from './LinksList';

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

class Header extends Component {
  componentDidMount = () => {
    console.log('test'.toLocaleUpperCase());
    switch(this.props.history.location.pathname){
      case '/education':
        return this.changeUrlTo('education');
      case '/experiences':
        return this.changeUrlTo('experiences');
      case '/contact':
        return this.changeUrlTo('contact');
    }

    scrollSpy.update();
  };

  changeUrlTo = (url) => {
    scroller.scrollTo(url, {
      duration: 1000,
      smooth: true,
      offset: -50,
    });
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
    this.props.history.push('/' + to);
  };

  renderLink = (section) => {
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
        {section}
      </Link>
    );
  };

  render() {
    return (
      <header className="header">
        <div className="top-bar container-fluid">
          <div className="actions">
            <Link
              className="nav-link btn d-none d-md-inline-block"
              to="contact"
              spy={false}
              smooth={true}
              offset={-50}
              duration={1000}
              onSetActive={this.handleSetActive}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: '5px' }}
              />{' '}
              Contact me
            </Link>
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
                <LinksList />
              </div>
            </div>
          </div>
        </Sticky>
      </header>
    );
  }
}

export default withRouter(Header);
