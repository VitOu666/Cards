import React from "react";
import styles from "./Input.module.scss";

export default function Input ({ type, onChange, value, isInvalid}) {
    return (
        <div>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                className={isInvalid ? styles.invalidInput : ''}
                />
        </div>
    );
}