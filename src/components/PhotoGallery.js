import React, { Component } from 'react';
import Photo from './Photo.js';
import LeftArrow from './arrows/LeftArrow.js';
import RightArrow from './arrows/RightArrow.js';

class Lessons extends Component {
  render() {
    return (
      <div>
        Photo Gallery
        <Photo />
        <LeftArrow />
        <RightArrow />
      </div>
    );
  }
}

export default Lessons;
