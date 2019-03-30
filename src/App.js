import React from 'react';
import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
import CharacterCard from './components/CharacterCard/CharacterCard';
import characters from "./characters.json";
import "./index.css";

var shuffleArray = array => {
  let i = array.length;
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
      list: characters,
      score: 0,
      topscore: 0
    };
  }
        // take the array, put it on state
        // make a copy of the array on state and manipulate it
        // put new array that's been manipulated back onto state
  reshuffle = (event, id) => {
    let newArray = this.state.list;
    let newScore = this.state.score;
    let finalScore;
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i]["id"] === id) {
        if (newArray[i]["clicked"] === "false") {
          newScore = newScore + 1;
          newArray[i].clicked = "true";
        } else {
          alert("You Lose!");
          finalScore = newScore;
          newScore = 0;
          for (let y = 0; y < newArray.length; y++) {
            newArray[y]["clicked"] = "false";
          }
        }
      }
    }
    this.setState({score: newScore});
        this.setState({list: newArray});
        if (finalScore > this.state.topscore) {
          this.setState({topscore: finalScore})
        }
  }

  render() {
    const shuffledPosts = shuffleArray(this.state.list);
    return (
      <div className="container-flex">
        <Header />
        <Instructions />
        <div id="scorebox" class="row"><h5>Score: {this.state.score}</h5><h5>Top Score: {this.state.topscore}</h5></div>
        <div class="container" id="characterSpace"><div className="row">
          {shuffledPosts.map(data => (
          <CharacterCard
            newShuffle={this.reshuffle}
            id={data.id}
            name={data.name}
            image={data.image}
            clicked={data.clicked}
            />
          ))}
          </div></div>
      </div>
      
    )
  }
}
export default App;
