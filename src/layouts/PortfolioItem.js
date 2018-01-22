import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PortfolioItem extends Component {
  render() {
    const {
      name,
      context,
      githubUrl,
      stack,
      image,
      projectUrl,
      description,
    } = this.props;

    const renderStack = stack.map(item => {
      return <li key={item}>{item}</li>
    });

    return (
      <div className="item col-lg-4 col-6">
        <div className="item-inner">
          <figure className="figure">
            <img className="img-fluid" src={image} alt="" />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title">
              <a href={projectUrl} target="_blank" rel="noreferrer noopener">{name}</a>
            </h3>
            <div className="meta">{context}</div>
            <div className="portfolio-body mt-3 mb-1">
              {description}
              <ul>
                {renderStack}
              </ul>
              </div>
            <div className="action">
              <a href={githubUrl} target="_blank" rel="noreferrer noopener" className="btn mr-1">
                View on Github
              </a>
              <a href={projectUrl} target="_blank" rel="noreferrer noopener" className="btn">
                Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;

PortfolioItem.propTypes = {
  name: PropTypes.string,
  context: PropTypes.string,
  githubUrl: PropTypes.string,
  projectUrl: PropTypes.string,
  stack: PropTypes.array,
  image: PropTypes.string,
  description: PropTypes.string,
};
