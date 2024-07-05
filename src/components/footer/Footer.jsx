import React from "react";
import './Footer.css';

const Footer = ({ showTable, toggleTable }) => {
    return (
    <div className='footer'>
        <img src="" alt="logo" />
        <div>
        <button onClick={toggleTable}>
        {showTable ? 'Карточки' : 'Список слов'}
        </button>
        </div>
    </div>
    );
};

export default Footer