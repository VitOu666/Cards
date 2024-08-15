import React, { createContext, useState, useEffect } from "react";

export const WordsContext = createContext();


const WordsProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWords = () => {
        fetch("http://itgirlschool.justmakeit.ru/api/words")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };

    const deleteWord = (id) => {
        setData(prevData => prevData.filter(word => word.id !== id));
    };

    const editWord = (id, updatedWord) => {
        setData(prevData => prevData.map(word =>
            word.id === id ? { ...word, ...updatedWord } : word
        ));
    };

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <WordsContext.Provider value={{ data, loading, error, deleteWord, editWord }}>
            {children}
        </WordsContext.Provider>
    );
};

export default WordsProvider;
