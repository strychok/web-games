import './App.css';
import { StartScreen } from './components/States/StartScreen';
import { ConditionScreen } from './components/States/ConditionScreen';
import GameContainer from './components/States/GameContainer';
import { HrGame } from './components/GameContainer/Game';

function App() {
  return (
    <div>
      <HrGame />
    </div>
  );
}

export default App;
