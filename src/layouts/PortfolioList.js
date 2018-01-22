import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import brooklyn from '../img/brooklyn2.jpg';

const items = [
  {
    name: 'Brooklyn Outdoor Film Festival',
    context: 'OC Full Stack Developer Path',
    githubUrl: 'https://github.com/franckboudraa/oc-brooklyn-festival',
    projectUrl: 'http://www.franckboudraa.me/oc-brooklyn-festival',
    stack: ['HTML5', 'CSS3', 'Bootstrap 4', 'jQuery'],
    description: 'Simple mockup website',
    image: brooklyn,
  },
  {
    name: 'Personal Portfolio',
    context: 'OC Full Stack Developer Path',
    githubUrl: 'https://github.com/franckboudraa/personal-portfolio',
    projectUrl: 'http://www.franckboudraa.me',
    stack: ['Bootstrap 4', 'React', 'Redux', 'Sendgrid API'],
    description: 'Single page app portfolio in React',
    image: brooklyn,
  },
];

class PortfolioList extends Component {
  render() {
    const renderItems = items.map(
      ({ name, context, githubUrl, stack, image, projectUrl, description }) => {
        return (
          <PortfolioItem
            name={name}
            context={context}
            githubUrl={githubUrl}
            projectUrl={projectUrl}
            stack={stack}
            image={image}
            description={description}
            key={name}
          />
        );
      },
    );
    return <div className="items-wrapper row">{renderItems}</div>;
  }
}

export default PortfolioList;
