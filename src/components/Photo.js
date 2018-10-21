import React from 'react';

const Photo = (props) => {
  const photo = {
    backgroundImage: `url(${props.property.image})`,
    key: `${props.property.key}`
  }
  return (
    <div className="photo" style={photo}
      onMouseDown={props.onStartHandler}
      onTouchStart={props.onStartHandler}
      onMouseUp={props.onEndHandler}
      onTouchEnd={props.onEndHandler}
    >
    </div>
  );
}

export default Photo;
