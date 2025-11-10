import { useState } from "react"

export function ConditionScreen({level, roundFunction}){

    const [index, setIndex] = useState(0);
    const dialogue = level["dialogue"];

    function changeText() {
        if (index ===  dialogue.length - 1) {
            roundFunction();
        } else {
            setIndex(index + 1);
        };
    };

    return(
        <div onClick={changeText}>{dialogue[index]}</div>
    )
}