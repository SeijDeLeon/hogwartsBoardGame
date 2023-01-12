function Player({player}) {

  return (
    <div className = 'flex-grow height-80'>
      <img className = 'height-80' src = {require(`../assets/characterImages/${player.id}.png`)} alt = 'characterImage' id={`player${player.id}`}>
      </img>
      <div className = 'playerName'>{player.name}</div>
    </div>
  );
}

export default Player;