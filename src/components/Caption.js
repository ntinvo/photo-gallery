import React from 'react';

const Caption = (props) => {
  return (
    <p className="caption">{ props.property.image.caption }</p>
  );
}

export default Caption;
