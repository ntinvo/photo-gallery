import React, { Component } from 'react';
import Photo from './Photo.js';
import LeftArrow from './arrows/LeftArrow.js';
import RightArrow from './arrows/RightArrow.js';

import './PhotoGallery.scss';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/218983/pexels-photo-218983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/955463/pexels-photo-955463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
      currentIndex: 0
    }
  }

  leftPhoto = () => {
    let newIndex = this.state.currentIndex === 0 ? this.state.images.length - 1 : this.state.currentIndex - 1;
    this.setState({
      currentIndex: newIndex
    });
  }

  rightPhoto = () => {
    let newIndex = this.state.currentIndex === this.state.images.length - 1 ? 0 : this.state.currentIndex + 1;
    this.setState({
      currentIndex: newIndex
    });
  }

  onStartHandler = (e) => {
    e.preventDefault();
    this.setState({
      startSwipePositionX: e.pageX
    });
  }

  onEndHandler = (e) => {
    e.preventDefault();
    if (Math.abs(this.state.startSwipePositionX - e.pageX) < 50) {
      return;
    }
    if(this.state.startSwipePositionX < e.pageX) {
      let newIndex = this.state.currentIndex === 0 ? this.state.images.length - 1 : this.state.currentIndex - 1;
      this.setState({
        currentIndex: newIndex
      });
    } else {
      let newIndex = this.state.currentIndex === this.state.images.length - 1 ? 0 : this.state.currentIndex + 1;
      this.setState({
        currentIndex: newIndex
      });
    }
  }

  render() {
    let property = {
      image: this.state.images[this.state.currentIndex],
      key: this.state.currentIndex
    }
    return (
      <div className="photo-gallery">
        <div className="photo-wrapper">
          <Photo property={property}
            onStartHandler={this.onStartHandler}
            onEndHandler={this.onEndHandler}
          />
        </div>
        <LeftArrow leftPhoto={this.leftPhoto} />
        <RightArrow rightPhoto={this.rightPhoto} />
      </div>
    );
  }
}

export default PhotoGallery;
