import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
    <div className={styles.header}>
        <div><img className={styles.logo} src="src\assets\WordWhiz.svg" alt="logo" /></div>
        <div className={styles.btnContainer}>
            <NavLink className={styles.btn} to="/table"><img src="src\assets\list-ul-alt-svgrepo-com.svg" alt=""/></NavLink>
            <NavLink className={styles.btn} to="/game"><img src="src\assets\cards-svgrepo-com.svg" alt="" /></NavLink>
        </div>
    </div>
    );
};
