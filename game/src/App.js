//import logo from './logo.svg';
import './App.css';
import PlayerList from './components/Players';
import Action from './components/Action';
import Board from './components/Board';
import { useState } from 'react';


function App() {
  var [playerList, updatePlayerList] = useState([{id: 1, name: 'Player1'}, {id: 2, name: 'Player2'}]);
  var [activePlayer, updateActivePlayer] = useState(playerList[0]);
  return (
    <div className="App">
      <PlayerList playerList = {playerList} activePlayer = {activePlayer} updatePlayerList = {updatePlayerList}/>
      <Action activePlayer = {activePlayer} updateActivePlayer = {updateActivePlayer}/>
      <Board playerList = {playerList}/>
    </div>
  );
}

export default App;
