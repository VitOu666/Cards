import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card.jsx";
import styles from "./Game.module.scss";

export default function Game({words,setWords}) {
    const [countWord, setCountWord] = useState(0);

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


    return (
        <div className={styles.wrapGame}>
            <div className={styles.containerGame}>
                <div className={styles.contentGame}>
                    <button onClick={handlePrev} >&lt;</button>
                    <Card {...words[countWord]}></Card>
                    <button onClick={handleNext}>&gt;</button>
                </div>
            </div>
        </div>

    )
    
};