import React, {useState} from "react";
import "./Table.css";

const Table = ({ words, onUpdateWord, onDeleteWord }) => {
    const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ english: '', transcription: '', russian: '' });

  const handleEditClick = (word) => {
    setEditingId(word.id);
    setEditValues({
      english: word.english,
      transcription: word.transcription,
      russian: word.russian,
    });
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const handleSaveClick = () => {
    onUpdateWord(editingId, editValues);
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
    return (
      <div className="table-container">
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
            <tr key={word.id}>
              {editingId === word.id ? (
                <>
                  <td><input type="text" name="english" value={editValues.english} onChange={handleInputChange} /></td>
                  <td><input type="text" name="transcription" value={editValues.transcription} onChange={handleInputChange} /></td>
                  <td><input type="text" name="russian" value={editValues.russian} onChange={handleInputChange} /></td>
                  <td>
                    <button onClick={handleSaveClick}>Save Editing</button>
                    <button onClick={handleCancelClick}>Cancel Editing</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{word.english}</td>
                  <td>{word.transcription}</td>
                  <td>{word.russian}</td>
                  <td>
                    <div className="actions">
                      <button onClick={() => handleEditClick(word)}>Edit</button>
                      <button onClick={() => onDeleteWord(word.id)}>Delete</button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;