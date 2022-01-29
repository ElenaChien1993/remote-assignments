import React from 'react';
import CardList from './CardList';
import Button from './Button';
import PendingCardList from './PendingCardList';


const MainContent = (props) => {
  return (
    <div className="main-content" id="gallery">
      <h1>Our Family</h1>
      <CardList 
        dogList= { props.dogList }
      />
      <PendingCardList 
        isMore={ props.isMore }
        dogList= { props.dogList }
      />
      <Button 
        toggleContent={ props.toggleContent }
        isMore={ props.isMore }
      />
    </div>
  )
};

export default MainContent;