import Player from './Player';
import Dice from './Dice';

function Action({activePlayer}) {

  return (
    <div className = 'App-action flex'>
      <div className = 'flex height-80 width-40'>
        <Player player={activePlayer} />
        <Dice />
        <img src = {require('../assets/diceImages/1.png')} alt ='dice' className = 'height-auto flex-grow width-auto margin-auto'></img>
      </div>
    </div>
  );
}

export default Action;