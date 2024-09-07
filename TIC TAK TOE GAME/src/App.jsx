import PlayerInfo from './Components/Playerinfo';
import GameBoard from './Components/GameBoard';
function App() {
  
  return (<main>
      <div id="game-container"> 
       <ol id="players">
        <PlayerInfo initialName="Player 1" symbol="X"/>
        <PlayerInfo initialName="Player 2" symbol="O"/>
       </ol>
       <GameBoard />
      </div>
    </main>
  );
}
export default App

