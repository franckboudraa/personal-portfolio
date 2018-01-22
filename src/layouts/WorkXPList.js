import React, { Component } from 'react';
import WorkXPItem from './WorkXPItem';

const works = [
  {
    place: 'OpenClassrooms',
    location: 'Remote',
    title: 'Full Stack Developer',
    timeline: '2018 - Present',
    description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Donec pede justo ante</li>
            <li>Maecenas tempus tellus eget </li>
          </ul>`,
  },
  {
    place: '',
    location: 'Paris',
    title: 'Chef de Partie',
    timeline: '2014 - 2018',
    description: `
          <ul>
            <li>2017-2018: <strong>Mandarin Oriental, Paris</strong> <em>(Palace, 2 Michelin's stars chef Thierry Marx)</em></li>
            <li>2017: 1er Chef de Partie @ <strong>Jean-François Piège</strong> <em>(2 Michelin's stars chef)</em></li>
            <li>2017: <strong>Shangri-La Paris</strong> <em>(Palace, 3 Michelin's stars chef Christophe Moret)</em></li>
            <li>2014-2017: <strong>La Grande Epicerie de Paris</strong> <em>(LVMH, "Meilleur Ouvrier de France" chef)</em></li>
          </ul>`,
  },
  {
    place: '',
    location: 'Paris',
    title: 'Demi-Chef de Partie',
    timeline: '2013 - 2014',
    description: `
          <ul>
            <li>2014: <strong>Le Boeuf sur le Toit</strong> <em>(Brasserie)</em></li>
            <li>2013: <strong>Pullman Paris Montparnasse</strong> <em>(4 stars Hotel)</em></li>
          </ul>`,
  },
  {
    place: '',
    location: 'France',
    title: 'Cooking Internship',
    timeline: '2008 - 2012',
    description: `
          <ul>
            <li>2011-2012: <strong>Relais d'Auteuil</strong> <em>(2 Michelin's stars chef Patrick Pignol)</em></li>
            <li>2010-2011: <strong>Zebra Square</strong> <em>(5 stars Hotel)</em></li>
            <li>2008-2010: <strong>Auberge du Petit Pussay</strong> <em>(Bistrot)</em></li>
          </ul>`,
  }
];

class WorkXPList extends Component {
  render() {
    const renderItems = works.map(
      ({ place, location, title, timeline, description }) => {
        return (
          <WorkXPItem
            place={place}
            location={location}
            key={title}
            title={title}
            timeline={timeline}
            description={description}
          />
        );
      },
    );
    return <div>{renderItems}</div>;
  }
}

export default WorkXPList;
