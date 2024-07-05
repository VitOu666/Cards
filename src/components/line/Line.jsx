import React, {useState} from 'react';

const Line = ({word, onDeleteWord}) => {
    const [editing, setEditing] = useState(false);
    const [editValues, setEditValues] = useState ({
        english: word.english,
        transcription: word.transcription,
        russian: word.russian
    });

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSaveClick = () => {
        setEditing(false);
    };

    const handleCancelClick = () => {
        setEditing(false);
        setEditValues({
            english: word.english,
            transcription: word.transcription,
            russian: word.russian
        });
    };

    return (
        <tr key={word.id}>
            {editing ? (
                <>
                <td>
                    <input type="text" name="english" value={editValues.english} onChange={handleInputChange} />
                </td>
                <td>
                    <input type="text" name="transcription" value={editValues.transcription} onChange={handleInputChange} />
                </td>
                <td>
                    <input type="text" name="russian" value={editValues.russian} onChange={handleInputChange} />
                </td>
                <td>
                    <button onClick={handleSaveClick}>Save Editing</button>
                    <button onClick={handleCancelClick}>Cancel Editing</button>
                </td>
                </>
            ) : (
                <>
                <td> {editValues.english} </td>
                <td> {editValues.transcription} </td>
                <td> {editValues.russian} </td>
                <td>
                    <div className="actions">
                    <button onClick={() => handleEditClick()}>Edit</button>
                    <button onClick={() => onDeleteWord(word.id)}>Delete</button>
                    </div>
                </td>
                </>
            )}
        </tr>
    );
};

export default Line;