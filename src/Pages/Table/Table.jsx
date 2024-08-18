import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Table.module.scss";
import Line from "../../Components/Line/Line";
import { NavLink } from "react-router-dom";
import wordsStore from "../../Stores/WordStore";
import Loading from "../../Components/Loading/Loading";


const Table = observer(() => {
  const { data: words=[], loading, error, deleteWord, editWord, fetchWords } = wordsStore;
  const [selectedLine, setSelectedLine] = useState(null);

  
  useEffect(() => {
    fetchWords();
  }, [fetchWords]);


  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.containerTable}>
      <div className={styles.leftpart}>
        <h2>Here are all the words for now</h2>
        <div className={styles.itemTable}>
        {Array.isArray(words) && words.length > 0 ? (
          words.map((word) => (
            <Line
              key={word.id}
              id={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              deleteItem={deleteWord}
              selectedLine={selectedLine}
              setSelectedLine={setSelectedLine}
              editWords={editWord}
            />
          ))
        ):(
          <div>No words available</div>
          )}
        </div>
      </div>
      <div className={styles.linkContainer}>
        <NavLink className={styles.link} to="/new">+ Add your own word</NavLink>
      </div>
    </div>
  );
});

export default Table;
