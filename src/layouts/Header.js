import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUrl, checkTopButton } from '../actions';

import { Link, scroller } from 'react-scroll';

import Sticky from 'react-stickynode';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/fontawesome-free-solid';

import '../css/styles.css';
import pic from '../img/pic.jpg';

import SocialLinks from './SocialLinks';
import LinksList from './LinksList';

class Header extends Component {
  componentDidMount = () => {
    switch (this.props.history.location.pathname) {
      case '/education':
        return this.changeUrlTo('education');
      case '/experiences':
        return this.changeUrlTo('experiences');
      case '/skills':
        return this.changeUrlTo('skills');
      case '/portfolio':
        return this.changeUrlTo('portfolio');
      case '/contact':
        return this.changeUrlTo('contact');
      default:
        return this.changeUrlTo('');
    }
  };

  changeUrlTo = url => {
    scroller.scrollTo(url, {
      duration: 1000,
      smooth: true,
      offset: -50,
    });
  };

  /*scrollToTop = () => {
    scroll.scrollToTop();
  };*/

  handleSetActive = to => {
    this.props.setUrl(to);
  };

  handleStickyChange = ({ status }) => {
    const { checkTopButton } = this.props;
    if (status === Sticky.STATUS_FIXED) {
      checkTopButton(true);
    } else {
      checkTopButton(false);
    }
  };

  render() {
    return (
      <header id="top" className="header">
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
          <SocialLinks />
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

        <Sticky
          enabled={true}
          innerZ={1000}
          onStateChange={this.handleStickyChange}
        >
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

function mapStateToProps({ topButton }) {
  return { topButton };
}

export default withRouter(
  connect(mapStateToProps, { setUrl, checkTopButton })(Header),
);
