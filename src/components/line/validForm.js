import { v4 as uuidv4 } from "uuid";

export function validForm (engWord, tnsWord, rusWord, setValid) {
    if (engWord === "" || tnsWord === "" || rusWord === "") {
        setValid(true);
        return
    }
    setValid(false);
    return {
        engWord: engWord,
        tnsWord: tnsWord,
        rusWord: rusWord,
        id: uuidv4(),
    }
}