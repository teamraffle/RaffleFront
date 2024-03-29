import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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

  width: 30rem;
  height: 44px;
  background-color: #4f4f54;
  border-top: solid 1px #626262;
  border-left: solid 1px #626262;
  border-right: solid 1px #626262;
  border-bottom: solid 1px #626262;

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
  padding-right: 3rem;
  border-radius: ${(props) => (props.isActivated ? "8px 8px 0px 0px" : "8px")};
`;

/* 임의로 만든 컴포넌트임 */
const ClearInputIcon = styled.div`
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;

  /* 임의로 잡은 값임 */
  margin-top: 0.2rem;
  margin-left: 27.5rem;

  cursor: pointer;
`;
const SearchPreviewBox = styled.div`
  position: absolute;
  top: 4.8rem;
  width: 30rem;
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
  font-size: 1.4rem;
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

  const onEnterPress = (e) => {
    const filteringAddress = /0x[a-fA-f0-9]{40}/;
    const filteringNickname = /[a-f+]{3,20}/;
    if (e.key === "Enter") {
      if (
        filteringAddress.test(searchingWord) ||
        filteringNickname.test(searchingWord)
      ) {
        console.log("ENTER");

        // 지갑 형식에 맞으면 일단 검색함
        if (filteringAddress.test(searchingWord)) {
          sessionStorage.setItem("walletAddress", searchingWord);

          const url = sessionStorage.getItem("origin");
          const targetURL = url + "portfolio";
          window.location.href = targetURL;
        } else {
          console.log("searching by nickname");
        }
      }
    }
  };

  useEffect(() => {
    console.log(typeof searchingWord);
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
        placeholder="Search Nickname or Address"
        isActivated={activate}
        value={searchingWord}
        onChange={getSearchingWord}
        onClick={focusOnSearchBar}
        onFocus={focusOnSearchBar}
        onBlur={stopSearching}
        onKeyPress={onEnterPress}
      />
      {searchingWord.length > 0 ? (
        <ClearInputIcon onClick={clearKeyword}>
          <img src="img/clear_input_icon.png" alt="" />{" "}
        </ClearInputIcon>
      ) : null}

      {activate || searchingWord.length > 0 ? (
        <SearchPreviewBox>
          <SearchPreviewBoxKeyword>
            {(searchingWord.length < 20 && searchingWord) ||
              (searchingWord.length >= 20 &&
                searchingWord.substring(0, 20) + ".......")}
          </SearchPreviewBoxKeyword>
          {/* <SearchPreviewBoxResults>REACENTLY SEARCHES</SearchPreviewBoxResults> */}
          <div
            onClick={() => {
              console.log("ENTER");
              onEnterPress();
            }}
          ></div>
        </SearchPreviewBox>
      ) : null}
    </SearchBarArea>
  );
}

export default SearchBar;
