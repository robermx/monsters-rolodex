import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => ({ monsters: users }),
          () => console.log(this.state)
        )
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    console.log(filteredMonsters);
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search monsters"
          onChange={(e) => {
            const searchField = e.target.value.toLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />
        <ul>
          {filteredMonsters.map((monster) => (
            <li key={monster.id}>{monster.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
