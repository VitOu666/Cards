import React from "react";
import '../components/Header.css';

const Header = ({ showTable, toggleTable }) => {
    return (
    <div className="header">
        <img src="" alt="logo" />
        <button onClick={toggleTable}>
        {showTable ? 'Карточки' : 'Список слов'}
        </button>
    </div>
    );
}

export default Header;