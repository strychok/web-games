import "./GameContainer.css"
import person from './/person.svg'

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

export default function GameContainer() {
  return (
    <div className="main">
    
      <div className="game">
        <Button direction="left" />
        <img src={person} className="personFront" />
        <Button direction="right" />
      </div>

      <Interface />
    </div>
  );
};