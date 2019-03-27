import React from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
    return <div class="col s12 m6">
    <div className="character card">
            <div className="card-image">
                <img alt={props.name} src={"images/" + props.image}/>
                <span>{props.name}</span>
            </div>
    </div>
</div>
}

export default CharacterCard;