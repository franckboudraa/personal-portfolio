import React, { Component } from 'react';
import SkillsItem from './SkillsItem';

const items = [
  {
    name: 'JavaScript',
    rating: 5,
    level: 'Expert',
    description: ``
  },
  {
    name: 'React',
    rating: 4,
    level: 'Advanced',
    description: ``
  },
  {
    name: 'React Native',
    rating: 4,
    level: 'Advanced',
    description: ``
  },
  {
    name: 'TypeScript',
    rating: 4,
    level: 'Advanced',
    description: ''
  },
  {
    name: 'NodeJS',
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
    name: 'Docker',
    rating: 2,
    level: 'Beginner',
    description: ``
  },
  {
    name: 'Kubernetes',
    rating: 2,
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
