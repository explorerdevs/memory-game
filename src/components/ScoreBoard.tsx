import React from 'react';
import { UsePairsType } from '../hooks';
import { UsePlayersType } from '../hooks';

type Props =  UsePlayersType & UsePairsType;

const ScoreBoard = ({ pairs, setPairs, players, setPlayers }: Props) => {
  return (
    <>
      <h2>Player {players}'s Score</h2>
      <p className='score'>{pairs}</p>
    </>
  )
}

export default ScoreBoard