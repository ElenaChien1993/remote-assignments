import React from 'react';

const Card = (props) => {
  return (
    <div className="col">
      <div className="img-container">
        <img 
          className="feat-img" 
          src={require(`../../img/grid-${props.id}.jpg`)} 
          alt={ props.name }
        />
      </div>
      <h2>{ props.name }</h2>
      <p>{ props.description }</p>
    </div>
  )
};

export default Card;