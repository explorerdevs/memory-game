import Title from './components/Title';
import SetUp from './components/SetUp';
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from './components/GameBoard';
import { usePlayers, usePairs} from './hooks';

function App() {
  const { pairs, setPairs } = usePairs(0);
  const { players, setPlayers } = usePlayers(1);

  return (
    <div className='App'>
      <Title />
      <SetUp
        players={players}
        setPlayers={setPlayers}
      />
      <ScoreBoard 
        pairs={pairs}
        setPairs={setPairs}
        players={players}
        setPlayers={setPlayers}
      />
      <GameBoard />
    </div>
  );
}

export default App;
