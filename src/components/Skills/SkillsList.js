import React, { Component } from 'react';
import SkillsItem from './SkillsItem';

const items = [
  {
    name: 'React',
    rating: 5,
    level: 'Expert',
    description: ``
  },
  {
    name: 'Javascript',
    rating: 4,
    level: 'Advanced',
    description: ``
  },
  {
    name: 'GraphQL',
    rating: 3,
    level: 'Intermediate',
    description: ``
  },
  {
    name: 'NodeJS',
    rating: 3,
    level: 'Intermediate',
    description: ``
  },
  {
    name: 'Ruby',
    rating: 3,
    level: 'Intermediate',
    description: ''
  },
  {
    name: 'TypeScript',
    rating: 2,
    level: 'Beginner',
    description: ''
  },
  {
    name: 'MongoDB',
    rating: 2,
    level: 'Beginner',
    description: ''
  },
  {
    name: 'Docker',
    rating: 1,
    level: 'Beginner',
    description: ''
  }
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
