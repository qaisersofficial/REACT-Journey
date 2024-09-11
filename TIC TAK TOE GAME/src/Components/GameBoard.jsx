const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

<<<<<<< HEAD
export default function GameBoard({onClickSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(intialGameBoard);
    
    function handleClickedSquare (rowIndex,columnIndex)  {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            newGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
            return newGameBoard;
        } );
        onClickSquare();
    }
=======
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
>>>>>>> 4ea39b4c1d1bbae8bbf80ba62fe15ab719b1d306
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