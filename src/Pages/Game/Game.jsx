import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Card from "../../Components/Card/Card.jsx";
import styles from "./Game.module.scss";
import wordsStore from "../../Stores/WordStore.jsx";
import Loading from "../../Components/Loading/Loading.jsx";


const Game = observer(() => {
  const { data: words, loading, error } = wordsStore;
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    if (words.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  }

  function handlePrev() {
    if (words.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  }

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (words.length === 0) return <div>No words available</div>;

  const currentWord = words[currentIndex];

  return (
    <div className={styles.wrapGame}>
      <div className={styles.containerGame}>
        <div className={styles.contentGame}>
          <button onClick={handlePrev}>&lt;</button>
          <Card
            id={currentWord.id}
            english={currentWord.english}
            transcription={currentWord.transcription}
            russian={currentWord.russian}
          />
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
});

export default Game;
