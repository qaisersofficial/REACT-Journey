import React, { useState } from 'react';
import PlayerInfo from './Components/Playerinfo';
import GameBoard from './Components/GameBoard';
import ActivityLog from './Components/ActivityLog';
function App() {

  const [activePlayer, setActivePlayer] = useState( "X" );
  const [gameTurns, setGameTurns] = useState([]);

  function switchPlayer(rowIndex, columnIndex) {
    setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X");
 
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
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
      <ActivityLog/>
    </main>
  );
}
export default App

