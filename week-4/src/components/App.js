import './App.css';
import Header from './Header';
import Banner from './Banner';
import MainContent from './MainContent';
import Contact from './Contact';
import Footer from './Footer';
import { dogs } from '../dogs';
import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTitleChanged, setIsTitleChanged] = useState(false);
  const [dogList, setDogList] = useState(dogs);
  const [isMore, setIsMore] = useState(false);
  
  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCoverTitle = () => {
    setIsTitleChanged(!isTitleChanged);
  };

  const toggleContent = () => {
    setIsMore(!isMore);
  };

  return (
    <div>
      <Header 
        isMenuOpen={ isMenuOpen }
        toggleMenuOpen={ toggleMenuOpen }
      />
      <Banner 
        isTitleChanged={ isTitleChanged }
        toggleCoverTitle={ toggleCoverTitle }
      />
      <MainContent 
        dogList={ dogList }
        isMore={ isMore }
        toggleContent={ toggleContent }
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
