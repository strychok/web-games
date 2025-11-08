import "./GameContainer.css";
import { generateCharacters } from "../Person/GenerateCharacters";
import { useState } from "react";
import SwipeButton from "../Button";
import { DrawAnimateCharacter } from "../Person/DrawAnimateCharacter";

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
  const [current, setCharacter] = useState(() => generateCharacters());
  const [direction, setDirection] = useState(0);
  const [id, setId] = useState(0);
  const [level, setLevel] = useState(0);
  const [move, setMove] = useState(false);

  const levelCondition = {
    experience: 3,
  };

  function checkCharacter(direction) {
    if (!move) {
      if (current.experience >= levelCondition.experience) {
        console.log(current.experience);
      }
      console.log(direction);
      setDirection(direction);
      setMove(true);
      setTimeout(() => {
        setNewCharacter();
        setDirection(0);
        setMove(false);
      }, 600);
    }
  }

  function setNewCharacter() {
    setCharacter(generateCharacters());
    setId(id + 1);
  }

  return (
    <div className="main">
      <div className="game">
        <SwipeButton onClick={() => checkCharacter("left")} />
        <DrawAnimateCharacter
          key={id}
          sprite={current.sprite}
          move={move}
          direction={direction}
        ></DrawAnimateCharacter>
        <SwipeButton onClick={() => checkCharacter("right")} />
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
