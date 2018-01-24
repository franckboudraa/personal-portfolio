import React, { Component } from 'react';
import SkillsItem from './SkillsItem';

const items = [
  {
    name: 'NodeJS',
    rating: 3,
    level: 'Intermediate',
    description: '',
  },
  {
    name: 'Javascript (ES6)',
    rating: 4,
    level: 'Advanced',
    description: '',
  },
  {
    name: 'React + Redux',
    rating: 2,
    level: 'Beginner',
    description: '',
  },
  {
    name: 'Ruby on Rails',
    rating: 3,
    level: 'Intermediate',
    description: '',
  },
  {
    name: 'MySQL',
    rating: 3,
    level: 'Intermediate',
    description: '',
  },
  {
    name: 'MongoDB',
    rating: 2,
    level: 'Beginner',
    description: '',
  },
];

export default class SkillsList extends Component {
  render() {
    const renderItems = items.map(({ name, rating, level, description }) => {
      return (
        <SkillsItem
          name={name}
          rating={rating}
          key={name}
          level={level}
          description={description}
        />
      );
    });

    return <div className="row">{renderItems}</div>;
  }
}
