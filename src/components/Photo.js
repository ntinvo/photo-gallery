import React from 'react';
import Caption from './Caption.js';

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
      <Caption caption={props.property.image.caption}/>
    </div>
  );
}

export default Photo;
