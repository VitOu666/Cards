import { makeAutoObservable, action } from "mobx";

class WordsStore {
  words = [];
  loading = true;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchWords = action( async () => {
    this.loading = true;
    try {
      const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      this.words = await response.json();
      this.error = null;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  });

addWordToAPI = action(async (newWord)  => {
    try {
      const response = await fetch("http://itgirlschool.justmakeit.ru/api/words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const addedWord = await response.json();
      this.words.push(addedWord);
    } catch (error) {
      this.error = error;
      throw error;
    }
  });

  deleteWord = action((id) => {
    this.words = this.words.filter(word => word.id !== id);
  });

  editWord = action((id, updatedWord) => {
    this.words = this.words.map(word =>
      word.id === id ? { ...word, ...updatedWord } : word
    );
  });
}

const wordsStore = new WordsStore();
export default wordsStore;
