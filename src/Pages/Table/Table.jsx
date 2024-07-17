import React, {useState} from "react";
import styles from "./Table.module.css";
import Line from "../../components/Line/Line";
import data from "../../components/words.json";


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
        <h2>Here are all the words for now</h2>
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

        }
        </div>
    )
    
};

