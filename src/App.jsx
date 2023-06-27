import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchField = (e) => {
    const searchFieldValue = e.target.value.toLowerCase();
    setSearchField(searchFieldValue);
  };

  const onTitleChamge= (e) => {
    const searchFieldValue = e.target.value.toLowerCase();
    setTitle(searchFieldValue);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="monsters-saarch-box"
        placeholder="Search monsters"
        onChangeHandle={onSearchField}
      />
      <SearchBox
        className="title-saarch-box"
        placeholder="set title"
        onChangeHandle={onTitleChamge}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
