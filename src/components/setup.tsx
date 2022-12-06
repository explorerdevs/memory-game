import { UsePlayersType } from '../hooks';

type Props = UsePlayersType;

const Setup = ({ players, setPlayers }: Props) => {
  return (
    <>
      {/* TODO: convert to modal */}
      <p className='instructions'>
        Click on 1 🃏, then try for it's match with another click. If they
        match, you win a pair! 🎊 Else try again next turn.
      </p>
      {/* TODO: add radio buttons for number of players */}
      {/* TODO: add select option for level of difficulty */}
    </>
  );
};

export { Setup };
