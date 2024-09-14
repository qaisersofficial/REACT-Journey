export default function GameBoard({onClickSquare, board}) {

    return (
        <ol id="game-board">
        {board.map((row, rowIndex) => (<li key={rowIndex} >
            <ol>
                {row.map((playerSymbol, columnIndex) => (<li key={columnIndex}>
                    <button onClick={() => onClickSquare(rowIndex, columnIndex)} disabled = {playerSymbol !== null}>{playerSymbol}</button>
                </li>))}
            </ol>
        </li>))}
        </ol>
    );
    }