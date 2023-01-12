import Player from './Player';

function PlayerList({playerList}) {

  return (
    <div className = 'App-players flex flex-center' >
      {playerList.map((player) =>
        <Player player={player} />
      )}
    </div>
  );
}

export default PlayerList;