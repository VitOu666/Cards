import React from 'react';
import Header from "./Components/Header/Header.jsx";
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Game, Table, Error } from "./Pages/index.js"
import AddWord from './Pages/AddWord/AddWord.jsx';

function App() {
  return (
    <div className={styles.app}>
      <header><Header /></header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path='/table' element={<Table />} />
          <Route path='/new' element={<AddWord />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
