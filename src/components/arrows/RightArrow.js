import React from 'react';

const RightArrow = (props) => {
  return (
    <i className="fa fa-angle-right fa-5x"
       aria-hidden="true"
       onClick={ props.rightPhoto }>
    </i>
  )
}

export default RightArrow;
