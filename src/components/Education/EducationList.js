import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EducationItem from './EducationItem';

const degrees = [
  {
    name: 'Full Stack Developer Bachelor',
    school: 'OpenClassrooms',
    timeline: '2018',
    description:
      'HTML5, CSS3, Javascript, React, Ruby on Rails, MySQL, UML, Agile workflow',
    degree: true
  },
  {
    name: 'Cooking High-School Degree (Baccalaureate)',
    school: 'CFA Médéric Paris',
    timeline: '2010-2012',
    description: 'Apprenticeship',
    degree: true
  },
  {
    name: 'Cooking Professional Certificate (CAP)',
    school: "Faculté des métiers d'Evry",
    timeline: '2008-2010',
    description: 'Apprenticeship',
    degree: true
  },
  {
    name: 'UI/UX Design Specialization',
    school: 'University of Minnesota',
    timeline: '2019-current',
    description:
      '<ul class="pl-0"><li>Introduction to UI Design</li><li>User Research and Design</li><li>Prototyping and Design</li><li>Evaluating User Interfaces</li></ul>',
    degree: false
  },
  {
    name: 'Harvard CS50',
    school: 'Harvard University',
    timeline: '2018-current',
    description: `<ul class="pl-0"><li>Binary. ASCII. Algorithms. Pseudocode. Source code. Compiler. Object code. Scratch. Statements. Boolean expressions. Conditions. Loops. Variables. Functions. Arrays. Threads. Events.</li><li>Linux. C. Compiling. Libraries. Types. Standard output.</li><li>
    Casting. Imprecision. Switches. Scope. Strings. Arrays. Cryptography.</li><li>
    Command-line arguments. Searching. Sorting. Bubble sort. Selection sort. Insertion sort. O. Ω .Θ. Recursion. Merge Sort.</li><li>
    Stack. Debugging. File I/O. Hexadecimal. Strings. Pointers. Dynamic memory allocation.</li>
    <li>Heap. Buffer overflow. Linked lists. Hash tables. Tries. Trees. Stacks. Queues.</li>
    <li>TCP/IP. HTTP.</li>
    <li>HTML. CSS. Python.</li>
   <li>MVC. SQL.</li>
    <li>JavaScript. Ajax.</li><li>
    Security. Artificial intelligence.</li>`,
    degree: false
  },
  {
    name: 'Google Front End Developer Scholarship',
    school: 'Google/Udacity',
    timeline: '2017-2018',
    description:
      'Won a scholarship from Google<br />HTML5, CSS3, Javascript, jQuery',
    degree: false
  },
  {
    name: 'Stephen Grider Courses',
    school: 'Udemy',
    timeline: '2017-2018',
    description:
      '<ul class="pl-0"><li>GraphQL with React</li><li>Advanced React and Redux</li><li>Node with React: Fullstack development (Express, MongoDB)</li><li>Meteor and React for Realtime Apps</li><li>Modern React with Redux</li><li>...</li></ul><a href="https://www.udemy.com/user/franck-boudraa" target="_blank" rel="noopener noreferrer">Click here to view full list</a>',
    degree: false
  },
  {
    name: 'Miscellaneous Courses',
    school: 'Non-exhaustive list',
    timeline: '2005-Present',
    description:
      '<ul class="pl-0"><li>Michael Hartl’s Ruby on Rails Book</li><li>David Heinemeier Hansson’s Rails 5 Book</li><li>Site du Zero 2005 (former OpenClassrooms): HTML, CSS, PHP, MySQL</li></ul>',
    degree: false
  }
];

export default class EducationList extends Component {
  render() {
    const renderItems = degrees.map(
      ({ name, school, timeline, description, degree }) => {
        if (degree !== this.props.degreeFilter) {
          return false;
        }
        return (
          <EducationItem
            name={name}
            school={school}
            timeline={timeline}
            description={description}
            key={name}
          />
        );
      }
    );

    return <div className="row">{renderItems}</div>;
  }
}

EducationList.propTypes = {
  name: PropTypes.string,
  school: PropTypes.string,
  timeline: PropTypes.string,
  description: PropTypes.string,
  degree: PropTypes.bool,
  degreeFilter: PropTypes.bool
};
