import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBarArea = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  width: 38rem;
  height: 44px;
  background: #4f4f54;
  border-top: solid 1px #626262;
  border-left: solid 1px #626262;
  border-right: solid 1px #626262;
  border-bottom: solid 0px;
  font-size: 1.8rem;
  float: left;
  color: #bdbebe;
  padding-left: 4.5rem;
  border-radius: ${(props) => (props.isActivated ? "8px 8px 0px 0px" : "8px")};
`;

const SearchPreviewBox = styled.div`
  position: absolute;
  top: 4.8rem;
  width: 38rem;
  height: auto;
  background-color: #4f4f54;
  border-radius: 0px 0px 8px 8px;
  padding-left: 45px;
  color: #bdbebe;
  font-size: 18px;
  border-bottom: solid 1px #626262;
  border-left: solid 1px #626262;
  border-right: solid 1px #626262;
`;

const SearchPreviewBoxKeyword = styled.div`
  padding-top: 2.5rem;

  height: 6.5rem;
  font-size: 1.8rem;
  font-weight: 500;
  font-style: normal;
  text-align: left;
`;

const SearchPreviewBoxResults = styled.div`
  height: 40px;
  font-size: 1.6rem;
  font-weight: 500;
  font-style: normal;
  text-align: left;
`;

function SearchBar() {
  const [searchingWord, setSearchingWord] = useState("");
  const [activate, setActivate] = useState(false);

  const getSearchingWord = (event) => {
    setSearchingWord(event.target.value);
  };

  const focusOnSearchBar = () => {
    setActivate(true);
  };

  const stopSearching = () => {
    setActivate(false);
  };

  useEffect(() => {
    if (searchingWord.length > 0) {
      setActivate(true);
    } else {
      setActivate(false);
    }
  }, [searchingWord]);

  return (
    <SearchBarArea>
      <SearchInput
        autoComplete="off"
        type="search"
        id="search"
        placeholder="Search Nickname and Address"
        isActivated={activate}
        onChange={getSearchingWord}
        onClick={focusOnSearchBar}
        onFocus={focusOnSearchBar}
        onBlur={stopSearching}
      />
      {activate || searchingWord.length > 0 ? (
        <SearchPreviewBox>
          <SearchPreviewBoxKeyword>🖐 {searchingWord}</SearchPreviewBoxKeyword>
          <SearchPreviewBoxResults>REACENTLY SEARCHES</SearchPreviewBoxResults>
          <SearchPreviewBoxResults>REACENTLY SEARCHES</SearchPreviewBoxResults>
          <SearchPreviewBoxResults>REACENTLY SEARCHES</SearchPreviewBoxResults>
        </SearchPreviewBox>
      ) : null}

      <img className={styles.icon} src="img/searchIcon.png" alt="searchIcon" />
    </SearchBarArea>
  );
}

export default SearchBar;
