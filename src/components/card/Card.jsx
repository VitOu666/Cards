import React, { useEffect, useRef, useState } from "react";
import styles from './Card.module.css';

export default function Card ({ english, transcription, russian, id, onCheck }) {
    const [translate, setTranslate] = useState(false);
    const btnElement = useRef();

    useEffect(() => {
        setTranslate(false);
        btnElement.current.focus();
    }, [id]);

    return (
    
    <div className={styles.card}>
        <div className={styles.content}>
        <h2>{english}</h2>
        <p>{transcription}</p>
        {translate ? (
        <p>{russian}</p>
        ) : (
        <button className={styles.btnCheck} onClick={() => {
            setTranslate(true);
            onCheck();
        }} ref={btnElement}>Check!</button>
        )}
        </div>
    </div>
    );
};
