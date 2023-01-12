
function Board({playerList}) {

  var numberTile = 15;
  var tiles = [];
  for (let i = 0; i < numberTile+2; i++) {
    tiles.push(i);
  }
  //write logic in here to display the char?
  var tileList = tiles.map((number) =>
    <div className = 'tile ' key={number.toString()} id={`tile${number}`}>
      {number + 1}
    </div>
  );

  return (
    <div className = 'App-board flex flex-center'>
      <div className = 'tile-container flex flex-wrap width-80 align-center'>
        {tileList}
      </div>
    </div>
  );
}

export default Board;