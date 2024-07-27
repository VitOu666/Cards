import React from "react";
import styles from "./Error.module.css";

export default function Error() {
    return (
        <div className={styles.containerError}>
            <h2>404</h2>
            <h3>Sorry, this page was not found </h3>
        </div>
    )
    
};