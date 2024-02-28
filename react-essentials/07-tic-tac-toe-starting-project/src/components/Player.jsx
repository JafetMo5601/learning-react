import { useState } from "react"

export default function Player({ initialName, symbol }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditButton() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = (<input required defaultValue={playerName} onChange={handleChange}></input>);
        btnCaption = "Save";
    }

    return (<li>
        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditButton}>{btnCaption}</button>
    </li>)
}