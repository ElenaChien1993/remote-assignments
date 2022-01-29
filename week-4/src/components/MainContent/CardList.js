import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const dogsGroupOne = props.dogList.slice(0, 4);
  return (
    <div className="row">
      {dogsGroupOne.map( dog => 
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

export default CardList;