import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card.jsx";
import styles from "./Game.module.css";

export default function Game({words,setWords}) {
    const [countWord, setCountWord] = useState(0);

    const [wordsLearned, setWordsLearned] = useState(0);

    useEffect(() => {
        const storedWordsLearned = localStorage.getItem('wordsLearned');
        if (storedWordsLearned) {
            setWordsLearned(parseInt(storedWordsLearned, 10));
        }
    }, [])

    function handleNext() {
        if(countWord === words.length - 1) {
            setCountWord(0);
            return;
        }
        setCountWord(countWord + 1);
    }
    function handlePrev() {
        if(countWord === 0) {
            setCountWord(words.length - 1);
            return;
        }
        setCountWord(countWord - 1);
    }
    function incrementWordsLearned() {
        const newWordsLearned = wordsLearned + 1;
        setWordsLearned(newWordsLearned);
        localStorage.setItem('wordsLearned', newWordsLearned)
    }


    return (
        <div className={styles.wrapGame}>
        <div className={styles.containerGame}>
            <div className={styles.contentGame}>
            <button onClick={handlePrev} >&lt;</button>
            <Card {...words[countWord]} onCheck={incrementWordsLearned}></Card>
            <button onClick={handleNext}>&gt;</button>
            </div>
        </div>
        <div>
            <p className={styles.infoGame}>You've learned {wordsLearned} words today!</p>
        </div>
        </div>

    )
    
};