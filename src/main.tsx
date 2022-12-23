import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/main.css';
import { GameProvider, ThemeProvider } from './context';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </ThemeProvider>
  </React.StrictMode>
);
