import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import brooklyn from '../img/brooklyn3.jpg';
import portfolio from '../img/portfolio.jpg';

const items = [
  {
    name: 'Brooklyn Outdoor Film Festival',
    context: 'Mockup website for OC Full Stack Developer Path',
    githubUrl: 'https://github.com/franckboudraa/oc-brooklyn-festival',
    projectUrl: 'http://www.franckboudraa.me/oc-brooklyn-festival',
    stack: ['HTML5, CSS3', 'JS', 'Bootstrap 4', 'jQuery', 'Google Maps API'],
    description: '',
    image: brooklyn,
  },
  {
    name: 'Personal Portfolio',
    context: 'Single Page App',
    githubUrl: 'https://github.com/franckboudraa/personal-portfolio',
    projectUrl: 'http://www.franckboudraa.me',
    stack: ['HTML5, CSS3', 'JS', 'Bootstrap 4', 'React', 'Redux'],
    description: '',
    image: portfolio,
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
