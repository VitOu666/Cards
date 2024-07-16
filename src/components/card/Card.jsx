import React, { useEffect, useState } from "react";
import styles from './Card.module.css';

export default function Card ({ english, transcription, russian, id }) {
    const [translate, setTranslate] = useState(false);

    useEffect(() => {
        setTranslate(false);
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
        }}>Check!</button>
        )}
        </div>
    </div>
    );
};
