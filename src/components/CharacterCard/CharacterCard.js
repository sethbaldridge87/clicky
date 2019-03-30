import React from "react";
import "./CharacterCard.css";

function CharacterCard(props) {

return <div class="col l3 m6">
        <div className="character card" data-id={props.id} onClick={(event) => props.newShuffle(event,props.id)}>
            <div className="card-image">
                <img alt={props.name} src={"images/" + props.image}/>
            </div>
        </div>
    </div>
    
}
export default CharacterCard;