import React from 'react';

const Button = (props) => {
  const btnText = props.isMore ? 'See Less' : 'See More';
  return (
    <div className="btn-container">
      <button
        className="btn"
        onClick={ props.toggleContent }
      >
      {btnText}
      </button>
    </div>
  )
};

export default Button;