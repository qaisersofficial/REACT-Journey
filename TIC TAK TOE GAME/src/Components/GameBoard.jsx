import { useState } from 'react';
const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(intialGameBoard);
    
    function handleClickedSquare (rowIndex,columnIndex)  {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            newGameBoard[rowIndex][columnIndex] = 'X';
            return newGameBoard;
        } );
    }
    return (
        <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (<li key={rowIndex} >
            <ol>
                {row.map((playerSymbol, columnIndex) => (<li key={columnIndex}>
                    <button onClick={() => handleClickedSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
                </li>))}
            </ol>
        </li>))}
        </ol>
    );
    }