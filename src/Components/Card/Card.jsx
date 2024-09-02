import React, { useEffect, useRef, useState } from "react";
import styles from './Card.module.scss';
import '../../Vars/_colors.scss';

export default function Card ({ english, transcription, russian }) {

const [translate, setTranslate] = useState(false);
const [countWords, setCountWords] = useState(0); // Объявляем состояние в которой будем хранить количество слов
const buttonRef = useRef(null);

useEffect(() => {
setTranslate(false);
if (buttonRef.current) {
    buttonRef.current.focus();
}
}, [english, transcription, russian]);

return (

<div className={styles.card}>
    <div className={styles.content}>
        <h2>{english}</h2>
        <p>{transcription}</p>
        {translate ? (
            <p className={styles.rus} >{russian}</p>
            ) : (
            <button 
            ref={buttonRef}
            className={styles.btnCheck}
            onClick={() => {
                setTranslate(true);
                setCountWords(countWords + 1) 
            }}>Check!</button>
        )}
        <p>Today you've learned <br /> <span className={styles.accentNum} >{countWords}</span> words</p>
    </div> 
</div>
);
};
