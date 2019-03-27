import React from "react";
import "./CharacterSpace.css";

function CharacterSpace(props) {
    return <div id="characterSpace" className="row">{props.children}</div>
}

export default CharacterSpace;