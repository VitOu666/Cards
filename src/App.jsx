import React, { useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import words from './components/words.json';
import Card from './components/Card';
import './App.css'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    setShowTranslation(false);
  };

  const goToPreviousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
    setShowTranslation(false);
  };

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    
    <div className='full'>
      <Header></Header>
      <div className="app">
      <button onClick={goToPreviousCard}>&lt; </button>
      <Card word={words[currentIndex]} 
        showTranslation={showTranslation} 
        onShowTranslation={handleShowTranslation} />
      <button onClick={goToNextCard}> &gt;</button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;