import { useState } from "react";
function PlayerInfo ({name, symbol}) {
   const [ isModification, setIsEditing ] = useState(false);
      const  handleModificationClick = () =>{
        setIsEditing(true);
      }
      let playerName = <span className="player-name">{name}</span>;
      if (isModification){
        playerName = <input type="text" required />;
      }
    return (
    <li>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleModificationClick}>Modify</button>
        </li>
        );
}
export default PlayerInfo;