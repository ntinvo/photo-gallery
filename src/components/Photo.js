import React from 'react';

const Photo = (props) => {
  const photo = {
    backgroundImage: `url(${props.property.image})`,
    key: `${props.property.key}`
  }
  return (
    <div className="photo" style={photo}></div>
  )
}

export default Photo;
