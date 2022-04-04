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
const GeneralStatsContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  row-gap: 0.4rem;

  width: 14.5rem;
  height: 6rem;
`;
const StatsHeaderContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`;
const StatsName = styled.div`
  /* text properties */
  font-family: Poppins;
  font-size: 1rem;
  font-weight: Regular;
  color: ${colors.RaffleNeon};
`;

const StatsDataContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  column-gap: 0.8rem;
`;

const StatsData = styled.div`
  /* text properties */
  font-family: Poppins;
  font-size: 1.2rem;
  font-weight: SemiBold;
  color: ${colors.RaffleWhite};
`;

const StatsDataUnit = styled.div`
  /* text properties */
  font-family: Poppins;
  font-size: 0.8rem;
  font-weight: Light;
  color: ${colors.RaffleWhite};
`;

const StatsInfoImg = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  cursor: pointer;
`;

const PortfoiloContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;
  width: 72.5rem;
  height: 100%;
`;

const PortfoiloHeader = styled.div`
  width: 100%;
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
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  column-gap: 2rem;

  width: 35.5rem;
  height: 18.8rem;
  padding: 1.5rem 1.2rem;

  border-radius: 14px;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

const UserInfoBoxIcon = styled.img`
  width: 11.8rem;
  height: 11.8rem;
`;
const UserInfoBoxData = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: flex-start;

  height: 100%;
`;

const DataClass = styled.div`
  width: 9.6rem;
  height: 2.4rem;
  border-radius: 2rem;
  line-height: 2.4rem;
  background-color: ${colors.RaffleCharcoal};

  text-align: center;
`;
const DataNicknameContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DataNickname = styled.div`
  /* text properties */
  font-family: Poppins;
  font-size: 1.45rem;
  font-weight: Semibold;
  color: ${colors.RaffleWhite};
`;
const DataNicknameEditButtonImg = styled.img`
  width: 1.35rem;
  height: 1.5rem;
  cursor: pointer;

  margin-left: 0.4rem;
`;
const DataWalletAddressContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DataWalletAddress = styled.div`
  /* text properties */
  font-family: Poppins;
  font-size: 1.15rem;
  font-weight: Light;
  text-decoration: underline;
  color: ${colors.RaffleGrey};
`;
const DataWalletAddresseCopyButtonImg = styled.img`
  width: 1.35rem;
  height: 1.5rem;
  cursor: pointer;

  margin-left: 0.4rem;
`;

const HeaderOverview = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 0.8rem;

  width: 35.5rem;
  height: 18.8rem;
  padding: 3rem 1rem;

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
  /* flex container properties */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  padding: 1.5rem 2rem;

  width: 100%;
  height: 24rem;

  margin-top: 2.4rem;
  border-radius: 1.4rem;
  border: solid 0.1rem ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

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

  width: 72.5rem;

  margin-top: 2rem;
`;

// NSA == NFTs, Stats, Activity
const PortfoiloNSAContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;

  width: 72.5rem;
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
          <HeaderUserInfoBox>
            <UserInfoBoxIcon src="img/InfoBoxIcon.png" alt=""></UserInfoBoxIcon>
            <UserInfoBoxData>
              <DataClass>** DIAMOND ** </DataClass>
              <DataNicknameContainer>
                <DataNickname>** NICKNAME ** </DataNickname>
                <DataNicknameEditButtonImg src="img/EditButton.png"></DataNicknameEditButtonImg>
              </DataNicknameContainer>
              <DataWalletAddressContainer>
                <DataWalletAddress>** WALLET ADDRESS **</DataWalletAddress>
                <DataWalletAddresseCopyButtonImg src="img/CopyButton.png"></DataWalletAddresseCopyButtonImg>
              </DataWalletAddressContainer>
            </UserInfoBoxData>
          </HeaderUserInfoBox>
          <HeaderOverview>
            <GeneralStatsContainer>
              <StatsName>NFTs</StatsName>
              <StatsData>** 3,592 **</StatsData>
            </GeneralStatsContainer>
            <GeneralStatsContainer>
              <StatsName>Collections</StatsName>
              <StatsData>** 12 **</StatsData>
            </GeneralStatsContainer>
            <GeneralStatsContainer>
              <StatsHeaderContainer>
                <StatsName>Average of Holding Period</StatsName>
                <StatsInfoImg src="img/Circle_I.png" />
              </StatsHeaderContainer>
              <StatsData>** 58 ** Days</StatsData>
            </GeneralStatsContainer>
            <GeneralStatsContainer>
              <StatsHeaderContainer>
                <StatsName>Most Holding</StatsName>
                <StatsInfoImg src="img/Circle_I.png" />
              </StatsHeaderContainer>
              <StatsData>** icon_ gotta catch **</StatsData>
            </GeneralStatsContainer>
          </HeaderOverview>
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
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Est. Market Value</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>** 1,591,580.50 **</StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Holding Volume</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>** 691,120.50 **</StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Earnings Rate</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>** 1,591,580.50 **</StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Gas Fee</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>** 14,580.50 **</StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Buy Volume</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>** 424,580.50 **</StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Sell Volume</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>** 60,120.50 **</StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Related Addresses</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsData>** 105 **</StatsData>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Activities</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsData>** 632 **</StatsData>
          </GeneralStatsContainer>
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
