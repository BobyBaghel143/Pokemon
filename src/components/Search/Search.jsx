// CSS import
import "./Search.css";

import useDebounce from "../../hooks/useDebounce";

function Search({ updateSearchTerm }) {
  const debounceUpdateSearch = useDebounce((e) =>
    updateSearchTerm(e.target.value)
  );

  return (
    <div className="search-wrapper">
      <input
        id="search-pokemon"
        type="text"
        placeholder="pokemon name..."
        onChange={debounceUpdateSearch}
      />
    </div>
  );
}

export default Search;
