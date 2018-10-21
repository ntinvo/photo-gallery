import React, { Component } from 'react';
import Photo from './Photo.js';
import LeftArrow from './arrows/LeftArrow.js';
import RightArrow from './arrows/RightArrow.js';

class Lessons extends Component {

  leftPhoto = () => {
    console.log("go left");
  }

  rightPhoto = () => {
    console.log("go right");
  }

  render() {
    return (
      <div>
        Photo Gallery
        <Photo />
        <LeftArrow leftPhoto={this.leftPhoto} />
        <RightArrow rightPhoto={this.rightPhoto} />
      </div>
    );
  }
}

export default Lessons;
