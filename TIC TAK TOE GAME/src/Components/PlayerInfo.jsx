import { useState } from "react";
function PlayerInfo ({name, symbol}) {
   const [ isModification, setIsEditing ] = useState(false);
    //   const  handleModificationClick = () =>{
    //     // setIsEditing(isModification ? false : true);
    //     // setIsEditing(isModification ? false : true); // This is the same as the line above
    //     setIsEditing(!isModification); // This is the same as the line above
    //   }
    const handleModificationClick = () => {
         setIsEditing((wasModification) => !wasModification);
      };
      let playerName = <span className="player-name">{name}</span>;
      if (isModification){
        playerName = <input type="text" required value = {name} />;
      }
    return (
    <li>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleModificationClick}>{isModification ? "Save" : "Edit"} </button>
        </li>
        );
}
export default PlayerInfo;