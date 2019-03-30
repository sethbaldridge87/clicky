import React from 'react';
import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
import CharacterSpace from './components/CharacterSpace/CharacterSpace';
import CharacterCard from './components/CharacterCard/CharacterCard';
import characters from "./characters.json";
import "./index.css";

var shuffleArray = array => {
  let i = array.length - 1;
  for (i > 0; i--;) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: characters
    };
  }

  render() {
    const shuffledPosts = shuffleArray(this.state.list);
    return (
      <div className="container-flex">
        <Header />
        <Instructions />
        <CharacterSpace>
          {shuffledPosts.map(data => (
          <CharacterCard
            id={data.id}
            name={data.name}
            image={data.image}
            />
          ))}
        </CharacterSpace>
      </div>
      
    )
  }
}
export default App;
