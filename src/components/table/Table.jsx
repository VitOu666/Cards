import React, {useState} from "react";
import "./Table.css";
import Line from "../line/Line";
import data from "../words.json";

const Table = () => {
  const [words, setWords] = useState(data);
  console.log(words)

  const handleDeleteWord = (id) => {
    setWords((prevWords)=> prevWords.filter((word) => word.id !==id));
  };


    return (
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>English</th>
              <th>Transcription</th>
              <th>Russian</th>
            </tr>
          </thead>
          <tbody>
          {words.map((word) => (
            <Line word={word} onDeleteWord={handleDeleteWord}/>
          ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;