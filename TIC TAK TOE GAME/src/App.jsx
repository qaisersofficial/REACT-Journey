import React, { useState } from 'react';
import PlayerInfo from './Components/PlayerInfo';
import GameBoard from './Components/GameBoard';
import Log from './Components/Log';
function App() {
  const [activePlayer, setActivePlayer] = useState( "X" );
  const [log, setLog] = useState([]);
  function switchPlayer(rowIndex, columnIndex){ 
    setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X");
    
    setLog(prevTurns =>{
        let currentPlayer = 'X';
        if (prevTurns.length > 0 && prevTurns[0].player === 'X'){
          currentPlayer = 'O';
        }

      const updatedTurns =  [ { square: {row: rowIndex, col: columnIndex} , player: currentPlayer, ...prevTurns }];
      return updatedTurns;
      });
    
  }

  
  return (<main>
      <div id="game-container"> 
       <ol id="players" className='highlight-player'>
        <PlayerInfo initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <PlayerInfo initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
       </ol>
       <GameBoard onClickSquare={ switchPlayer } activePlayerSymbol={activePlayer}/>
      </div>
      <Log />
    </main>
  );
}
export default App

