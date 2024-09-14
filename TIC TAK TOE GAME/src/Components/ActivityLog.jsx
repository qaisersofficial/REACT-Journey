export default function ActivityLog({turns}) {
    return <ol id="log">
        {turns.map((turn, index) => {
            const {player, square} = turn;
            const {row, col} = square;
            return <li key={index}>Player {player} played on row {row}, column {col}</li>
        })}
    </ol>
}