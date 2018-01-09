import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
  Jumbotron,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';

import { bounceInLeft, bounceInUp, bounceInRight } from 'react-animations';
import jss from 'jss'
import preset from 'jss-preset-default'

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

import './css/Homepage.css';

jss.setup(preset());

const {classes} = jss.createStyleSheet({
  '@keyframes bounceInLeft': bounceInLeft,
  bounceInLeft: {
    animationName: 'bounceInLeft',
    animationDuration: '0.7s',
  },
  '@keyframes bounceInUp': bounceInUp,
  bounceInUp: {
    animationName: 'bounceInUp',
    animationDuration: '0.7s',
  },
  '@keyframes bounceInRight': bounceInRight,
  bounceInRight: {
    animationName: 'bounceInRight',
    animationDuration: '0.7s',
  }
}).attach();

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.renderTechStack = this.renderTechStack.bind(this);

    document.title = `Home - Franck's portfolio`;
  }

  renderTechStack(techName) {
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
        <UncontrolledTooltip placement="top" target={techName} delay={0}>
          {techName}
        </UncontrolledTooltip>
      </span>
    );
  }

  render() {
    const { renderTechStack } = this;
    return (
      <Container>
          <div className={classes.bounceInLeft}>
          <Jumbotron fluid className="rounded marginTop-1em">
            <Container fluid className="text-center">
            <h3 className="display-5">Hi! I'm Franck.</h3>
            <h2 className="display-4">I'm a Full-Stack Developer.</h2>
            <p className="lead">
              Currently following the Full Stack Developer Path @ OpenClassrooms
            </p>
            <p>
              {renderTechStack('HTML5')}
              {renderTechStack('CSS3')}
              {renderTechStack('JavaScript')}
              {renderTechStack('NodeJS')}
              {renderTechStack('React')}
              {renderTechStack('Express')}
              {renderTechStack('Meteor')}
              {renderTechStack('Ruby')}
              {renderTechStack('Rails')}
              {renderTechStack('MongoDB')}
              {renderTechStack('MySQL')}
            </p>
          </Container>
        </Jumbotron>
          </div>
        <Row>
          <Col className={classes.bounceInUp}>
            <Card style={{ height: '100%' }}>
              <CardImg
                top
                width="318"
                src={brooklynImg}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle><Link to="/projects/brklyn" style={{color:"#fff"}}>Brooklyn Outdoor Film Festival</Link></CardTitle>
                <CardSubtitle><Badge color="secondary">#openclassrooms</Badge></CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Link to="/projects/brklyn"><Button>More...</Button></Link>
              </CardBody>
            </Card>
          </Col>
          <Col className={classes.bounceInRight}>
            <Card style={{ height: '100%' }}>
              <CardImg
                top
                width="318"
                src={brooklynImg}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle><Link to="/projects/brklyn" style={{color:"#fff"}}>Brooklyn Outdoor Film Festival</Link></CardTitle>
                <CardSubtitle><Badge color="secondary">#openclassrooms</Badge></CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Link to="/projects/brklyn"><Button>More...</Button></Link>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </Container>
    );
  }
}
