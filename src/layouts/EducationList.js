import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EducationItem from './EducationItem';

const degrees = [
  {
    name: 'Bachelor Full Stack Developer',
    school: 'OpenClassrooms',
    timeline: '2018-Present',
    description: 'Expected - End of 2018',
  },
  {
    name: 'Cooking High-School Degree (BAC)',
    school: 'CFA Médéric Paris',
    timeline: '2010-2012',
    description: 'Apprenticeship',
  },
  {
    name: 'Cooking Professional Certificate (CAP)',
    school: "Faculté des métiers d'Evry",
    timeline: '2008-2010',
    description: 'Apprenticeship',
  },
];

export default class EducationList extends Component {
  render() {
    const renderItems = degrees.map(
      ({ name, school, timeline, description }) => {
        return (
          <EducationItem
            name={name}
            school={school}
            timeline={timeline}
            description={description}
            key={name}
          />
        );
      },
    );

    return <div className="row">{renderItems}</div>;
  }
}

EducationList.propTypes = {
  name: PropTypes.string,
  school: PropTypes.string,
  timeline: PropTypes.string,
  description: PropTypes.string,
};
