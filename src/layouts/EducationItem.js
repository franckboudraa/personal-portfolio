import React, { Component } from 'react';

export default class EducationItem extends Component {
  render() {
    const { name, school, timeline, description } = this.props;
    return (
      <div className="item col-12 col-md-4">
        <div className="item-inner">
          <h3 className="degree">{name}</h3>
          <div className="education-body">{school}</div>
          <div className="time">{timeline}</div>
          <div className="desc"><em>{description}</em></div>
        </div>
      </div>
    );
  }
}
