import React, { useContext, useState } from "react";
import Card from "../../Components/Card/Card.jsx";
import styles from "./Game.module.scss";
import { WordsContext } from "../../Context/WordsContext.jsx";
import Loading from "../../Components/Loading/Loading.jsx";

export default function Game() {
    const { data: words, loading, error } = useContext(WordsContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNext() {
        if (words.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
    function handlePrev() {
        if (words.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
    }

    if (loading) return <div>
    <Loading></Loading>
    </div>;
    if (error) return <div>Error: {error.message}</div>;
    if (words.length === 0) return <div>No words available</div>;

    const currentWord = words[currentIndex];

    return (
        <div className={styles.wrapGame}>
            <div className={styles.containerGame}>
                <div className={styles.contentGame}>
                    <button onClick={handlePrev} >&lt;</button>
                    <Card 
                        english={currentWord.english} 
                        transcription={currentWord.transcription} 
                        russian={currentWord.russian} 
                    />
                    <button onClick={handleNext}>&gt;</button>
                </div>
            </div>
        </div>

    )
    
};