import React, {useEffect, useState} from 'react';
import styles from "./Line.module.scss"

export default function Line ({english, transcription, russian, deleteItem, id, selectedLine, setSelectedLine, editWords }) {
    const [editLine, setEditLine] = useState(true);
    
    const [engSt, setEngSt] = useState("");
    const [tnsSt, setTnsSt] = useState("");
    const [rusSt, setRusSt] = useState("");



useEffect(() => {
    setEngSt(english);
    setTnsSt(transcription);
    setRusSt(russian);
}, [english, transcription, russian]);

function editLineLogic () {
    setEditLine(false);
}
function cancelEdit () {
    setEditLine(true);
}

function handleLineClick() {
    if (selectedLine === id) {
        setSelectedLine(null); // Deselect if the same line is clicked
    } else {
        setSelectedLine(id); // Select the new line
    }
}


    return (
        <div className={styles.containerLine} >
            {editLine ? (
                <div className={styles.content} onClick={handleLineClick}>
                    <p>{english}</p>
                    <p>{transcription}</p>
                    <p>{russian}</p>
                    {selectedLine === id ? (
                        <div className={styles.editButtons}>
                        <button onClick={editLineLogic} > <img src="src\assets\edit-pencil-line-01-svgrepo-com.svg" alt="edit" /></button>
                        <button onClick={() => deleteItem(id)}> <img src="src\assets\delete-2-svgrepo-com.svg" alt="delete" /> </button>
                    </div>
                    ) : null}
                    
                </div>
            ) : (
                <div className={styles.editContent}>
                    <input type="text" value={engSt} onChange={(e) => setEngSt(e.target.value)} />
                    <input type="text" value={tnsSt} onChange={(e) => setTnsSt(e.target.value)} />
                    <input type="text" value={rusSt} onChange={(e) => setRusSt(e.target.value)} />
                    <button 
                    onClick={() => {
                        editWords(id, engSt, tnsSt, rusSt);
                        setEditLine(true)
                    }}><img src="src\assets\done-v-svgrepo-com.svg" alt="save" /></button>
                    <button onClick={cancelEdit}><img src="src\assets\undo-right-svgrepo-com.svg" alt="cancel" /></button>
                </div>
            )}
        </div>
    )
}