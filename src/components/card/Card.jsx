import React from "react";
import './Card.css';

const Card = ({ word, showTranslation, onShowTranslation }) => {
    const { english, transcription, russian } = word;

    return (
    <div className="card">
        <h2>{english}</h2>
        <p>{transcription}</p>
        {showTranslation ? (
        <p>{russian}</p>
        ) : (
        <button onClick={onShowTranslation}>Проверить</button>
        )}
    </div>
    );
};

export default Card;