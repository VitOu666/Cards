import React from "react";
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
    <div className={styles.header}>
        <div className={styles.logoContainer}>
            <NavLink className={styles.logo} to="/"><img src="src\assets\WordWhiz.svg" alt="logo" /></NavLink>
            <NavLink className={styles.logoAlt} to="/"><img src="src\assets\WW.svg" alt="logo" /></NavLink>
            </div>
        <div className={styles.btnContainer}>
            <NavLink className={({ isActive }) => 
                        isActive ? `${styles.btn} ${styles.active}` : styles.btn
                    }  to="/table"><img src="src\assets\list-ul-alt-svgrepo-com.svg" alt=""/><p>Table</p></NavLink>
            <NavLink className={({ isActive }) => 
                        isActive ? `${styles.btn} ${styles.active}` : styles.btn
                    } to="/game"><img src="src\assets\cards-svgrepo-com.svg" alt="" /><p>Cards</p></NavLink>
            <NavLink className={({ isActive }) => 
                        isActive ? `${styles.btn} ${styles.active}` : styles.btn
                    } to="/new"><img src="src\assets\add-square-svgrepo-com.svg" alt="" /><p>Add new <br></br> word</p></NavLink>
        </div>
    </div>
    );
};
