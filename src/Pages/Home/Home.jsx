import React from "react";
import styles from "./Home.module.scss";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className={styles.containerHome}>
            <div><h1>Hello!</h1>
            <h4>This is the app for learning new words!</h4>
            </div>
            <div className={styles.containerLinks}>
            <NavLink className={styles.link} to="/table">All words</NavLink>
            <NavLink className={styles.link} to="/game">Cards</NavLink>
            <NavLink className={styles.link} to="/new">Add your own word</NavLink>
            </div>
        </div>
    )
};