import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { onSearchChangeHandler, className, placeholder } = this.props;
    return (
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
      />
    );
  }
}

export default SearchBox;
