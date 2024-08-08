import React, {useState} from "react";
import styles from "./Table.module.scss";
import Line from "../../Components/Line/Line";
import { NavLink } from "react-router-dom";


export default function Table({words, setWords}) {
    
  function deleteItem(id) {
    setWords(words.filter((word) => word.id!== id));
  }

  function editWords( id, english, transcription, russian) {
    setWords(
      words.map((word) => {
        if (word.id === id) {
          return {
            english: english,
            transcription: transcription,
            russian: russian,
          };
        }
        return word;
      })
    )
  }


  const [selectedLine, setSelectedLine] = useState(null);

  return (
        <div className={styles.containerTable}>

          <div className={styles.leftpart}>
          <h2>Here are all the words for now</h2>
            <div className={styles.itemTable} >
            {words.map((word) => (
            <Line
              key={word.id}
              id={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              setWords={setWords}
              deleteItem={deleteItem}
              selectedLine={selectedLine}
              setSelectedLine={setSelectedLine}
              editWords={editWords}
            />
            ))
            } </div>
          </div>
          <div className={styles.linkContainer} >
            <NavLink className={styles.link} to="/new">+ Add your own word</NavLink>
          </div>
        </div>
    )
    
};

