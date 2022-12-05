import { useState } from "react";

export function usePlayers(numberOfPlayers: number) {
  const [players, setPlayers] = useState(numberOfPlayers);
  return { players, setPlayers };
}


export type UsePlayersType = ReturnType<typeof usePlayers>