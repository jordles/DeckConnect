import './SearchBar.css'

const SearchBar = ({placeholder = "Search", color, style}) => {
  return (
    <div className="search-bar" style={{...style, backgroundColor: `var(--${color})`}}>
      <input type="text" placeholder={placeholder} style={{backgroundColor: `var(--${color}-light)`}}/>
    </div>
  );
};

export default SearchBar;