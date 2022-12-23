import { createStore as createGameStore } from '../lib';

interface GameState {
  pairs: number;
  players: number;
}

export const [GameProvider, useGameStore] = createGameStore<GameState>(
  {
    pairs: 0,
    players: 1,
  },
  'Game'
);
