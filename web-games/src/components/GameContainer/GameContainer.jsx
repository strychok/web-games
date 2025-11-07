import "./GameContainer.css";
import { generateCharacters } from "../Person/GenerateCharacters";
import { useState } from "react";
import SwipeButton from "../Button";

// function useGameLogic(){
//   const [characters] = useState(() => generateCharacters(5));
//   const [index, setIndex] = useState(0);
//   const [score, setScore] = useState(0);

//   const current = characters[index];

//   function nextCharacter() {
//     setIndex(i => Math.min(i + 1, characters.length - 1)); // исправил границу
//   }
//   return {characters, current, index, score, nextCharacter};
// }

export default function GameContainer() {
  const [characters] = useState(() => generateCharacters(5));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = characters[index];

  function nextCharacter() {
    setIndex(i => Math.min(i + 1, characters.length - 1)); // исправил границу
    console.log("rkbr")
  }

  return (
    <div className="main">
      <div className="game">
        <SwipeButton onClick={nextCharacter} />
        {current && (
          <img src={current.sprite} alt={current.name} className="personFront" />
        )}
        <SwipeButton onClick={nextCharacter} />
      </div>

          </div>
  );
};

function Interface (){
    return (
        <div className="interfaceContainer">
            <div className="timer">10s</div>
            <div className="bottomMenu"></div>
        </div>
    );
};
