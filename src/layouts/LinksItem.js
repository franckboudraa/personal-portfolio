import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-scroll';

import { setUrl } from "../actions";

class LinksItem extends Component {
  handleActive = () => {
    this.props.setUrl(this.props.section);
  };

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
          onSetActive={this.handleActive}
        >
          {this.props.section}
        </Link>
      </li>
    );
  }
}

export default connect(null, {setUrl})(LinksItem);