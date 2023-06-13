import { Component } from 'react';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <ul>
        {monsters.map((monster) => (
          <li key={monster.id}>{monster.name}</li>
        ))}
      </ul>
    );
  }
}

export default CardList;
