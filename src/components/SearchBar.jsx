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
        {keyword.length > 0 ? (
          <div className={styles.searchingString}>🖐 {keyword}</div>
        ) : null}
        <div className={styles.searchResultString}>REACENTLY SEARCHES</div>
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
      {searchingWord.length > 0 || searching ? (
        <SearchPreview keyword={searchingWord} />
      ) : null}
      <input
        autoComplete="off"
        className={
          searching || searchingWord.length > 0
            ? styles.searchBarFocus
            : styles.searchBar
        }
        type="search"
        id="search"
        placeholder="Search Nickname and Address"
        onChange={onchange}
        onClick={isSearching}
        onFocus={isSearching}
        onBlur={stopSearching}
      />
      <img className={styles.icon} src="img/searchIcon.png" alt="searchIcon" />
    </div>
  );
}

export default SearchBar;
