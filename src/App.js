import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
import CharacterSpace from './components/CharacterSpace/CharacterSpace';
import CharacterCard from './components/CharacterCard/CharacterCard';
import characters from "./characters.json";
import "./index.css";

class App extends Component {

  state = {
    characters
  };

  render() {
    return (
      <div className="container-flex">
        <Header />
        <Instructions />
        <CharacterSpace>
          {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
            />
          ))}
        </CharacterSpace>
      </div>
      
    )
  }
}
export default App;
