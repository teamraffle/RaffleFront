import { Menu } from "antd";
import { Link } from "react-router-dom";
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
  width: 102.4rem;
  background: #151517;
`;

const GNBItem = styled.div`
  /* container properties */
  width: ${(props) => props.width};
  height: ${(props) => props.height || "fit-content"};
  background: #151517;
  margin-right: ${(props) => props.marginRight};

  button {
    height: 4.4rem;
    line-height: 4.4rem;
    width: 14.7rem;
    border: 0.1rem solid #d6f866;
    border-radius: 0.6rem;
    color: #d6f866;
    background-color: #151517;
    cursor: pointer;
    font-size: 1.6rem;
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
  font-size: 2rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.06rem;
  text-align: left;

  &:hover {
    color: ${colors.RaffleNeon};
  }
`;

const Logo = styled.img`
  align-items: center;
  width: 14rem;
  margin-top: 0.9rem;
  margin-bottom: 0.9rem;
`;

function MenuItems() {
  return (
    <GNBContainer>
      {/* logo */}
      <GNBItem width="14rem" marginRight="1rem">
        <Link to="/">
          <Logo src="img/NFT_Ranks_Logo.svg" alt=" " />
        </Link>
      </GNBItem>

      {/* Ranking Button */}
      <GNBItem width="8rem" marginRight="1rem">
        <GNBLink to="/ranking" color="RaffleWhite">
          Ranking
        </GNBLink>
      </GNBItem>

      {/* AboutUs Button */}
      <GNBItem width="8.8rem" marginRight="1rem">
        <GNBLink to="/aboutUs" color="RaffleWhite">
          About Us
        </GNBLink>
      </GNBItem>

      {/* Search Bar */}
      <GNBItem width="44.4rem" marginRight="0rem" height="auto">
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
  );
}

export default MenuItems;
