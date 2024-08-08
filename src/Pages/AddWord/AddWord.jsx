import React, { useState } from "react";
import styles from "./AddWord.module.scss";

export default function AddWord () {

    const [newWord, setNewWord] = useState ('');
    const [submittedWord, setSubmittedWord] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedWord(newWord.toUpperCase());
        setNewWord('');
    };


    return (
        <div className={styles.addWordContainer}>
            <h2>Here you can add your own word</h2>
            <form onSubmit={handleSubmit}>
            <input onChange={(e) => setNewWord(e.target.value)} value={newWord}/>
            <button type='submit'>Add this word</button>
            </form>
            <p>Formatted text:{submittedWord}</p>
        </div>

    );
}