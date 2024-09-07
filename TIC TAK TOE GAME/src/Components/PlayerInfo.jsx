import { useState } from "react";
function PlayerInfo ({initialName, symbol}) {
   const [ playerName, setPlayerName] = useState(initialName);
   const [ isModification, setIsEditing ] = useState(false);
    //   const  handleModificationClick = () =>{
    //     // setIsEditing(isModification ? false : true);
    //     // setIsEditing(isModification ? false : true); // This is the same as the line above
    //     setIsEditing(!isModification); // This is the same as the line above
    //   }
    const handleModificationClick = () => {
         setIsEditing((wasModification) => !wasModification);
      };
      function handleChangeName(event){
        setPlayerName(event.target.value);
      }
      let editablePlayerName = <span className="player-name">{playerName}</span>;
      if (isModification){
        editablePlayerName = <input type="text" required value = {playerName} onChange={handleChangeName} />;
      }
    return (
    <li>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleModificationClick}>{isModification ? "Save" : "Edit"} </button>
        </li>
        );
}
export default PlayerInfo;