import { Menu } from "antd";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import ProfileButton from "./ProfileButton.jsx";
import styled, { css } from "styled-components";

/* ---- export this to theme.js ---- */
const colors = {
  RaffleNeon: "#d6f866",
  RaffleWhite: "#f5f5f5",
  RaffleGrey: "#bdbebe",
  RaffleCharcoal: "#4f4f54",
  RaffleBlack: "#151517",
  RaffleRed: "#ff6c62",
  RaffleGreen: "#72c680",
  RaffleHoverNeon: "#434d22",
  RaffleGreenLight: "#358242",
  RaffleDeepDark: "#2f2f2f",
  RaffleBtnStrokeGrey: "#626262",
};

/* ---- styled components ---- */
const PortfoiloContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;
  width: 62.5rem;
  height: 100%;
`;

const PortfoiloHeader = styled.div`
  width: 62.5rem;
`;

const HeaderTitle = styled.div`
  /* flex items properties */
  flex: 0 0 auto;

  /* text properties */
  font-family: Poppins;
  font-size: 2.8rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.084rem;
  text-align: left;
  color: ${colors.RaffleWhite};
`;
const HeaderContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const HeaderUserInfoBox = styled.div`
  width: 30.5rem;
  height: 18.8rem;

  border-radius: 14px;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;
const HeaderOverview = styled.div`
  width: 30.5rem;
  height: 18.8rem;

  border-radius: 14px;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

const PortfolioOverviewContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const OverviewHeader = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 4.4rem;
  width: 100%;
`;
const OverviewTitle = styled.div`
  width: auto;

  /* text properties */
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.54px;
  text-align: left;
  color: ${colors.RaffleWhite};
`;

const OverviewOptionSelectBox = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;

  border-radius: 0.8rem;
  border: solid 0.1rem ${colors.RaffleBtnStrokeGrey};

  width: auto;
  height: auto;
`;

const OptionSelectButton = styled.button`
  /* text properties */
  font-family: Poppins;
  font-size: auto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.042rem;
  text-align: center;
  color: ${colors.RaffleGrey};

  background-color: ${colors.RaffleBlack};
  border: 0;
  cursor: pointer;
  margin: 0 0.2rem;
  padding: 0 0.1rem;
  width: 3rem;

  &:hover {
    border-radius: 0.4rem;
    background-color: ${colors.RaffleCharcoal};
  }
  &:focus {
    border-radius: 0.4rem;
    background-color: ${colors.RaffleCharcoal};
  }
`;

const OverviewContainer = styled.div`
  width: 100%;
  height: 320px;

  margin-top: 2.4rem;
  border-radius: 1.4rem;
  border: solid 0.1rem ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;
const OverviewItem = styled.div``;

const PortfolioUpdateInfoText = styled.div`
  /* flex items properties */
  flex: 0 0 auto;

  /* text properties */
  font-family: Poppins;
  font-size: 1.2rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.084rem;
  text-align: left;
  color: #b3b3b3;
  text-align: end;

  width: 62.5rem;

  margin-top: 2rem;
`;

// NSA == NFTs, Stats, Activity
const PortfoiloNSAContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;

  width: 62.5rem;
  margin-bottom: 24rem;
`;

const PortfoiloNSAHeader = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  gap: 1rem;

  width: auto;
  margin-bottom: 2.4rem;
`;
const NSAHeaderButton = styled.button`
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.054rem;
  text-align: left;
  color: ${colors.RaffleWhite};

  background-color: ${colors.RaffleBlack};
  border: 0;
  cursor: pointer;

  border-bottom: solid 0.5rem rgba(255, 255, 255, 0);

  &:hover {
    border-bottom: solid 0.5rem ${colors.RaffleNeon};
  }

  &:focus {
    border-bottom: solid 0.5rem ${colors.RaffleNeon};
  }
`;

const PortfoiloNSABody = styled.div`
  width: auto;
  min-height: 40rem;

  border-radius: 14px;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

export default function Portfoilo() {
  return (
    <PortfoiloContainer>
      {/* Header */}
      <PortfoiloHeader>
        <HeaderTitle>Portfolio</HeaderTitle>
        <HeaderContainer>
          <HeaderUserInfoBox></HeaderUserInfoBox>
          <HeaderOverview></HeaderOverview>
        </HeaderContainer>
      </PortfoiloHeader>

      {/* Overview */}
      <PortfolioOverviewContainer>
        <OverviewHeader>
          <OverviewTitle>Overview</OverviewTitle>
          <OverviewOptionSelectBox>
            <OptionSelectButton>24H</OptionSelectButton>
            <OptionSelectButton>7D</OptionSelectButton>
            <OptionSelectButton>30D</OptionSelectButton>
            <OptionSelectButton>3M</OptionSelectButton>
          </OverviewOptionSelectBox>
        </OverviewHeader>
        <OverviewContainer>
          <div>
            <OverviewItem></OverviewItem>
            <OverviewItem></OverviewItem>
            <OverviewItem></OverviewItem>
            <OverviewItem></OverviewItem>
          </div>
          <div>
            <OverviewItem></OverviewItem>
            <OverviewItem></OverviewItem>
            <OverviewItem></OverviewItem>
            <OverviewItem></OverviewItem>
          </div>
        </OverviewContainer>
      </PortfolioOverviewContainer>

      {/* Update Info */}
      <PortfolioUpdateInfoText>
        Last updated: {String(new Date())}
      </PortfolioUpdateInfoText>

      {/* NFTs, Stats, Activity */}
      <PortfoiloNSAContainer>
        <PortfoiloNSAHeader>
          <NSAHeaderButton>NFTs</NSAHeaderButton>
          <NSAHeaderButton>Stats</NSAHeaderButton>
          <NSAHeaderButton>Activity</NSAHeaderButton>
        </PortfoiloNSAHeader>
        <PortfoiloNSABody></PortfoiloNSABody>
      </PortfoiloNSAContainer>
    </PortfoiloContainer>
  );
}
