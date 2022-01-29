import React from 'react';
import MenuBars from './MenuBars';
import MenuOverlay from './MenuOverlay';
import Nav from './Nav';
import MediaQuery from 'react-responsive'

const Header = (props) => {
  return (
    <div className="main-header">
      <h4 className="name">Animal Shelter</h4>
      <MenuBars 
        toggleMenuOpen={ props.toggleMenuOpen }
        isMenuOpen={ props.isMenuOpen }
      />
      <MenuOverlay 
        toggleMenuOpen={ props.toggleMenuOpen }
        isMenuOpen={ props.isMenuOpen }
      />
      <MediaQuery minWidth={800}>
        <Nav />
      </MediaQuery>
    </div>
  )
};

export default Header;