import GameContainer from "../States/GameContainer";
import { useState } from "react";
import { StartScreen } from "../States/StartScreen";
import { ConditionScreen } from "../States/ConditionScreen";

export function HrGame(){
    const [startState, setStartState] = useState(true);
    const [conditionState, setConditionState] = useState(false)
    const [gameState, setGameState] = useState(false)

    function StartGame() {
        setStartState(false)
        setConditionState(true)
    }

    return(
        <div className="game">
            {startState && <StartScreen onClick={StartGame}></StartScreen>}
            {conditionState && <ConditionScreen></ConditionScreen>}
        </div>

    )
}