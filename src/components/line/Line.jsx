import React, { useState } from 'react';
import styles from "./Line.module.scss";
import { validForm } from './validForm';
import Input from '../Input/Input';

export default function Line ({english, transcription, russian, deleteItem, id, selectedLine, setSelectedLine, editWords }) {
    const [editLine, setEditLine] = useState(true);

    const [formdata, setFormData] = useState ( {
        engWord: english,
        tnsWord: transcription,
        rusWord: russian,
    });

    const [valid, setValid] = useState(false);


function editLineLogic () {
    setEditLine(false);
}

function cancelEdit () {
    setEditLine(true);
    setFormData({
        engWord: english,
        tnsWord: transcription,
        rusWord: russian,
    });
}

function handleLineClick() {
    if (selectedLine === id) {
        setSelectedLine(null);
    } else {
        setSelectedLine(id);
    }
}

const handleClick = (e) => {
    e.preventDefault();
    const addedWord = validForm(formdata.engWord, formdata.tnsWord, formdata.rusWord, setValid);
    
    if (addedWord) {
        editWords(id, {
            english: addedWord.engWord,
            transcription: addedWord.tnsWord,
            russian: addedWord.rusWord,
        });
        setEditLine(true);
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
                    <form onSubmit={handleClick}>
                        {valid && <h4> Fill all the fields, please</h4>}
                        <Input
                        name="engWord"
                        type="text"
                        value={formdata.engWord}
                        onChange={(e) => 
                            setFormData({ ...formdata, engWord: e.target.value})
                        }
                        isInvalid={valid && formdata.engWord === ""}
                        />
                        <Input
                        name="tnsWord"                      
                        type="text"
                        value={formdata.tnsWord}
                        onChange={(e) => 
                            setFormData({ ...formdata, tnsWord: e.target.value})
                        }
                        isInvalid={valid && formdata.tnsWord === ""}
                        />
                        <Input
                        name="rusWord"
                        type="text"
                        value={formdata.rusWord}
                        onChange={(e) => 
                            setFormData({ ...formdata, rusWord: e.target.value})
                        }
                        isInvalid={valid && formdata.rusWord === ""}
                        />
                        <button 
                            type='submit'
                            disabled={valid}
                            className={valid ? styles.disabledButton : ''}
                            >
                            <img src="src\assets\done-v-svgrepo-com.svg" alt="save" />
                        </button>
                    </form>
                    


                    <button onClick={cancelEdit}><img src="src\assets\undo-right-svgrepo-com.svg" alt="cancel" /></button>
                </div>
            )}
        </div>
    )
}

/*
editWords(id, engSt, tnsSt, rusSt);

                    <input type="text" value={engSt} onChange={(e) => setEngSt(e.target.value)} />
                    <input type="text" value={tnsSt} onChange={(e) => setTnsSt(e.target.value)} />
                    <input type="text" value={rusSt} onChange={(e) => setRusSt(e.target.value)} />

                                        <button 
                    onClick={() => {
                        editWords(id, engSt, tnsSt, rusSt);
                        setEditLine(true)
                    }}><img src="src\assets\done-v-svgrepo-com.svg" alt="save" /></button>
*/