import React, { Component } from 'react';
import ExperiencesItem from './ExperiencesItem';

const works = [
  {
    place: 'OpenClassrooms',
    location: 'Remote',
    title: 'Full Stack Student',
    timeline: '2018 - Present',
    description: `<p>Developing various web projects to obtain a Bachelor degree</p>
          <ul>
            <li>HTML5, CSS3, Javascript</li>
            <li>React, UML</li>
            <li>Ruby on Rails, MySQL</li>
          </ul>`
  },
  {
    place: 'Events platform',
    location: 'Paris, France',
    title: 'Entrepreneurial Project',
    timeline: '2017 - Present',
    description: `<p>Personal project initially developed on Ruby on Rails, then refactored - Development in progress</p>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>React/Redux</li>
          </ul>`
  },
  {
    place: 'Games platform 2.0',
    location: 'Paris, France',
    title: 'Entrepreneurial Project',
    timeline: '2012-2014',
    description: `<p>Online games website, 115k users</p>
          <ul>
            <li>PHP5/MySQL/Flash</li>
            <li>AS/HTML5</li>
            <li>Facebook API, AWS, Amazon API...</li>
          </ul>`
  },
  {
    place: 'Gastronomic restaurants',
    location: 'Paris, France',
    title: 'Cooking Career',
    timeline: '2008 - 2018',
    description: `
          <ul>        
            <li>2014-2018: <strong>Chef de Partie & 1er Chef de Partie</strong> <em>(Mandarin Oriental Paris (Palace), Jean-François Piège's (2*), Shangri-La Paris (Palace, 3* chef), La Grande Epicerie de Paris)</em></li>
            <li>2013-2014: <strong>Demi-Chef de Partie</strong> <em>(Pullman Paris Montparnasse, Le Boeuf sur le Toit)</em></li>
            <li>2008-2012: <strong>Apprenticeship</strong> <em>(L'Auberge du Petit Pussay, Patrick Pignol (2 Michelin stars chef))</em></li>
                    </ul>`
  },
  {
    place: 'Games platform',
    location: 'France',
    title: 'Entrepreneurial Project',
    timeline: '2005-2008',
    description: `<p>Online games website</p>
          <ul>
            <li>PHP4/MySQL/Flash</li>
            <li>AS</li>
          </ul>`
  }
];

class ExperiencesList extends Component {
  render() {
    const renderItems = works.map(
      ({ place, location, title, timeline, description }) => {
        return (
          <ExperiencesItem
            place={place}
            location={location}
            key={title}
            title={title}
            timeline={timeline}
            description={description}
          />
        );
      }
    );
    return <div>{renderItems}</div>;
  }
}

export default ExperiencesList;
