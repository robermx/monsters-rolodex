import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.monsters.map((monster) => (
            <li key={monster.id}>{monster.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
