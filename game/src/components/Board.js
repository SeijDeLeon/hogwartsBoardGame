
import Tile from './Tile.js';
import tileData from '../data/tileData.js';
function Board({playerList}) {

  //board displays all the tiles, and moves the characters

  //the tile data lives here. characters are sent in as props

  //Characters are moved across the board via dom manipulation, not through react state.
  //This is done so that the characters can move in a smooth transition, instead of an instant update
  //Alternatives would be to redo the state with the character in different increments, or to use react-transition-group dependency
  var numberTile = 15;
  var tiles = [];
  for (let i = 0; i < numberTile+2; i++) {
    tiles.push(i);
  }
  //write logic in here to display the char?
 /*  var tileList = tiles.map((number) =>
    <div className = 'tile ' key={number.toString()} id={`tile${number}`}>
      {number + 1}
    </div>
  ); */


  //sample tile
  //var tile = {id: 1, X: 10, Y: 10};
  return (
    <div className = 'App-board flex'>
      <div className ='board-container'>
        <img className = 'board-background-image' src = {require('../assets/backgrounds/hogwarts.jpg')} alt = 'hogwarts_background'>
        </img>
        {tileData.map((tile) =>
          <Tile tile = {tile} />
        )};
      </div>
    </div>
  );
}

export default Board;