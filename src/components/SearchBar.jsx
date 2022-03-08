import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div>
      <img
        className={styles.icon}
        src="https://user-images.githubusercontent.com/49471288/156142084-1cd52e4a-db14-4ced-93b8-2d23170f0291.png"
      />
      <input
        className={styles.searchBar}
        type="search"
        id="search"
        placeholder="Search Nickname and Address"
      />
    </div>
  );
}

export default SearchBar;
