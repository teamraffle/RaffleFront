import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar() {
  const [searchingWord, setSearchingWord] = useState("");
  const [searching, setSearching] = useState(false);

  const onchange = (event) => {
    setSearchingWord(event.target.value);
  };

  const SearchPreview = ({ keyword }) => {
    return (
      <div className={styles.searchResults}>
        <div>{keyword}</div>
      </div>
    );
  };

  const isSearching = () => {
    setSearching(true);
  };

  const stopSearching = () => {
    setSearching(false);
  };

  return (
    <div>
      {searchingWord.length > 0 ? (
        <SearchPreview keyword={searchingWord} />
      ) : null}
      <input
        className={
          searching || searchingWord.length > 0
            ? styles.searchBarFocus
            : styles.searchBar
        }
        type="search"
        id="search"
        placeholder="Search Nickname and Address"
        onChange={onchange}
        onFocus={isSearching}
        onBlur={stopSearching}
      />
      <img className={styles.icon} src="img/searchIcon.png" alt="searchIcon" />
    </div>
  );
}

export default SearchBar;
