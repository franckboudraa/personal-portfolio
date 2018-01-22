import React, { Component } from 'react';
import SkillsItem from './SkillsItem';

const items = [
  {
    name: 'NodeJS',
    rating: 3,
    level: 'Intermediate'
  },
  {
    name: 'Javascript (ES6)',
    rating: 4,
    level: 'Advanced'
  },
  {
    name: 'React',
    rating: 3,
    level: 'Intermediate'
  },
  {
    name: 'Ruby on Rails',
    rating: 3,
    level: 'Intermediate'
  },
  {
    name: 'MySQL',
    rating: 3,
    level: 'Advanced'
  },
  {
    name: 'MongoDB',
    rating: 2,
    level: 'Beginner'
  },
];

export default class SkillsList extends Component {
  render() {
    const renderItems = items.map(({ name, rating, level }) => {
      return <SkillsItem name={name} rating={rating} key={name} level={level} />;
    });

    return <div className="row">{renderItems}</div>;
  }
}
