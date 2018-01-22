import React, { Component } from 'react';
import { connect } from 'react-redux';

import LinksItem from './LinksItem';

const items = ['experiences', 'education', 'skills', 'portfolio', 'contact'];

class LinksList extends Component {
  render() {
    const renderItems = items.map(item => {
      return <LinksItem key={item} section={item} />;
    });
    return (
      <ul id="page-nav" className="nav page-nav list-inline">
        {this.props.topButton === true &&
          <LinksItem key="top" section="top" />
        }
        {renderItems}
      </ul>
    );
  }
}

function mapStateToProps({ topButton }) {
  return { topButton };
}

export default connect(mapStateToProps, {})(LinksList);
