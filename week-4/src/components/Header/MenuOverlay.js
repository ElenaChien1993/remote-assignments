import React from 'react';

const MenuOverlay = (props) => {
  if ( props.isMenuOpen ) {
    return (
      <div className="overlay overlay-slide-left" id="overlay">
        <nav>
          <ul>
            <li id="nav-1"><a href="#about" onClick={ props.toggleMenuOpen }>ABOUT</a></li>
            <li id="nav-2"><a href="#gallery" onClick={ props.toggleMenuOpen }>GALLERY</a></li>
            <li id="nav-3"><a href="#contact" onClick={ props.toggleMenuOpen }>CONTACT</a></li>
          </ul>
        </nav>
      </div>
    )
  };
  return null;
};

export default MenuOverlay;