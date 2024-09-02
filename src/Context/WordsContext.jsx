import React, { createContext, useState, useEffect } from "react";

export const WordsContext = createContext();


export const WordsProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch("/api/words")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
}, []);

    return (
        <WordsContext.Provider value={{ data, loading, error }}>
            {children}
        </WordsContext.Provider>
    );
};

