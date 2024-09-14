import React, { useState } from 'react';
import PlayerInfo from './Components/Playerinfo';
import GameBoard from './Components/GameBoard';
import ActivityLog from './Components/ActivityLog';

function derivedActivePlayer (gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function App() {

  // const [activePlayer, setActivePlayer] = useState( "X" );
  const [gameTurns, setGameTurns] = useState([]);
      const activePlayer = derivedActivePlayer(gameTurns);
  function switchPlayer(rowIndex, columnIndex) {
    // setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X");
 
    setGameTurns(prevTurns => {
     const currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: columnIndex}, player: activePlayer },
         ...prevTurns
        ];
      return updatedTurns;
    });
  }
  
  return (<main>
      <div id="game-container"> 
       <ol id="players" className='highlight-player'>
        <PlayerInfo initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <PlayerInfo initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
       </ol>
       <GameBoard onClickSquare={ switchPlayer } turns={gameTurns}/>
      </div>
      <ActivityLog turns={gameTurns}/>
    </main>
  );
}
export default App

