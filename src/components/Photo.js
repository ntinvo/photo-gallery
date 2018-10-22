import React from 'react';
import Caption from './Caption.js';
import { CSSTransitionGroup } from 'react-transition-group';

const Photo = (props) => {
  const photo = {
    backgroundImage: `url(${props.property.image.url})`,
    key: `${props.property.key}`
  }
  return (
    <div className="photo" style={photo}
      onMouseDown={props.onStartHandler}
      onTouchStart={props.onStartHandler}
      onMouseUp={props.onEndHandler}
      onTouchEnd={props.onEndHandler}
    >
      <CSSTransitionGroup
        transitionName="caption"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <Caption key={props.property.key} caption={props.property.image.caption}/>
      </CSSTransitionGroup>
    </div>
  );
}

export default Photo;
