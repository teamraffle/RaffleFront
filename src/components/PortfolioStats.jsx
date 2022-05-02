import styled from "styled-components";
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

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 72.8rem;
  min-height: 60rem; ;
`;

const BoxHeader = styled.div`
  position: absolute;
  display: flex;
  top: 2.8rem;
  left: 3.2rem;
`;

const BoxTitle = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: ${colors.RaffleNeon};

  margin-right: 2rem;
`;

const BoxInfoImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  align-self: center;
`;

const BoxContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoDataImg = styled.img`
  align-self: center;

  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
`;

const DataImg = styled.img`
  align-self: center;

  margin-left: auto;
  margin-right: auto;

  width: 100%;

  padding-top: 4rem;
  padding-left: 4rem;
  padding-right: 4rem;
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: auto;
  height: auto;

  margin-bottom: 1.4rem;
`;

const Box1Left = styled.div`
  display: flex;
  flex-directoin: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 37.4rem;
  height: 28.6rem;

  border-radius: 1.4rem;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

const Box1Right = styled.div`
  display: flex;
  flex-directoin: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 34rem;
  height: 28.6rem;

  border-radius: 1.4rem;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

const Box2 = styled.div`
  display: flex;
  flex-directoin: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 72.8rem;
  height: 44rem;

  border-radius: 1.4rem;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};

  margin-bottom: 1.4rem;
`;

const Box3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: auto;
  height: auto;

  margin-bottom: 1.4rem;
`;

const Box3Left = styled.div`
  display: flex;
  flex-directoin: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 34rem;
  height: 36rem;

  border-radius: 1.4rem;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

const Box3Right = styled.div`
  display: flex;
  flex-directoin: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 37.4rem;
  height: 36rem;

  border-radius: 1.4rem;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

export default function PortfoiloStats() {
  const [portfolioData, setPortfolioData] = useState(null);

  const getUserData = async () => {
    const params = {
      chain_id: 1,
      // 일단은 특정 주소를 이용해서 값 불러오는 것을 확인함
      address: sessionStorage.getItem("walletAddress"),
    };

    if (sessionStorage.getItem("myAdress") === null) {
      console.log("ASDFIAWEFHAWLFJLKSDF");
    }

    const response_portfolio = await axios.get(
      "https://nftranks.xyz:8888/v1/portfolios/basic",
      {
        params,
      },
    );
    setPortfolioData(response_portfolio);

    console.log("[+] portfolio basic data : ", portfolioData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <Box1>
        <Box1Left>
          <BoxHeader>
            <BoxTitle>Est. Market Value</BoxTitle>
            <BoxInfoImg src="img/Circle_I.png" alt="info img" />
          </BoxHeader>
          <BoxContents>
            {portfolioData === null ? (
              <NoDataImg src="img/nodata_stats.svg" alt="no data img stats" />
            ) : (
              <DataImg
                src="img/Est. Marketvalue.png"
                alt="Est. Marketvalue img"
              />
            )}
          </BoxContents>
        </Box1Left>
        <Box1Right>
          <BoxHeader>
            <BoxTitle>Earning Rate</BoxTitle>
            <BoxInfoImg src="img/Circle_I.png" alt="info img" />
          </BoxHeader>
          <BoxContents>
            {portfolioData === null ? (
              <NoDataImg src="img/nodata_stats.svg" alt="no data img stats" />
            ) : (
              <DataImg src="img/Earning Rate.png" alt="Earning Rate img" />
            )}
          </BoxContents>
        </Box1Right>
      </Box1>
      <Box2>
        <BoxHeader>
          <BoxTitle>Holding Profile</BoxTitle>
          <BoxInfoImg src="img/Circle_I.png" alt="info img" />
        </BoxHeader>
        <BoxContents>
          {portfolioData === null ? (
            <NoDataImg src="img/nodata_stats.svg" alt="no data img stats" />
          ) : (
            <DataImg src="img/Holding Profile.png" alt="Holding Profile img" />
          )}
        </BoxContents>
      </Box2>
      <Box3>
        <Box3Left>
          <BoxHeader>
            <BoxTitle>Cultimative GnL</BoxTitle>
            <BoxInfoImg src="img/Circle_I.png" alt="info img" />
          </BoxHeader>
          <BoxContents>
            {portfolioData === null ? (
              <NoDataImg src="img/nodata_stats.svg" alt="no data img stats" />
            ) : (
              <DataImg
                src="img/Cultimative GnL.png"
                alt="Cultimative GnL img"
              />
            )}
          </BoxContents>
        </Box3Left>
        <Box3Right>
          <BoxHeader>
            <BoxTitle>Related Addresses</BoxTitle>
            <BoxInfoImg src="img/Circle_I.png" alt="info img" />
          </BoxHeader>
          <BoxContents>
            {portfolioData === null ? (
              <NoDataImg src="img/nodata_stats.svg" alt="no data img stats" />
            ) : (
              <DataImg
                src="img/Related Addresses.png"
                alt="Related Addresses img"
              />
            )}
          </BoxContents>
        </Box3Right>
      </Box3>
    </Container>
  );
}
