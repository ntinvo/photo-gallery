import React from 'react';

const LeftArrow = (props) => {
  return (
    <i className="fa fa-angle-left fa-5x"
       aria-hidden="true"
       onClick={ props.leftPhoto }>
    </i>
  )
}

export default LeftArrow;
