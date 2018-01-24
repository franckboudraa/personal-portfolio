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
import ContactComponent from './layouts/ContactComponent';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    document.title = `Home - Franck's portfolio`;
  }

  render() {
    return (
      <div className="wrapper container">
        <section id="about" className="about-section section">
          <h2 className="section-title">About</h2>
          <div className="dialog">
            <h5 className="subtitle">
              I am passionate about web development and engaging with great
              enthusiasm into a professional reorientation after 10 years as a
              cook in the high-end gastronomy!
            </h5>
            <h5 className="subtitle">
              Love pugs!
              <small>
                <em>-not the library, I prefer JSX! :)</em>
              </small>
            </h5>
          </div>
        </section>

        <section id="experiences" className="experiences-section section">
          <h2 className="section-title">Experiences</h2>
          <div className="timeline">
            <WorkXPList />
          </div>
        </section>

        <section id="skills" className="skills-section section text-center">
          <h2 className="section-title">Skills</h2>
          <div className="top-skills">
            <h3 className="subtitle">Top Skills</h3>
            <SkillsList />
          </div>

          <div className="other-skills">
            <h3 className="subtitle">Other Skills</h3>
            <SkillsTags />
          </div>
          <div className="other-skills">
            <h3 className="subtitle mt-5">Languages</h3>
            <span className="skill-tag">French</span>
            <span className="skill-tag">English</span>
          </div>
        </section>

        <section id="education" className="education-section section">
          <h2 className="section-title">Education</h2>
          <h3 className="subtitle text-center">Degrees</h3>
          <EducationList degreeFilter={true} />
          <h3 className="subtitle text-center">Non-degree Courses</h3>
          <EducationList degreeFilter={false} />
        </section>

        <section id="projects" className="portfolio-section section">
          <h2 className="section-title">Projects</h2>
          <PortfolioList />
        </section>

        <section id="contact" className="contact-section section">
          <h2 className="section-title">Contact</h2>
          <div className="intro">
            <img
              className="profile-image rounded-circle img-thumbnail"
              src={pic}
              alt=""
            />
            <div className="dialog">
              <p>
                I am currently following the OpenClassrooms Full Stack Developer
                Path.
              </p>
              <p>I am available for hire.</p>
              <p>
                <strong>My areas of expertise include:</strong>
              </p>
              <ul className="list-unstyled service-list">
                <li>
                  <FontAwesomeIcon icon={faCheck} className="mr-2" /> Full Stack
                  development
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="mr-2" /> Front End
                  development with React
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="mr-2" /> Back End
                  development with NodeJS / Ruby on Rails
                </li>
              </ul>
            </div>{' '}
          </div>
          <ContactComponent />
          <SocialLinks keyPrefix="contact" />
        </section>
      </div>
    );
  }
}
