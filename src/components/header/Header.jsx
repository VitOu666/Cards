import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
    <div className={styles.header}>
        <div>
            <NavLink className={styles.logo} to="/"><img src="src\assets\WordWhiz.svg" alt="logo" /></NavLink>
            </div>
        <div className={styles.btnContainer}>
            <NavLink className={({ isActive }) => 
                        isActive ? `${styles.btn} ${styles.active}` : styles.btn
                    }  to="/table"><img src="src\assets\list-ul-alt-svgrepo-com.svg" alt=""/></NavLink>
            <NavLink className={({ isActive }) => 
                        isActive ? `${styles.btn} ${styles.active}` : styles.btn
                    } to="/game"><img src="src\assets\cards-svgrepo-com.svg" alt="" /></NavLink>
        </div>
    </div>
    );
};
