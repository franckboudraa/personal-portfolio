import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class LinksItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link
          activeClass="active"
          className="nav-link"
          to={this.props.section}
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          onSetActive={this.handleSetActive}
        >
          {this.props.section}
        </Link>
      </li>
    );
  }
}
