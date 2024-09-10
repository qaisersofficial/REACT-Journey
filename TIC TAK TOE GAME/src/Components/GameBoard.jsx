const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onClickSquare}) {
    // const [gameBoard, setGameBoard] = useState(intialGameBoard);
    
    // function handleClickedSquare (rowIndex,columnIndex)  {
    //     setGameBoard((prevGameBoard) => {
    //         const newGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
    //         newGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return newGameBoard;
    //     } );
    //     onClickSquare();
    // } 
    return (
        <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (<li key={rowIndex} >
            <ol>
                {row.map((playerSymbol, columnIndex) => (<li key={columnIndex}>
                    <button onClick={onClickSquare}>{playerSymbol}</button>
                </li>))}
            </ol>
        </li>))}
        </ol>
    );
    }