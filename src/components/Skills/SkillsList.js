import React, { Component } from 'react';
import SkillsItem from './SkillsItem';

import pluralsight_react from '../../img/pluralsight_react.png';
import pluralsight_mysql from '../../img/pluralsight_mysql.png';
import pluralsight_nodejs from '../../img/pluralsight_nodejs.png';
import pluralsight_js from '../../img/pluralsight_js.png';

const items = [
  {
    name: 'React',
    rating: 4,
    level: 'Advanced',
    description: `JSX, Redux<br /><br />
    <a href="https://stackoverflow.com/story/franckboudraa" target="_blank" rel="noopener noreferrer">
    <svg width="40%" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 690 132"><defs><linearGradient id="a" x1="542.55" y1="115.04" x2="669.47" y2="27.65" gradientTransform="matrix(1 0 0 -1 0 134)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e80a89"/><stop offset="1" stop-color="#f05a29"/></linearGradient><linearGradient id="b" x1="519.62" y1="85.63" x2="655.55" y2="-7.96" xlink:href="#a"/></defs><path d="M20.41 50.16h15.76c9.37 0 15.19 5.31 15.19 13.36v.11c0 9-7.2 13.65-16 13.65h-7.93v12.86h-7zM35.6 71c5.31 0 8.62-3 8.62-7.14v-.16c0-4.68-3.37-7.14-8.62-7.14h-8.17V71zM66.55 50.16h7v33.58h21v6.4h-28zM108.11 73.18v-23h7v22.71c0 7.42 3.83 11.36 10.11 11.36s10.05-3.71 10.05-11.08v-23h7v22.67c0 11.94-6.74 17.93-17.19 17.93s-16.97-6-16.97-17.59zM160 50.16h17.82c5 0 9 1.48 11.54 4a12.09 12.09 0 0 1 3.31 8.62v.11c0 6.57-3.94 10.51-9.48 12.11L194 90.13h-8.4l-9.82-13.93H167v13.94h-7zM177.26 70c5 0 8.22-2.63 8.22-6.68v-.11c0-4.28-3.08-6.62-8.28-6.62H167V70zM223.4 49.88h6.51l17.59 40.26h-7.42L236 80.49h-18.9l-4.1 9.65h-7.2zm10 24.39l-6.91-16-6.85 16zM262.34 50.16h7v33.58h21v6.4h-28zM302.93 84.31l4.23-5c3.83 3.31 7.71 5.2 12.62 5.2 4.34 0 7.08-2.06 7.08-5v-.11c0-2.86-1.6-4.4-9-6.11-8.51-2.06-13.31-4.57-13.31-11.94v-.11c0-6.85 5.71-11.59 13.65-11.59a22.2 22.2 0 0 1 14.51 5L328.94 60c-3.6-2.68-7.2-4.11-10.85-4.11-4.11 0-6.51 2.11-6.51 4.74v.11c0 3.08 1.83 4.45 9.54 6.28 8.43 2 12.77 5 12.77 11.68v.11c0 7.48-5.88 11.94-14.28 11.94a24.59 24.59 0 0 1-16.68-6.44zM350.55 50.16h7v40h-7zM374.48 70.27v-.11a20.37 20.37 0 0 1 20.07-20.67h.55c7 0 11.25 1.94 15.36 5.42l-4.46 5.3A15.85 15.85 0 0 0 394.81 56c-7.37 0-13 6.4-13 14v.11c0 8.22 5.42 14.28 13.59 14.28a16.27 16.27 0 0 0 9.65-3V74h-10.19v-6.19h17V84.6a25.48 25.48 0 0 1-16.68 6.22c-12.48.01-20.7-8.9-20.7-20.55zM429 50.16h7v16.62h19.1V50.16h7v40h-7V73.29H436v16.85h-7zM490.16 56.67h-12.73v-6.51h32.5v6.51h-12.75v33.47h-7z"/><path d="M661.93 96.63h-16.81a45.92 45.92 0 1 0-34.23 15.31h51a7.66 7.66 0 1 0 .55-15.31h-.51zM580.26 66a30.63 30.63 0 1 1 30.63 30.63A30.63 30.63 0 0 1 580.26 66z" fill="url(#a)"/><rect x="539.43" y="22.61" width="15.31" height="89.33" rx="2.45" ry="2.45" fill="url(#b)"/></svg>
    <img src="${pluralsight_react}" width="60%" alt="" />
    </a>
    `
  },
  {
    name: 'MySQL',
    rating: 4,
    level: 'Advanced',
    description: `&nbsp;<br /><br /><a href="https://stackoverflow.com/story/franckboudraa" target="_blank" rel="noopener noreferrer">
    <svg width="40%" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 690 132"><defs><linearGradient id="a" x1="542.55" y1="115.04" x2="669.47" y2="27.65" gradientTransform="matrix(1 0 0 -1 0 134)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e80a89"/><stop offset="1" stop-color="#f05a29"/></linearGradient><linearGradient id="b" x1="519.62" y1="85.63" x2="655.55" y2="-7.96" xlink:href="#a"/></defs><path d="M20.41 50.16h15.76c9.37 0 15.19 5.31 15.19 13.36v.11c0 9-7.2 13.65-16 13.65h-7.93v12.86h-7zM35.6 71c5.31 0 8.62-3 8.62-7.14v-.16c0-4.68-3.37-7.14-8.62-7.14h-8.17V71zM66.55 50.16h7v33.58h21v6.4h-28zM108.11 73.18v-23h7v22.71c0 7.42 3.83 11.36 10.11 11.36s10.05-3.71 10.05-11.08v-23h7v22.67c0 11.94-6.74 17.93-17.19 17.93s-16.97-6-16.97-17.59zM160 50.16h17.82c5 0 9 1.48 11.54 4a12.09 12.09 0 0 1 3.31 8.62v.11c0 6.57-3.94 10.51-9.48 12.11L194 90.13h-8.4l-9.82-13.93H167v13.94h-7zM177.26 70c5 0 8.22-2.63 8.22-6.68v-.11c0-4.28-3.08-6.62-8.28-6.62H167V70zM223.4 49.88h6.51l17.59 40.26h-7.42L236 80.49h-18.9l-4.1 9.65h-7.2zm10 24.39l-6.91-16-6.85 16zM262.34 50.16h7v33.58h21v6.4h-28zM302.93 84.31l4.23-5c3.83 3.31 7.71 5.2 12.62 5.2 4.34 0 7.08-2.06 7.08-5v-.11c0-2.86-1.6-4.4-9-6.11-8.51-2.06-13.31-4.57-13.31-11.94v-.11c0-6.85 5.71-11.59 13.65-11.59a22.2 22.2 0 0 1 14.51 5L328.94 60c-3.6-2.68-7.2-4.11-10.85-4.11-4.11 0-6.51 2.11-6.51 4.74v.11c0 3.08 1.83 4.45 9.54 6.28 8.43 2 12.77 5 12.77 11.68v.11c0 7.48-5.88 11.94-14.28 11.94a24.59 24.59 0 0 1-16.68-6.44zM350.55 50.16h7v40h-7zM374.48 70.27v-.11a20.37 20.37 0 0 1 20.07-20.67h.55c7 0 11.25 1.94 15.36 5.42l-4.46 5.3A15.85 15.85 0 0 0 394.81 56c-7.37 0-13 6.4-13 14v.11c0 8.22 5.42 14.28 13.59 14.28a16.27 16.27 0 0 0 9.65-3V74h-10.19v-6.19h17V84.6a25.48 25.48 0 0 1-16.68 6.22c-12.48.01-20.7-8.9-20.7-20.55zM429 50.16h7v16.62h19.1V50.16h7v40h-7V73.29H436v16.85h-7zM490.16 56.67h-12.73v-6.51h32.5v6.51h-12.75v33.47h-7z"/><path d="M661.93 96.63h-16.81a45.92 45.92 0 1 0-34.23 15.31h51a7.66 7.66 0 1 0 .55-15.31h-.51zM580.26 66a30.63 30.63 0 1 1 30.63 30.63A30.63 30.63 0 0 1 580.26 66z" fill="url(#a)"/><rect x="539.43" y="22.61" width="15.31" height="89.33" rx="2.45" ry="2.45" fill="url(#b)"/></svg>
    <img src="${pluralsight_mysql}" width="60%" alt="" />
    </a>`
  },
  {
    name: 'NodeJS',
    rating: 3,
    level: 'Intermediate',
    description: `Express, Meteor<br /><br />
    <a href="https://stackoverflow.com/story/franckboudraa" target="_blank" rel="noopener noreferrer">
    <svg width="40%" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 690 132"><defs><linearGradient id="a" x1="542.55" y1="115.04" x2="669.47" y2="27.65" gradientTransform="matrix(1 0 0 -1 0 134)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e80a89"/><stop offset="1" stop-color="#f05a29"/></linearGradient><linearGradient id="b" x1="519.62" y1="85.63" x2="655.55" y2="-7.96" xlink:href="#a"/></defs><path d="M20.41 50.16h15.76c9.37 0 15.19 5.31 15.19 13.36v.11c0 9-7.2 13.65-16 13.65h-7.93v12.86h-7zM35.6 71c5.31 0 8.62-3 8.62-7.14v-.16c0-4.68-3.37-7.14-8.62-7.14h-8.17V71zM66.55 50.16h7v33.58h21v6.4h-28zM108.11 73.18v-23h7v22.71c0 7.42 3.83 11.36 10.11 11.36s10.05-3.71 10.05-11.08v-23h7v22.67c0 11.94-6.74 17.93-17.19 17.93s-16.97-6-16.97-17.59zM160 50.16h17.82c5 0 9 1.48 11.54 4a12.09 12.09 0 0 1 3.31 8.62v.11c0 6.57-3.94 10.51-9.48 12.11L194 90.13h-8.4l-9.82-13.93H167v13.94h-7zM177.26 70c5 0 8.22-2.63 8.22-6.68v-.11c0-4.28-3.08-6.62-8.28-6.62H167V70zM223.4 49.88h6.51l17.59 40.26h-7.42L236 80.49h-18.9l-4.1 9.65h-7.2zm10 24.39l-6.91-16-6.85 16zM262.34 50.16h7v33.58h21v6.4h-28zM302.93 84.31l4.23-5c3.83 3.31 7.71 5.2 12.62 5.2 4.34 0 7.08-2.06 7.08-5v-.11c0-2.86-1.6-4.4-9-6.11-8.51-2.06-13.31-4.57-13.31-11.94v-.11c0-6.85 5.71-11.59 13.65-11.59a22.2 22.2 0 0 1 14.51 5L328.94 60c-3.6-2.68-7.2-4.11-10.85-4.11-4.11 0-6.51 2.11-6.51 4.74v.11c0 3.08 1.83 4.45 9.54 6.28 8.43 2 12.77 5 12.77 11.68v.11c0 7.48-5.88 11.94-14.28 11.94a24.59 24.59 0 0 1-16.68-6.44zM350.55 50.16h7v40h-7zM374.48 70.27v-.11a20.37 20.37 0 0 1 20.07-20.67h.55c7 0 11.25 1.94 15.36 5.42l-4.46 5.3A15.85 15.85 0 0 0 394.81 56c-7.37 0-13 6.4-13 14v.11c0 8.22 5.42 14.28 13.59 14.28a16.27 16.27 0 0 0 9.65-3V74h-10.19v-6.19h17V84.6a25.48 25.48 0 0 1-16.68 6.22c-12.48.01-20.7-8.9-20.7-20.55zM429 50.16h7v16.62h19.1V50.16h7v40h-7V73.29H436v16.85h-7zM490.16 56.67h-12.73v-6.51h32.5v6.51h-12.75v33.47h-7z"/><path d="M661.93 96.63h-16.81a45.92 45.92 0 1 0-34.23 15.31h51a7.66 7.66 0 1 0 .55-15.31h-.51zM580.26 66a30.63 30.63 0 1 1 30.63 30.63A30.63 30.63 0 0 1 580.26 66z" fill="url(#a)"/><rect x="539.43" y="22.61" width="15.31" height="89.33" rx="2.45" ry="2.45" fill="url(#b)"/></svg>
    <img src="${pluralsight_nodejs}" width="68%" alt="" />
    </a>`
  },
  {
    name: 'Javascript',
    rating: 3,
    level: 'Intermediate',
    description: `jQuery, EJS<br /><br />
    <a href="https://stackoverflow.com/story/franckboudraa" target="_blank" rel="noopener noreferrer">
    <svg width="40%" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 690 132"><defs><linearGradient id="a" x1="542.55" y1="115.04" x2="669.47" y2="27.65" gradientTransform="matrix(1 0 0 -1 0 134)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e80a89"/><stop offset="1" stop-color="#f05a29"/></linearGradient><linearGradient id="b" x1="519.62" y1="85.63" x2="655.55" y2="-7.96" xlink:href="#a"/></defs><path d="M20.41 50.16h15.76c9.37 0 15.19 5.31 15.19 13.36v.11c0 9-7.2 13.65-16 13.65h-7.93v12.86h-7zM35.6 71c5.31 0 8.62-3 8.62-7.14v-.16c0-4.68-3.37-7.14-8.62-7.14h-8.17V71zM66.55 50.16h7v33.58h21v6.4h-28zM108.11 73.18v-23h7v22.71c0 7.42 3.83 11.36 10.11 11.36s10.05-3.71 10.05-11.08v-23h7v22.67c0 11.94-6.74 17.93-17.19 17.93s-16.97-6-16.97-17.59zM160 50.16h17.82c5 0 9 1.48 11.54 4a12.09 12.09 0 0 1 3.31 8.62v.11c0 6.57-3.94 10.51-9.48 12.11L194 90.13h-8.4l-9.82-13.93H167v13.94h-7zM177.26 70c5 0 8.22-2.63 8.22-6.68v-.11c0-4.28-3.08-6.62-8.28-6.62H167V70zM223.4 49.88h6.51l17.59 40.26h-7.42L236 80.49h-18.9l-4.1 9.65h-7.2zm10 24.39l-6.91-16-6.85 16zM262.34 50.16h7v33.58h21v6.4h-28zM302.93 84.31l4.23-5c3.83 3.31 7.71 5.2 12.62 5.2 4.34 0 7.08-2.06 7.08-5v-.11c0-2.86-1.6-4.4-9-6.11-8.51-2.06-13.31-4.57-13.31-11.94v-.11c0-6.85 5.71-11.59 13.65-11.59a22.2 22.2 0 0 1 14.51 5L328.94 60c-3.6-2.68-7.2-4.11-10.85-4.11-4.11 0-6.51 2.11-6.51 4.74v.11c0 3.08 1.83 4.45 9.54 6.28 8.43 2 12.77 5 12.77 11.68v.11c0 7.48-5.88 11.94-14.28 11.94a24.59 24.59 0 0 1-16.68-6.44zM350.55 50.16h7v40h-7zM374.48 70.27v-.11a20.37 20.37 0 0 1 20.07-20.67h.55c7 0 11.25 1.94 15.36 5.42l-4.46 5.3A15.85 15.85 0 0 0 394.81 56c-7.37 0-13 6.4-13 14v.11c0 8.22 5.42 14.28 13.59 14.28a16.27 16.27 0 0 0 9.65-3V74h-10.19v-6.19h17V84.6a25.48 25.48 0 0 1-16.68 6.22c-12.48.01-20.7-8.9-20.7-20.55zM429 50.16h7v16.62h19.1V50.16h7v40h-7V73.29H436v16.85h-7zM490.16 56.67h-12.73v-6.51h32.5v6.51h-12.75v33.47h-7z"/><path d="M661.93 96.63h-16.81a45.92 45.92 0 1 0-34.23 15.31h51a7.66 7.66 0 1 0 .55-15.31h-.51zM580.26 66a30.63 30.63 0 1 1 30.63 30.63A30.63 30.63 0 0 1 580.26 66z" fill="url(#a)"/><rect x="539.43" y="22.61" width="15.31" height="89.33" rx="2.45" ry="2.45" fill="url(#b)"/></svg>
    <img src="${pluralsight_js}" width="68%" alt="" />
    </a>`
  },
  {
    name: 'Ruby',
    rating: 3,
    level: 'Intermediate',
    description: 'Rails'
  },
  {
    name: 'MongoDB',
    rating: 2,
    level: 'Beginner',
    description: 'Mongoose'
  },
  {
    name: 'GraphQL',
    rating: 1,
    level: 'Beginner',
    description: ''
  },
  {
    name: 'AWS',
    rating: 3,
    level: 'Intermediate',
    description: 'S3, EC2, SES, CloudFront, Route 53, RDS'
  }
];

export default class SkillsList extends Component {
  render() {
    const renderItems = items.map(({ name, rating, level, description }) => {
      return (
        <SkillsItem
          name={name}
          rating={rating}
          key={name}
          level={level}
          description={description}
        />
      );
    });

    return <div className="row">{renderItems}</div>;
  }
}
