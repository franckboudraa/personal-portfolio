import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow
} from '@fortawesome/fontawesome-free-brands';

const items = [
  {
    key: 'li',
    icon: faLinkedinIn,
    url: 'https://linkedin.com/in/franckboudraa'
  },
  {
    key: 'gh',
    icon: faGithub,
    url: 'https://github.com/franckboudraa'
  },
  {
    key: 'so',
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/users/1527134/neocydfr'
  }
];

class SocialLinks extends Component {
  render() {
    const renderItems = items.map(item => {
      return (
        <li className="list-inline-item" key={this.props.keyPrefix + item.key}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      );
    });
    return <ul className="social list-inline">{renderItems}</ul>;
  }
}
export default SocialLinks;

SocialLinks.propTypes = {
  keyPrefix: PropTypes.string
};
