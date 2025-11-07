import "./GameContainer.css"
import { generateCharacters } from "../Person/GenerateCharacters";
import { useState } from "react";
// import person from './/person.svg'

function GameLogic(){
  const [characters] = useState(() => generateCharacters(5));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = characters[index];
  return {characters, current, index, score}
}



export default function GameContainer() {
  const { current } = GameLogic();
  console.log(current)
  return (
    <div className="main">
    
      <div className="game">
        <Button direction="left" />
        <img src={current.sprite} className="personFront" />
        <Button direction="right" />
      </div>

      <Interface />
    </div>
  );
};
function Button({direction}){
    return (
        <button className="directionBtn">{String(direction)}</button>
    )
}

function Interface (){
    return (
        <div className="interfaceContainer">
            <div className="timer">10s</div>
            <div className="bottomMenu"></div>
        </div>
    );
};