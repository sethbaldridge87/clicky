import React from "react";
import "./CharacterSpace.css";

function CharacterSpace(props) {
    return <div class="container"><div id="characterSpace" className="row">{props.children}</div></div>
}

export default CharacterSpace;