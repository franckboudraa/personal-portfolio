import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';

/*import reactImg from './img/react.png';
import meteorImg from './img/meteor.png';
import nodeImg from './img/node.png';
import mongoImg from './img/mongodb.png';
import rubyImg from './img/ruby.png';
import railsImg from './img/rails.png';
import mysqlImg from './img/mysql.png';
import expressImg from './img/expressjs.png';
import htmlImg from './img/html5.png';
import cssImg from './img/css3.png';
import jsImg from './img/javascript.jpeg';*/

import pic from './img/pic.jpg';
import SocialLinks from './layouts/SocialLinks';
import WorkXPList from './layouts/WorkXPList';
import EducationList from './layouts/EducationList';
import SkillsList from './layouts/SkillsList';
import SkillsTags from './layouts/SkillsTags';
import PortfolioList from './layouts/PortfolioList';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    document.title = `Home - Franck's portfolio`;
  }

  /*renderTechStack = (techName) => {
    let image;

    switch (techName) {
      case 'React':
        image = reactImg;
        break;
      case 'Meteor':
        image = meteorImg;
        break;
      case 'NodeJS':
        image = nodeImg;
        break;
      case 'MongoDB':
        image = mongoImg;
        break;
      case 'Ruby':
        image = rubyImg;
        break;
      case 'Rails':
        image = railsImg;
        break;
      case 'MySQL':
        image = mysqlImg;
        break;
      case 'Express':
        image = expressImg;
        break;
      case 'HTML5':
        image = htmlImg;
        break;
      case 'CSS3':
        image = cssImg;
        break;
      case 'JavaScript':
        image = jsImg;
        break;

      default:
        image = reactImg;
    }

    return (
      <span>
        <a id={techName}>
          <img src={image} alt={techName} className="stack-img rounded"/>
        </a>
      </span>
    );
  };*/

  render() {
    return (
      <div className="wrapper container">
        <section id="experiences" className="experiences-section section">
          <h2 className="section-title">Work Experiences</h2>
          <div className="timeline">
            <WorkXPList />
          </div>
        </section>

        <section id="education" className="education-section section">
          <h2 className="section-title">Education</h2>
          <EducationList />
        </section>

        <section id="skills" className="skills-section section text-center">
          <h2 className="section-title">Professional Skills</h2>
          <div className="top-skills">
            <h3 className="subtitle">Top Skills</h3>
            <SkillsList />
          </div>

          <div className="other-skills">
            <h3 className="subtitle">Other Skills</h3>
            <SkillsTags />
          </div>
        </section>

        <section id="portfolio" className="portfolio-section section">
          <h2 className="section-title">Portfolio</h2>
          <PortfolioList />
        </section>

        <section id="contact" className="contact-section section">
          <h2 className="section-title">Get in Touch</h2>
          <div className="intro">
            <img
              className="profile-image rounded-circle img-thumbnail"
              src={pic}
              alt=""
            />
            <div className="dialog">
              <p>
                I'm currently taking on freelance work. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes. Aenean vulputate eleifend tellus. Aenean leo
                ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              </p>
              <p>
                <strong>I can help with the following:</strong>
              </p>
              <ul className="list-unstyled service-list">
                <li>
                  <FontAwesomeIcon icon={faCheck} /> App development with
                  ReactJS
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Front-end development with
                  AngularJS
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Back-end development with
                  Django/Python
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> UI development
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> UX prototyping
                </li>
              </ul>
              <ul className="list-unstyled service-list">
                <li>
                  <FontAwesomeIcon icon={faCheck} /> App development with
                  ReactJS
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Front-end development with
                  AngularJS
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Back-end development with
                  Django/Python
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> UI development
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> UX prototyping
                </li>
              </ul>
              <ul className="list-unstyled service-list">
                <li>
                  <FontAwesomeIcon icon={faCheck} /> App development with
                  ReactJS
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Front-end development with
                  AngularJS
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Back-end development with
                  Django/Python
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> UI development
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> UX prototyping
                </li>
              </ul>
              <p>
                Drop me a line at{' '}
                <a href="mailto:someone@example.com">james.doe@website.com</a>{' '}
                or call me at <a href="tel:01234567890">0123 456 7890</a>
              </p>
              <SocialLinks keyPrefix="contact" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
