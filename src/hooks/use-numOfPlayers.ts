import { useState } from "react";

export function useNumOfPlayers(numOfPlayers: number) {
  const [numOfPlayers, setNumOfPlayers] = useState(numOfPlayers);
  return { numOfPlayers, setNumOfPlayers};
}

export type UseNumOfPlayersType = ReturnType<typeof useNumOfPlayers>