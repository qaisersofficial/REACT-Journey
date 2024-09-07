const intiialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    return (
        <ol id="game-board">
        {intiialGameBoard.map((row, rowIndex) => (<li key={rowIndex} >
            <ol>
                {row.map((playerSymbol, columnIndex) => (<li key={columnIndex}>
                    <button>{playerSymbol}</button>
                </li>))}
            </ol>
        </li>))}
        </ol>
    );
    }