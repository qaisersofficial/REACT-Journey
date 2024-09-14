import React, { useState } from 'react';
import PlayerInfo from './Components/Playerinfo';
import GameBoard from './Components/GameBoard';
import ActivityLog from './Components/ActivityLog';
import {WINNING_COMBINATIONS} from './winning-combitination';
import GameOver from './Components/GameOver';
import BackgroundMusic from './Components/BackgroundSong';
const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer (gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {
  const [ players, setPlayers]=useState({
        X: "Player 1",
        O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState( "X" );
  // const [hasWinner, setHasWinner] = useState(false);
      const activePlayer = derivedActivePlayer(gameTurns);
//cutted from GameBoard component...
      let gameBoard = [...intialGameBoard.map(array => [...array])];
      for(const turn of gameTurns){
          const {square, player} = turn;
          const {row, col} = square;
          gameBoard[row][col] = player;
  
      }
      let winner;

      //lifting the computed value up
          for(const combination of WINNING_COMBINATIONS){
          const firstSquare = gameBoard[combination[0].row][combination[0].column];
          const secondSquare = gameBoard[combination[1].row][combination[1].column];
          const thirdSquare = gameBoard[combination[2].row][combination[2].column];
            
          if ( firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
                  winner = players[firstSquare];
                  break;
              }
          }

          const hasDraw = gameTurns.length === 9 && !winner;

  function switchPlayer(rowIndex, columnIndex) {

    setGameTurns(prevTurns => {
     const currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: columnIndex}, player: activePlayer },
         ...prevTurns
        ];
      return updatedTurns;
    });
  }
  function handleRematch(){
    setGameTurns([]);
  }

    function handlePlayerNameChange(symbol, newName){
      setPlayers(prevPlayers => {
        return {
          ...prevPlayers,
          [symbol]: newName,
        };
      });
     
    }

  return (<main>
     <BackgroundMusic src="/public/audio/bg-music.mp3" />
      <div id="game-container"> 
       <ol id="players" className='highlight-player'>
        <PlayerInfo initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName = {handlePlayerNameChange}/>
        <PlayerInfo initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName = {handlePlayerNameChange}/>
       </ol>
       {(winner || hasDraw )&& <GameOver winner={winner} onRestart={handleRematch}/>}
       <GameBoard onClickSquare={ switchPlayer } board={gameBoard}/>
      </div>
      <ActivityLog turns={gameTurns}/>
    </main>
  );
}
export default App

