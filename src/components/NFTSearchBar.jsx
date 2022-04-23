import { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBarArea = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;
const Icon = styled.img`
  /* flex items properties */
  order: 1;

  position: absolute;
  margin-left: 0.8rem;
  width: 2.66rem;
  height: 2.66rem;
  cursor: default;
`;
const SearchInput = styled.input`
  /* flex items properties */
  order: 2;

  width: 48rem;
  background-color: #2f2f2f;

  /* text properties */
  font-size: 1.4rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #bdbebe;

  padding-left: 4.1rem;
  border: 0;
  outline: 0;
`;

/* 임의로 만든 컴포넌트임 */
const ClearInputIcon = styled.div`
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;

  /* 임의로 잡은 값임 */
  margin-top: 0.2rem;
  margin-left: 48rem;

  cursor: pointer;
`;

function NFTSearchBar() {
  const [searchingWord, setSearchingWord] = useState("");
  const [activate, setActivate] = useState(false);

  /* ------- functions ------- */
  const getSearchingWord = (event) => {
    setSearchingWord(event.target.value);
  };

  const focusOnSearchBar = () => {
    setActivate(true);
  };

  const stopSearching = () => {
    setActivate(false);
  };

  const clearKeyword = () => {
    setSearchingWord("");
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
      <Icon src="img/searchIcon.png" alt="searchIcon" />

      <SearchInput
        autoComplete="off"
        type="search"
        id="search"
        placeholder="Search Items and Collections"
        isActivated={activate}
        value={searchingWord}
        onChange={getSearchingWord}
        onClick={focusOnSearchBar}
        onFocus={focusOnSearchBar}
        onBlur={stopSearching}
      />
      {searchingWord.length > 0 ? (
        <ClearInputIcon onClick={clearKeyword}>
          <img src="img/clear_input_icon.png" alt="" />{" "}
        </ClearInputIcon>
      ) : null}

      {/* {activate || searchingWord.length > 0 ? (
        <SearchPreviewBox>
          <SearchPreviewBoxKeyword>🖐 {searchingWord}</SearchPreviewBoxKeyword>
          <SearchPreviewBoxResults>REACENTLY SEARCHES</SearchPreviewBoxResults>
          <SearchPreviewBoxResults>REACENTLY SEARCHES</SearchPreviewBoxResults>
          <SearchPreviewBoxResults>REACENTLY SEARCHES</SearchPreviewBoxResults>
        </SearchPreviewBox>
      ) : null} */}
    </SearchBarArea>
  );
}

export default NFTSearchBar;
