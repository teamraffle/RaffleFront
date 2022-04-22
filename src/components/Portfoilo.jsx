import PortfolioNFT from "./PortfolioNFT";
import PortfolioActivity from "./PortfolioActivity";
import PortfolioStats from "./PortfolioStats";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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

  margin-top: 4.2rem;
`;

const Box1 = styled.div`
  width: 100%;
`;

const Box1Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 2rem;
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

const HeaderTime = styled.div`
  font-family: Poppins;
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #b3b3b3;

  margin-left: 18rem;
`;

const HeaderTimeRefreshButton = styled.div`
  height: 3.6rem;
  width: 3.6rem;
  border-radius: 0.6rem;
  border: solid 0.1rem #626262;

  cursor: pointer;
`;

const Box1Container = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Box1UserInfoBox = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 2rem;

  width: 33.8rem;
  height: 18.8rem;

  border-radius: 14px;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

const UserInfoBoxIcon = styled.img`
  width: 10.1rem;
  height: 10.1rem;

  margin-left: 3.2rem;
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

const Box1Overview = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 0.8rem;

  width: 37.6rem;
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
  margin-top: 4rem;
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
  const [currentTime, setcurrentTime] = useState(String(new Date()));

  const updateTime = async () => {
    setcurrentTime(String(new Date()));
  };

  const getUserData = async () => {
    const params = {
      chain_id: "1",
      // 일단은 특정 주소를 이용해서 값 불러오는 것을 확인함
      address: "0xA96e16Cdc8c47e1E1E754af62a36D0d4ac7B7c67",
      // address: sessionStorage.getItem("walletAddress"),
    };

    const response = await axios.get(
      "https://nftranks.xyz:8888/v1/portfolios/basic",
      {
        params,
      },
    );

    console.log(sessionStorage.getItem("walletAddress"));
    console.log(response.data);

    /**
     * 일단은 모든 데이터를 sessionStorage에 저장함.
     * useState를 이용해 response 전체를 저장해두는 방법을 대체한 임시방편임.
     */

    /**-----user data------*/
    sessionStorage.setItem("user__nickname", response.data.user.nickname);

    /**-----portfolio basic data------*/
    sessionStorage.setItem(
      "portfolio__av_holding_period",
      response.data.portfolio.av_holding_period,
    );
    sessionStorage.setItem(
      "portfolio__buy_volume",
      response.data.portfolio.buy_volume,
    );
    sessionStorage.setItem(
      "portfolio__collections_holdings",
      response.data.portfolio.collections_holdings,
    );
    sessionStorage.setItem(
      "portfolio__earnings_rate",
      response.data.portfolio.earnings_rate,
    );
    sessionStorage.setItem(
      "portfolio__est_market_value",
      response.data.portfolio.est_market_value,
    );
    sessionStorage.setItem(
      "portfolio__holding_volume",
      response.data.portfolio.holding_volume,
    );
    sessionStorage.setItem(
      "portfolio__most_collection_icon",
      response.data.portfolio.most_collection_icon,
    );
    sessionStorage.setItem(
      "portfolio__most_collection_name",
      response.data.portfolio.most_collection_name,
    );
    sessionStorage.setItem(
      "portfolio__nft_holdings",
      response.data.portfolio.nft_holdings,
    );
    sessionStorage.setItem(
      "portfolio__sell_volume",
      response.data.portfolio.sell_volume,
    );
    sessionStorage.setItem(
      "portfolio__total_gas_fee",
      response.data.portfolio.total_gas_fee,
    );
    sessionStorage.setItem(
      "portfolio__wallet_address",
      response.data.portfolio.wallet_address,
    );
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <PortfoiloContainer>
      {/* Header */}
      <Box1>
        <Box1Header>
          <HeaderTitle>Portfolio</HeaderTitle>
          <HeaderTime>Last updated: {currentTime}</HeaderTime>
          <HeaderTimeRefreshButton onClick={updateTime}>
            <img src="img/refresh.png" alt="refresh button" />
          </HeaderTimeRefreshButton>
        </Box1Header>
        <Box1Container>
          <Box1UserInfoBox>
            <UserInfoBoxIcon src="img/InfoBoxIcon.png" alt=""></UserInfoBoxIcon>
            <UserInfoBoxData>
              <DataClass>** DIAMOND ** </DataClass>
              <DataNicknameContainer>
                <DataNickname>
                  {sessionStorage.getItem("nickname")}
                </DataNickname>
                <DataNicknameEditButtonImg src="img/EditButton.png"></DataNicknameEditButtonImg>
              </DataNicknameContainer>
              <DataWalletAddressContainer>
                <DataWalletAddress>
                  {sessionStorage.getItem("walletAddress").substring(0, 6) +
                    "..." +
                    sessionStorage.getItem("walletAddress").substring(38, 42)}
                </DataWalletAddress>
                <DataWalletAddresseCopyButtonImg src="img/CopyButton.png"></DataWalletAddresseCopyButtonImg>
              </DataWalletAddressContainer>
            </UserInfoBoxData>
          </Box1UserInfoBox>
          <Box1Overview>
            <GeneralStatsContainer>
              <StatsName>NFTs</StatsName>
              <StatsData>
                {sessionStorage.getItem("portfolio__nft_holdings")}
              </StatsData>
            </GeneralStatsContainer>

            <GeneralStatsContainer>
              <StatsName>Collections</StatsName>
              <StatsData>
                {sessionStorage.getItem("portfolio__collections_holdings")}
              </StatsData>
            </GeneralStatsContainer>

            <GeneralStatsContainer>
              <StatsHeaderContainer>
                <StatsName>Average of Holding Period</StatsName>
                <StatsInfoImg src="img/Circle_I.png" />
              </StatsHeaderContainer>
              <StatsData>
                {sessionStorage.getItem("portfolio__av_holding_period")} Days
              </StatsData>
            </GeneralStatsContainer>

            <GeneralStatsContainer>
              <StatsHeaderContainer>
                <StatsName>Most Holding</StatsName>
                <StatsInfoImg src="img/Circle_I.png" />
              </StatsHeaderContainer>
              <StatsData>
                <img
                  style={{ position: "absolute", width: "2rem" }}
                  src={sessionStorage.getItem(
                    "portfolio__most_collection_icon",
                  )}
                  alt="nft icon"
                />
                <div style={{ paddingLeft: "2.5rem" }}>
                  {sessionStorage.getItem("portfolio__most_collection_name")}
                </div>
              </StatsData>
            </GeneralStatsContainer>
          </Box1Overview>
        </Box1Container>
      </Box1>

      {/* Overview */}
      <PortfolioOverviewContainer>
        <OverviewContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Est. Market Value</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>
                {sessionStorage.getItem("portfolio__est_market_value")}
              </StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Holding Volume</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>
                {sessionStorage.getItem("portfolio__holding_volume")}
              </StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Earnings Rate</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>
                {sessionStorage.getItem("portfolio__earnings_rate")}
              </StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Gas Fee</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>
                {sessionStorage.getItem("portfolio__total_gas_fee")}
              </StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Buy Volume</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>
                {sessionStorage.getItem("portfolio__buy_volume")}
              </StatsData>
              <StatsDataUnit>USD</StatsDataUnit>
            </StatsDataContainer>
          </GeneralStatsContainer>
          <GeneralStatsContainer>
            <StatsHeaderContainer>
              <StatsName>Sell Volume</StatsName>
              <StatsInfoImg src="img/Circle_I.png" />
            </StatsHeaderContainer>
            <StatsDataContainer>
              <StatsData>
                {sessionStorage.getItem("portfolio__sell_volume")}
              </StatsData>
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

      {/* NFTs, Stats, Activity */}
      <PortfoiloNSAContainer>
        <Router>
          <PortfoiloNSAHeader>
            <Link to="/PortfolioNFT">
              <NSAHeaderButton>NFTs</NSAHeaderButton>
            </Link>
            <Link to="/PortfolioStats">
              <NSAHeaderButton>Stats</NSAHeaderButton>
            </Link>
            <Link to="/PortfolioActivity">
              <NSAHeaderButton>Activity</NSAHeaderButton>
            </Link>
          </PortfoiloNSAHeader>
          <PortfoiloNSABody></PortfoiloNSABody>
          <main>
            <Route exact path="/PortfolioNFT" component={PortfolioNFT} />
            <Route path="/PortfolioActivity" component={PortfolioActivity} />
            <Route path="/PortfolioStats" component={PortfolioStats} />
          </main>
        </Router>
      </PortfoiloNSAContainer>
    </PortfoiloContainer>
  );
}
