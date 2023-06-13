import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { onSearchChangeHandler, className, placeholder } = this.props;
    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
      />
    );
  }
}

export default SearchBox;
