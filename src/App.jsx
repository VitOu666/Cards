import React, { useState} from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';
import Table from './components/table/Table';
import data from "./components/words.json";
import './App.css'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [words, setData] = useState(data);

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

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    
    <div className='full'>
      <Header showTable={showTable} toggleTable={toggleTable} />
      {showTable ? (
        <Table/>
      ) : (
      <div className="app">
      <button onClick={goToPreviousCard}>&lt; </button>
      <Card word={words[currentIndex]} 
        showTranslation={showTranslation} 
        onShowTranslation={handleShowTranslation} />
      <button onClick={goToNextCard}> &gt;</button>
      </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default App;