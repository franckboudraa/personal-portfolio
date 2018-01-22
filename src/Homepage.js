import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
import {
  faLinkedinIn,
  faGithub,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands';

import reactImg from './img/react.png';
import meteorImg from './img/meteor.png';
import nodeImg from './img/node.png';
import mongoImg from './img/mongodb.png';
import rubyImg from './img/ruby.png';
import railsImg from './img/rails.png';
import mysqlImg from './img/mysql.png';
import expressImg from './img/expressjs.png';
import htmlImg from './img/html5.png';
import cssImg from './img/css3.png';
import jsImg from './img/javascript.jpeg';
import brooklynImg from './img/brooklyn2.jpg';

import pic from './img/pic.jpg';
import SocialLinks from "./layouts/SocialLinks";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    document.title = `Home - Franck's portfolio`;
  }

  renderTechStack = (techName) => {
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
  };

  render() {
    return (
      <div className="wrapper container">
        <section id="experiences" className="experiences-section section">
          <h2 className="section-title">Work Experiences</h2>
          <div className="timeline">
            <div className="item">
              <div className="work-place">
                <h3 className="place">Google</h3>
                <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Mountain View</div>
              </div>
              <div className="job-meta">
                <div className="title">Senior Software Engineer</div>
                <div className="time">2016 - Present</div>
              </div>
              <div className="job-desc">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Donec pede justo ante</li>
                  <li>Maecenas tempus tellus eget </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="work-place">
                <h3 className="place">Apple</h3>
                <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>New York</div>
              </div>
              <div className="job-meta">
                <div className="title">Lead Software Engineer</div>
                <div className="time">2015 - 2016</div>
              </div>
              <div className="job-desc">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
              </div>
            </div>

            <div className="item">
              <div className="work-place">
                <h3 className="place">Twitter</h3>
                <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>London</div>
              </div>
              <div className="job-meta">
                <div className="title">Software Engineer</div>
                <div className="time">2013 - 2015</div>
              </div>
              <div className="job-desc">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
              </div>
            </div>

            <div className="item">
              <div className="work-place">
                <h3 className="place">Startup Hub</h3>
                <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>London</div>
              </div>
              <div className="job-meta">
                <div className="title">Founder &amp; Lead Developer</div>
                <div className="time">2012 - 2013</div>
              </div>
              <div className="job-desc">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
              </div>
            </div>

          </div>

        </section>

        <section id="education" className="education-section section">
          <h2 className="section-title">Education</h2>
          <div className="row">
            <div className="item col-12 col-md-4">
              <div className="item-inner">
                <h3 className="degree">MSc Computer Science</h3>
                <div className="education-body">
                  University College of London
                </div>
                <div className="time">2011 - 2012</div>
                <div className="desc">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                </div>
              </div>
            </div>
            <div className="item col-12 col-md-4">
              <div className="item-inner">
                <h3 className="degree">MSc Applied Mathematics</h3>
                <div className="education-body">
                  University of Bristol
                </div>
                <div className="time">2010 - 2011</div>
                <div className="desc">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                </div>
              </div>
            </div>
            <div className="item col-12 col-md-4">
              <div className="item-inner">
                <h3 className="degree">BSc Creative Technology</h3>
                <div className="education-body">
                  University of Bristol
                </div>
                <div className="time">2007 - 2010</div>
                <div className="desc">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                </div>
              </div>
            </div>

          </div>
        </section>


        <section id="skills" className="skills-section section text-center">
          <h2 className="section-title">Professional Skills</h2>
          <div className="top-skills">
            <h3 className="subtitle">Top Skills</h3>
            <div className="row">
              <div className="item col-12 col-md-4">
                <div className="item-inner">
                  <div className="chart-easy-pie text-center">
                    <div className="chart-theme-1 chart" data-percent="98"><span>98</span>%</div>
                  </div>
                  <h4 className="skill-name">Python &amp; Django</h4>
                  <div className="level">Expert, 8 years</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  </div>
                </div>
              </div>
              <div className="item col-12 col-md-4">
                <div className="item-inner">
                  <div className="chart-easy-pie text-center">
                    <div className="chart-theme-1 chart" data-percent="90"><span>90</span>%</div>
                  </div>
                  <h4 className="skill-name">JavaScript</h4>
                  <div className="level">Expert, 8 years</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  </div>
                </div>
              </div>
              <div className="item col-12 col-md-4">
                <div className="item-inner">
                  <div className="chart-easy-pie text-center">
                    <div className="chart-theme-1 chart" data-percent="85"><span>85</span>%</div>
                  </div>
                  <h4 className="skill-name">React &amp; Angular</h4>
                  <div className="level">Advanced, 4 years</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="other-skills">
            <h3 className="subtitle">Other Skills</h3>
            <div className="misc-skills">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">SASS</span>
              <span className="skill-tag">LESS</span>
              <span className="skill-tag">Git</span>
              <br />
                <span className="skill-tag">Ruby</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">Wireframe</span>
                <span className="skill-tag">Spanish</span>
                <span className="skill-tag">French</span>
            </div>
          </div>

        </section>

        <section id="portfolio" className="portfolio-section section">
          <h2 className="section-title">Portfolio</h2>
          <ul id="filters" className="filters clearfix">
            <li className="type active" data-filter="*">All</li>
            <li className="type" data-filter=".backend">Back-end</li>
            <li className="type" data-filter=".frontend">Front-end</li>
          </ul>
          <div className="items-wrapper isotope row">
            <div className="item frontend col-lg-3 col-6">
              <div className="item-inner">
                <figure className="figure">
                  <img className="img-fluid" src="assets/images/portfolio/portfolio-1.jpg" alt="" />
                </figure>
                <div className="content text-left">
                  <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
                  <div className="meta">AngularJS</div>
                  <div className="action"><a href="#">View on Github</a></div>
                </div>
                <a className="link-mask" href="#"></a>
              </div>
            </div>
            <div className="item backend col-lg-3 col-6">
              <div className="item-inner">
                <figure className="figure">
                  <img className="img-fluid" src="assets/images/portfolio/portfolio-2.jpg" alt="" />
                </figure>
                <div className="content text-left">
                  <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
                  <div className="meta">Django</div>
                  <div className="action"><a href="#">View on Github</a></div>
                </div>
                <a className="link-mask" href="#"></a>
              </div>
            </div>
            <div className="item backend frontend col-lg-3 col-6">
              <div className="item-inner">
                <figure className="figure">
                  <img className="img-fluid" src="assets/images/portfolio/portfolio-3.jpg" alt="" />
                </figure>
                <div className="content text-left">
                  <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
                  <div className="meta">Django/JavaScript</div>
                  <div className="action"><a href="#">View on Github</a></div>
                </div>
                <a className="link-mask" href="#"></a>
              </div>
            </div>
            <div className="item frontend col-lg-3 col-6">
              <div className="item-inner">
                <figure className="figure">
                  <img className="img-fluid" src="assets/images/portfolio/portfolio-4.jpg" alt="" />
                </figure>
                <div className="content text-left">
                  <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
                  <div className="meta">ReactJS</div>
                  <div className="action"><a href="#">View on Github</a></div>
                </div>
                <a className="link-mask" href="#"></a>
              </div>
            </div>
            <div className="item backend col-lg-3 col-6">
              <div className="item-inner">
                <figure className="figure">
                  <img className="img-fluid" src="assets/images/portfolio/portfolio-5.jpg" alt="" />
                </figure>
                <div className="content text-left">
                  <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
                  <div className="meta">Python</div>
                  <div className="action"><a href="#">View on Github</a></div>
                </div>
                <a className="link-mask" href="#"></a>
              </div>
            </div>
            <div className="item backend col-lg-3 col-6">
              <div className="item-inner">
                <figure className="figure">
                  <img className="img-fluid" src="assets/images/portfolio/portfolio-6.jpg" alt="" />
                </figure>
                <div className="content text-left">
                  <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
                  <div className="meta">JavaScript</div>
                  <div className="action"><a href="#">View on Github</a></div>
                </div>
                <a className="link-mask" href="#"></a>
              </div>
            </div>

            <div className="item frontend col-lg-3 col-6">
              <div className="item-inner">
                <figure className="figure">
                  <img className="img-fluid" src="assets/images/portfolio/portfolio-7.jpg" alt="" />
                </figure>
                <div className="content text-left">
                  <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
                  <div className="meta">HTML/AngularJS</div>
                  <div className="action"><a href="#">View on Github</a></div>
                </div>
                <a className="link-mask" href="#"></a>
              </div>
            </div>

            <div className="item frontend backend col-lg-3 col-6">
              <div className="item-inner">
                <figure className="figure">
                  <img className="img-fluid" src="assets/images/portfolio/portfolio-8.jpg" alt="" />
                </figure>
                <div className="content text-left">
                  <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
                  <div className="meta">Python/AngularJS</div>
                  <div className="action"><a href="#">View on Github</a></div>
                </div>
                <a className="link-mask" href="#"></a>
              </div>
            </div>

          </div>

        </section>

        <section id="contact" className="contact-section section">
          <h2 className="section-title">Get in Touch</h2>
          <div className="intro">
            <img className="profile-image rounded-circle img-thumbnail" src={pic} alt="" />
              <div className="dialog">
                <p>I'm currently taking on freelance work. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                <p><strong>I can help with the following:</strong></p>
                <ul className="list-unstyled service-list">
                  <li><FontAwesomeIcon icon={faCheck} /> App development with ReactJS</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Front-end development with AngularJS</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Back-end development with Django/Python</li>
                  <li><FontAwesomeIcon icon={faCheck} /> UI development</li>
                  <li><FontAwesomeIcon icon={faCheck} /> UX prototyping</li>
                </ul>
                <ul className="list-unstyled service-list">
                  <li><FontAwesomeIcon icon={faCheck} /> App development with ReactJS</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Front-end development with AngularJS</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Back-end development with Django/Python</li>
                  <li><FontAwesomeIcon icon={faCheck} /> UI development</li>
                  <li><FontAwesomeIcon icon={faCheck} /> UX prototyping</li>
                </ul>
                <ul className="list-unstyled service-list">
                  <li><FontAwesomeIcon icon={faCheck} /> App development with ReactJS</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Front-end development with AngularJS</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Back-end development with Django/Python</li>
                  <li><FontAwesomeIcon icon={faCheck} /> UI development</li>
                  <li><FontAwesomeIcon icon={faCheck} /> UX prototyping</li>
                </ul>
                <p>Drop me a line at <a href="mailto:someone@example.com">james.doe@website.com</a> or call me at <a href="tel:01234567890">0123 456 7890</a></p>
                <SocialLinks/>
              </div>
          </div>

        </section>

      </div>
    );
  }
}
