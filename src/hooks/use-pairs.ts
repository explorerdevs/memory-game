import { useState } from 'react';

export function usePairs(numberOfPairs: number) {
  const [pairs, setPairs] = useState(numberOfPairs);
  return { pairs, setPairs };
}

export type UsePairsType = ReturnType<typeof usePairs>;
