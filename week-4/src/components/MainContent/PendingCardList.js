import React from 'react';
import Card from './Card';

const PendingCardList = (props) => {
  const dogsGroupTwo = props.dogList.slice(4, 8);
  if ( props.isMore ) {
    return (
      <div className="row">
        {dogsGroupTwo.map( dog => 
          <Card 
            id={ dog.id }
            key={ dog.id }
            name={ dog.name }
            description={ dog.description }
          />
        )}
      </div>
    )
  };
  return null;
};

export default PendingCardList;