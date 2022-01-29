import React from 'react';

const Banner = (props) => {
  const coverTitle = props.isTitleChanged ? 'Hope you have a great day!' : 'You are their whole world.';
  return (
    <div 
      className="banner" 
      id="about"
      onClick={ props.toggleCoverTitle }
    >
      <img className="logo" src={require("../img/cover.jpg")} alt="dog" />
      <h1 className="headline">{ coverTitle }</h1>
      <span className="tagline">The best smile you have ever seen.</span>
    </div>
  )
};

export default Banner;