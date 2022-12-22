import { GameBoard, ThemeToggle, Title } from './components';

function App() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <header className="grid grid-cols-4 grid-rows-4 pt-32">
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

        <ThemeToggle classname="col-start-1 col-end-5 row-start-1 row-end-2 justify-self-end" />
      </header>

      <div className="h-container">
        <GameBoard />
      </div>

      <footer className="mx-auto">
        <div className="flex items-center justify-center gap-8">
          {/* TIME */}
          <p className="rounded-lg bg-primary-200 p-6 shadow-md">
            <span>Time</span>
            <time>0.00</time>
          </p>

          {/* MOVES */}
          <p className="rounded-lg bg-primary-200 p-6 shadow-md">
            <span>Moves</span>
            <output>0</output>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
