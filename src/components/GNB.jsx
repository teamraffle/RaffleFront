import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import ProfileButton from "./ProfileButton.jsx";
import styled from "styled-components";

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
  height: 7.2rem;
  background: #151517;
`;

const GNBItem = styled.div`
  /* container properties */
  width: ${(props) => props.width};
  height: ${(props) => props.height || "fit-content"};
  background: #151517;
  /* margin-top, margin-bottom == "0rem";*/
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  button {
    padding: 0.75rem 2.8rem;
    border-radius: 0.8rem;
    border: solid 1px ${colors.RaffleNeon};
    background-color: ${colors.RaffleBlack};
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
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.042rem;
  text-align: center;

  &:hover {
    color: ${colors.RaffleNeon};
  }
`;

const Logo = styled.img`
  align-items: center;
  width: 14rem;
`;

function MenuItems() {
  return (
    <GNBContainer>
      {/* logo */}
      <GNBItem width="13rem" marginLeft="4.6rem">
        <Link to="/">
          <Logo src="img/NFT_Ranks_Logo.svg" alt=" " />
        </Link>
      </GNBItem>

      {/* Ranking Button */}
      <GNBItem width="6.3rem" marginLeft="5.4rem">
        <GNBLink to="/ranking" color="RaffleWhite" fontSize="1.6rem">
          Ranking
        </GNBLink>
      </GNBItem>

      {/* AboutUs Button */}
      <GNBItem width="8.8rem" marginLeft="3.6rem">
        <GNBLink to="/aboutUs" color="RaffleWhite" fontSize="1.6rem">
          About Us
        </GNBLink>
      </GNBItem>

      {/* Search Bar */}
      <GNBItem width="30rem" marginLeft="13.2rem">
        <SearchBar />
      </GNBItem>

      {/* GNB Right -- Connect Button */}
      <GNBItem width="12.2rem" marginLeft="2.8rem" marginRight="4.4rem">
        {sessionStorage.getItem("user") ? (
          <ProfileButton />
        ) : (
          <button>
            <GNBLink to="/connectWallet" color="RaffleNeon" fontSize="1.4rem">
              CONNECT
            </GNBLink>
          </button>
        )}
      </GNBItem>
    </GNBContainer>
  );
}

export default MenuItems;
