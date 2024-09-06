import PlayerInfo from './Components/Playerinfo';
function App() {
  
  return (<main>
      <div id="game-container"> 
       <ol id="players">
        <PlayerInfo name="Qaiser Ali" symbol="X"/>
        <PlayerInfo name="Sharif Saleem" symbol="O"/>
       </ol>
      </div>
    </main>
  );
}
export default App

