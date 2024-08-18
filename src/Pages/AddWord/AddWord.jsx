import React, { useState } from "react";
import styles from "./AddWord.module.scss";
import { observer } from "mobx-react";
import wordsStore from "../../Stores/WordStore";
import { validateAdd } from "../../Utils/validationAdd";

const AddWord = observer(() => {
  const [formData, setFormData] = useState({
    english: "",
    transcription: "",
    russian: ""
  });

  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value.toLowerCase(), 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateAdd(formData);

    if (!isValid) {
      setErrors(errors);
      setSuccessMessage("");
      alert("Please fill in all fields correctly.");
      return;
    }

    setIsAdding(true);

    const newWord = {
      english: formData.english,
      transcription: formData.transcription,
      russian: formData.russian,
    };

    try {
        await wordsStore.addWordToAPI(newWord);
        setSuccessMessage(`The word "${newWord.english} ${newWord.transcription} ${newWord.russian}" is added.`);
      } catch (error) {
        alert("Failed to add word. Please try again.");
      } finally {
        setIsAdding(false);
      }
    };

    const handleCancel = () => {
        setFormData({
          english: "",
          transcription: "",
          russian: ""
        });
    
        setErrors({
          english: false,
          transcription: false,
          russian: false
        });

        setSuccessMessage(""); 
    };



  return (
    <div className={styles.addWordContainer}>
      <h2>Here you can add your own word</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="english"
          placeholder="English"
          value={formData.english}
          onChange={handleChange}
          className={errors.english ? styles.invalidInput : ""}
        />
        {errors.english && <div className={styles.error}>Empty fields are not allowed or numbers are not needed here</div>}
        <input
          name="transcription"
          placeholder="Transcription"
          value={formData.transcription}
          onChange={handleChange}
          className={errors.transcription ? styles.invalidInput : ""}
        />
         {errors.transcription && <div className={styles.error}>Empty fields are not allowed or numbers are not needed here</div>}
        <input
          name="russian"
          placeholder="Russian"
          value={formData.russian}
          onChange={handleChange}
          className={errors.russian ? styles.invalidInput : ""}
        />
        {errors.russian && <div className={styles.error}>Empty fields are not allowed or numbers are not needed here</div>}
        <button type="submit" disabled={isAdding}>Add this word</button>
        {successMessage && (
          <div className={styles.successMessage}>
            {successMessage}
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </form>
    </div>
  );
});

export default AddWord;
