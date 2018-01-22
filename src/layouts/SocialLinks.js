import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faStackOverflow, faTwitter} from "@fortawesome/fontawesome-free-brands";

const items = [
  { icon: faLinkedinIn,
    url: 'https://linkedin.com/in/franckboudraa'
  },
  { icon: faTwitter,
    url: 'https://twitter.com/neocydfr'
  },
  { icon: faGithub,
    url: 'https://github.com/franckboudraa'
  },
  { icon: faStackOverflow,
    url: 'https://stackoverflow.com/users/1527134/neocydfr'
  }
];

class SocialLinks extends Component{
  render(){
    const renderItems = items.map(item => {
      return (
        <li className="list-inline-item" key={item.icon}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon}/>
          </a>
        </li>
        );
    });
    return(
      <ul className="social list-inline">
        {renderItems}
      </ul>
    )
  }
}
export default SocialLinks;