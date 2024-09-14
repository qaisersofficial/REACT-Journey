const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onClickSquare, turns}) {
    // i am producing some derived state from the turns
    //gameBoard is a computed value that is derived from some state (turns)
    let gameBoard = intialGameBoard;
    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;

    }
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
                    <button onClick={() => onClickSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
                </li>))}
            </ol>
        </li>))}
        </ol>
    );
    }