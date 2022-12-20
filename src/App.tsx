import { GameBoard, ThemeToggle, Title } from './components';
import { GameProvider, ThemeProvider } from './context';

function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <main className="min-h-screen bg-white dark:bg-black">
          <header className="">
            <ThemeToggle />
            <Title />

            <button
              type="button"
              title="New Game"
              className="inline-flex items-center rounded-pill bg-secondary-200 px-4 py-2 text-xl text-black"
            >
              New Game
            </button>

            <button
              type="button"
              title="Restart Game"
              className="inline-flex items-center rounded-pill bg-secondary-100 px-[2.2rem] py-2 text-lg text-black"
            >
              Restart
            </button>
          </header>

          <div className="h-container">
            <GameBoard />
          </div>

          <footer className="h-container">
            {/* TIME */}
            <button type="button" className="">
              <span>Time</span>
              <time>0.00</time>
            </button>

            {/* MOVES */}
            <button type="button" className="">
              <span>Moves</span>
              <output>0</output>
            </button>
            {/* MOVES */}
          </footer>
        </main>
      </GameProvider>
    </ThemeProvider>
  );
}

export default App;
