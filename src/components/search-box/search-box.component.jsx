import './search-box.styles.css';

const SearchBox = (props) => {
  const { onChangeHandle, className, placeholder } = props;
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandle}
    />
  );
};

export default SearchBox;
