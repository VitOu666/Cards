import React, { useState} from 'react';
import Header from "./Components/Header/Header.jsx";
import data from "./Components/words.json";
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import {Home, Game, Table, Error} from "./Pages/index.js"
import AddWord from './Pages/AddWord/AddWord.jsx';

function App() {
  const [words,setWords] = useState(data);
  return(
    <div className={styles.app}>
    <header><Header></Header></header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/game' element={<Game words={words} setWords={setWords}/>}></Route>
        <Route path='/table' element={<Table words={words} setWords={setWords} />}></Route>
        <Route path='*' element={<Error/>}></Route>
        <Route path='/new' element={<AddWord/>}></Route>
      </Routes>
    </main>
    
    </div>
  );
}

export default App;


/*
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

  const showTableContent = () => {
    setShowTable(true);
  };

  const showCardsContent = () => {
    setShowTable(false);
  };

  const handleUpdateWord = (id, updatedWord) => {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === id ? { ...word, ...updatedWord } : word
      )
    );
  };

  const handleDeleteWord = (id) => {
    setWords((prevWords) => prevWords.filter((word) => word.id !== id));
  };

  return (
    
    <div className={styles.app}>
      
      {showTable ? (
        <Table
          words={words}
          onUpdateWord={handleUpdateWord}
          onDeleteWord={handleDeleteWord}
        />
      ) : (
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
*/