import React, { Component } from 'react';
import LinksItem from './LinksItem';

const items = ['experiences', 'education', 'skills', 'portfolio', 'contact'];

export default class LinksList extends Component{
  renderItems = () => {
    items.map(item => {
      return <LinksItem section={item} />
    })
  };

  render(){
    return(
      <ul id="page-nav" className="nav page-nav list-inline">
        {this.renderItems}
        <li className="nav-item">
          {this.renderLink('experiences')}
        </li>
        <li className="nav-item">
          {this.renderLink('education')}
        </li>
        <li className="nav-item">
          {this.renderLink('skills')}
        </li>
        <li className="nav-item">
          {this.renderLink('portfolio')}
        </li>
        <li className="nav-item">
          {this.renderLink('contact')}
        </li>
      </ul>
    )
  }
}