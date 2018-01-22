import React, { Component } from 'react';
import SkillsItem from './SkillsItem';

const items = [
  {
    name: 'NodeJS',
    rating: 2,
  },
  {
    name: 'Javascript (ES6)',
    rating: 4,
  },
  {
    name: 'React',
    rating: 3,
  },
  {
    name: 'Ruby on Rails',
    rating: 3,
  },
  {
    name: 'MySQL',
    rating: 3,
  },
  {
    name: 'MongoDB',
    rating: 2,
  },
];

export default class SkillsList extends Component {
  render() {
    const renderItems = items.map(({ name, rating }) => {
      return <SkillsItem name={name} rating={rating} key={name} />;
    });

    return <div className="row">{renderItems}</div>;
  }
}
