import React, { createContext, Component } from "react";

export const MyContext = createContext();

export class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null,
        };
    }

    fetchWords = () => {
        fetch("http://itgirlschool.justmakeit.ru/api/words")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.setState({ data, loading: false });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    deleteWord = (id) => {
        this.setState((prevState) => ({
            data: prevState.data.filter(word => word.id !== id)
        }));
    };

    editWord = (id, updatedWord) => {
        this.setState((prevState) => ({
            data: prevState.data.map(word =>
                word.id === id ? { ...word, ...updatedWord } : word
            )
        }));
    };

    componentDidMount() {
        this.fetchWords();
    }

    render() {
        const { data, loading, error } = this.state;

        return (
            <MyContext.Provider value={{ data, loading, error, deleteWord: this.deleteWord, editWord: this.editWord }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

