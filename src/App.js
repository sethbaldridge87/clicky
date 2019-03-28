import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
import CharacterSpace from './components/CharacterSpace/CharacterSpace';
import CharacterCard from './components/CharacterCard/CharacterCard';
import characters from "./characters.json";
import "./index.css";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {

  state = {
    characters
  };

  render() {
    const shuffledPosts = shuffleArray(this.state.characters);
    return (
      <div className="container-flex">
        <Header />
        <Instructions />
        <CharacterSpace>
          {shuffledPosts.map(character => (
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
