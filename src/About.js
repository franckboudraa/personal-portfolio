import React, { Component } from 'react';

export default class About extends Component{
  constructor(props){
    super(props);

    document.title = `About - Franck's portfolio`;
  }
  render(){
    return(
      <div className="container">
        About
      </div>
    )
  }
}