import React from "react";
import "./CharacterCard.css";

class CharacterCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: "false"
        };
    }
    handleClick = () => {
        this.setState({clicked: "true"});
        document.getElementById('characterSpace').innerHTML = '';
    };
    render(){
    return <div class="col l3">
            <div className="character card" data-id={this.props.id} onClick={this.handleClick}>
                <div className="card-image">
                    <img alt={this.props.name} src={"images/" + this.props.image}/>
                </div>
                <h5>{this.state.clicked}</h5>
            </div>
        </div>
    }
}
export default CharacterCard;