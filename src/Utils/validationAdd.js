// src/utils/validation.js

export function validateAdd({ english, transcription, russian }) {
    const errors = {
      english: false,
      transcription: false,
      russian: false
    };
  
    let isValid = true;
  
    if (english.trim() === "" || /\d/.test(english)) {
      errors.english = true;
      isValid = false;
    }
  
    if (transcription.trim() === "" || /\d/.test(transcription)) {
      errors.transcription = true;
      isValid = false;
    }
  
    if (russian.trim() === "" || /\d/.test(russian)) {
      errors.russian = true;
      isValid = false;
    }
  
    return { isValid, errors };
  }
  