import { createAStore as createGameStore } from './create-store';

interface IGameState {
  pairs: number;
  players: number;
}

const { StoreProvider, useStore } = createGameStore<IGameState>(
  {
    pairs: 0,
    players: 1,
  },
  'Game'
);

export { StoreProvider as GameProvider, useStore as useGameStore };
