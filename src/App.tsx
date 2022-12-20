import { GameBoard, ScoreBoard, Setup, Title } from './components';
import { ThemeProvider } from './context';
import { usePairs, usePlayers } from './hooks';

function App() {
  const { pairs, setPairs } = usePairs(0);
  const { players, setPlayers } = usePlayers(1);

  return (
    <ThemeProvider>
      <main className="">
        <Title />
        <Setup players={players} setPlayers={setPlayers} />
        <ScoreBoard
          pairs={pairs}
          setPairs={setPairs}
          players={players}
          setPlayers={setPlayers}
        />
        <GameBoard />
      </main>
    </ThemeProvider>
  );
}

export default App;
