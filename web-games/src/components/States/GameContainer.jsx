import "./GameContainer.css";
import { generateCharacters } from "../Person/GenerateCharacters";
import { useState } from "react";
import SwipeButton from "../Button";
import { DrawAnimateCharacter } from "../Person/DrawAnimateCharacter";
import { Timer } from "../UI/Timer";

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

export default function GameContainer({condition, endgameFunction}) {  
  console.log(endgameFunction)
  const [current, setCharacter] = useState(() => generateCharacters());
  const [direction, setDirection] = useState(0);
  const [id, setId] = useState(0);
  const [level, setLevel] = useState(0);
  const [move, setMove] = useState(false);

  const levelCondition = condition["condition"]

  function checkCharacter(direction) {
    if (!move) {
      if ((current.experience >= levelCondition["experience"]) & (levelCondition.colors.includes(current.sprite.description))) {
        console.log("Подошел!" + current.experience + current.sprite.description);
      }
      // console.log(levelCondition);
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
      <Timer endgameFunction={endgameFunction}></Timer>
      <div className="game">
        <SwipeButton onClick={() => checkCharacter("left")} />
        <DrawAnimateCharacter
          key={id}
          sprite={current.sprite["path"]}
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
