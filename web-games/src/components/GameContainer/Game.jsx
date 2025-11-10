import GameContainer from "../States/GameContainer";
import { useState } from "react";
import { StartScreen } from "../States/StartScreen";
import { ConditionScreen } from "../States/ConditionScreen";
import { GenerateCondition } from "../GenerateCondition";

export function HrGame(){
    const [startState, setStartState] = useState(true);

    const [conditionState, setConditionState] = useState(false);
    const [condition, setCondition] = useState(null);
    
    const [gameState, setGameState] = useState(false);
    const [level, setLevel] = useState(0);

    function StartGame() {
        setStartState(false);
        setConditionState(true);
        setCondition(GenerateCondition(level));
    };
    function StartRound(){
        setConditionState(false);
        setGameState(true);
    };

    return(
        <div className="game">
            {startState && <StartScreen onClick={StartGame}></StartScreen>}
            {conditionState && <ConditionScreen level={condition} roundFunction={StartRound}></ConditionScreen>}
            {gameState && <GameContainer></GameContainer>}
        </div>

    )
}