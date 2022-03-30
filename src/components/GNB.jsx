import { Menu } from "antd";
import { Link } from "react-router-dom";
import styles from "./GNB.module.css";
import SearchBar from "./SearchBar.jsx";
import ProfileButton from "./ProfileButton.jsx";
import styled, { css } from "styled-components";

/* ---- will export this to theme.js ---- */
const colors = {
  RaffleWhite: "#f5f5f5",
  RaffleBlack: "#151517",
  RaffleNeon: "#d6f866",
};

/* ---- styled components ---- */
const GNBContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;

  /* text properties */
  font-size: 1.7rem;
  font-weight: 500;
  font-family: Poppins;

  /* container properties */
  width: 192rem;
  background: #151517;
`;

const GNBItem = styled.div`
  /* container properties */
  width: ${(props) => props.width};
  height: fit-content;
  background: #151517;
  margin-right: ${(props) => props.marginRight};

  button {
    height: 44px;
    line-height: 44px;
    width: 147px;
    border: 1px solid #d6f866;
    border-radius: 6px;
    color: #d6f866;
    background-color: #151517;
    cursor: pointer;
    font-size: 16px;
  }
`;

const GNBLink = styled(Link)`
  color: ${(props) => {
    /* MUST Refactor this later */
    if (props.color === "RaffleNeon") {
      return colors.RaffleNeon;
    }
    if (props.color === "RaffleWhite") {
      return colors.RaffleWhite;
    }
    if (props.color === "RaffleBlack") {
      return colors.RaffleBlack;
    }
  }};

  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;

  &:hover {
    color: ${colors.RaffleNeon};
  }
`;

function MenuItems() {
  // call back functions for Search Bar

  return (
    <>
      <GNBContainer>
        {/* logo */}
        <GNBItem width="14rem" marginRight="4rem">
          <Link to="/">
            <img className={styles.logo} src="img/NFT_Ranks_Logo.svg" alt=" " />
          </Link>
        </GNBItem>

        {/* Ranking Button */}
        <GNBItem width="8rem" marginRight="3.2rem">
          <GNBLink to="/ranking" color="RaffleWhite">
            Ranking
          </GNBLink>
        </GNBItem>

        {/* AboutUs Button */}
        <GNBItem width="8.8rem" marginRight="3.2rem">
          <GNBLink to="/aboutUs" color="RaffleWhite">
            About Us
          </GNBLink>
        </GNBItem>

        {/* Search Bar */}
        <GNBItem width="56.4rem" marginRight="36.6rem">
          <SearchBar />
        </GNBItem>

        {/* GNB Right -- Connect Button */}
        <GNBItem>
          {sessionStorage.getItem("user") ? (
            <ProfileButton />
          ) : (
            <button>
              <GNBLink to="/connectWallet" color="RaffleNeon">
                Connect
              </GNBLink>
            </button>
          )}
        </GNBItem>
      </GNBContainer>
    </>
  );
}

export default MenuItems;
