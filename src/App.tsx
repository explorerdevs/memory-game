import { GameBoard, ScoreBoard, Setup, Title } from './components';
import { usePairs, usePlayers } from './hooks';

function App() {
  const { pairs, setPairs } = usePairs(0);
  const { players, setPlayers } = usePlayers(1);

  return (
    <div className='App'>
      <Title />
      <Setup players={players} setPlayers={setPlayers} />
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
