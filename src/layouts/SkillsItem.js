import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSquare as faStar } from '@fortawesome/fontawesome-free-solid';
import { faSquare as faStarWhite } from '@fortawesome/fontawesome-free-regular';

export default class SkillsItem extends Component {
  render() {
    let stars = [];
    const { rating, name, level } = this.props;
    const whiteStars = 5 - rating;

    for (let i = 0; i < rating; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          className="starred mr-1"
          key={'full' + i}
        />,
      );
    }
    for (let i = 0; i < whiteStars; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={faStarWhite}
          className="starred mr-1"
          key={'white' + i}
        />,
      );
    }

    return (
      <div className="item col-12 col-md-4 mb-5">
        <div className="item-inner">
          <h4 className="skill-name">{name}</h4>
          <div className="level">{level}</div>
          {stars}
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient
          </div>
        </div>
      </div>
    );
  }
}

SkillsItem.propTypes = {
  rating: PropTypes.number,
  name: PropTypes.string,
  level: PropTypes.string
};
