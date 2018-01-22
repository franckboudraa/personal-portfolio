import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import { faStar as faStarWhite } from '@fortawesome/fontawesome-free-regular';

export default class SkillsItem extends Component {
  render() {
    let stars = [];
    const { rating, name } = this.props;
    const whiteStars = 5 - rating;

    for (let i = 0; i < rating; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} className="starred" key={'full' + i} />,
      );
    }
    for (let i = 0; i < whiteStars; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={faStarWhite}
          className="starred"
          key={'white' + i}
        />,
      );
    }

    return (
      <div className="item col-12 col-md-4">
        <div className="item-inner">
          {stars}
          <h5 className="skill-name">{name}</h5>
          <div className="level" />
          <div className="desc" />
        </div>
      </div>
    );
  }
}

SkillsItem.propTypes = {
  rating: PropTypes.number,
  name: PropTypes.string,
};