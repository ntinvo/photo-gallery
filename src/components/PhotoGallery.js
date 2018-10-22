import React, { Component } from 'react';
import Photo from './Photo.js';
// import Caption from './Caption.js';
import LeftArrow from './arrows/LeftArrow.js';
import RightArrow from './arrows/RightArrow.js';

import data from '../data/data';

import './PhotoGallery.scss';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      length: data.images.length,
      currentIndex: 0
    }
  }

  // this function updates the state for currentIndex. If it is at the beginning of the array, then we will move
  // the index to the end of the array, and then update the state.
  leftPhoto = () => {
    let newIndex = this.state.currentIndex === 0 ? this.state.length - 1 : this.state.currentIndex - 1;
    this.setState({
      currentIndex: newIndex
    });
  }

  // this function updates the state for currentIndex. If it is at the end of the array, then we will
  // move the index to the beginning of the array, and then update the state.
  rightPhoto = () => {
    let newIndex = this.state.currentIndex === this.state.length - 1 ? 0 : this.state.currentIndex + 1;
    this.setState({
      currentIndex: newIndex
    });
  }

  // this function handles the case where the users start swiping or holding down the mouse, we then record
  // the X position and save it to the state. This will be use to handle swiping.
  onStartHandler = (e) => {
    this.setState({
      startSwipePositionX: e.pageX
    });
  }

  // this function will check the end of swipe and mouse up events. It will compare the end position with the
  // starting position that we got from onStartHandler, it will change the currentIndex based on the starting
  // and ending position.
  onEndHandler = (e) => {
    if (Math.abs(this.state.startSwipePositionX - e.pageX) < 50) {
      return;
    }
    if(this.state.startSwipePositionX < e.pageX) {
      let newIndex = this.state.currentIndex === 0 ? this.state.length - 1 : this.state.currentIndex - 1;
      this.setState({
        currentIndex: newIndex
      });
    } else {
      let newIndex = this.state.currentIndex === this.state.length - 1 ? 0 : this.state.currentIndex + 1;
      this.setState({
        currentIndex: newIndex
      });
    }
  }

  // renders the PhotoGallery component
  render() {
    let property = {
      image: this.state.data.images[this.state.currentIndex],
      key: this.state.currentIndex
    }
    return (
      <div className="photo-gallery">
        <div className="photo-wrapper">
          <Photo property={property}
            onStartHandler={this.onStartHandler}
            onEndHandler={this.onEndHandler}
          />
          {/* <Caption property={property}/> */}
        </div>

        <LeftArrow leftPhoto={this.leftPhoto} />
        <RightArrow rightPhoto={this.rightPhoto} />
      </div>
    );
  }
}

export default PhotoGallery;
