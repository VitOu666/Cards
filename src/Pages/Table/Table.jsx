import React, { useContext, useState } from "react";
import styles from "./Table.module.scss";
import Line from "../../Components/Line/Line";
import { NavLink } from "react-router-dom";
import { WordsContext } from "../../Context/WordsContext";
import Loading from "../../Components/Loading/Loading";


export default function Table() {

  const { data: words, loading, error, deleteWord, editWord } = useContext(MyContext);


  const [selectedLine, setSelectedLine] = useState(null);

  
  if (loading) return <div> <Loading></Loading> </div>;
  if (error) return <div>Error: {error.message}</div>;

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
              deleteItem={deleteWord}
              selectedLine={selectedLine}
              setSelectedLine={setSelectedLine}
              editWords={editWord}
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

