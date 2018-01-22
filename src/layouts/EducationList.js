import React, { Component } from 'react';
import EducationItem from './EducationItem';

const degrees = [
  {
    name: 'Bachelor Full Stack Developer',
    school: 'OpenClassrooms',
    timeline: '2018-Present',
    description: 'Currently studying'
  },
  {
    name: 'Bac Professionnel Cuisine',
    school: 'CFA Médéric Paris',
    timeline: '2010-2012',
    description: 'Full time internship'
  },
  {
    name: 'CAP Cuisine',
    school: 'Faculté des métiers d\'Evry',
    timeline: '2008-2010',
    description: 'Full time internship'
  }
];

export default class EducationList extends Component {
  render() {
    const renderItems = degrees.map(({name, school, timeline, description}) => {
      return(
        <EducationItem name={name} school={school} timeline={timeline} description={description} key={name} />
      )
    });

    return (
      <div className="row">
        {renderItems}
      </div>
    );
  }
}
