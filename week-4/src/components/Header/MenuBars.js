import React from 'react';

const MenuBars = (props) => {
  if ( !props.isMenuOpen ) {
    return (
      <div 
        className="menu-bars" 
        id="menu-bars"
        onClick={ props.toggleMenuOpen }
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    )
  }
  return (
    <div 
      className="menu-bars change" 
      id="menu-bars"
      onClick={ props.toggleMenuOpen }
    >
      <div className="change bar1"></div>
      <div className="change bar2"></div>
      <div className="change bar3"></div>
    </div>
  )
}

export default MenuBars;