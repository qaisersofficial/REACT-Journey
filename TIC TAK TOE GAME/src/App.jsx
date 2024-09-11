import React, { useState } from 'react';
import PlayerInfo from './Components/Playerinfo';
import GameBoard from './Components/GameBoard';
function App() {
  const [activePlayer, setActivePlayer] = useState( "X" );
  const [log, setLog] = useState([]);
  function switchPlayer() {
    setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X");
    setLog();
  }

  
  return (<main>
      <div id="game-container"> 
       <ol id="players" className='highlight-player'>
        <PlayerInfo initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <PlayerInfo initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
       </ol>
       <GameBoard onClickSquare={ switchPlayer } activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}
export default App

