import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
  width: 72.8rem;
`;
// header
const Header = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  column-gap: 4.4rem;

  margin-top: 1.6rem;
  margin-bottom: 4rem;
`;
const HeaderButton = styled.div`
  font-family: Poppins;
  font-size: 1.6rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;

  color: ${colors.RaffleWhite};

  background-color: ${colors.RaffleBlack};
  border: 0;
  cursor: pointer;

  border-bottom: solid 0.5rem rgba(255, 255, 255, 0);

  &:hover {
    border-bottom: solid 0.5rem ${colors.RaffleNeon};
  }
`;
const RangeOptionContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  column-gap: 0.6rem;

  margin-bottom: 2rem;

  width: 100%;
`;
const RangeOption = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 2rem;
  border-radius: 0.8rem;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};

  /* font */
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: ${colors.RaffleGrey};

  cursor: pointer;
  &:hover {
    background-color: ${colors.RaffleBtnStrokeGrey};
  }
`;

// body
const Body = styled.div`
  /* flex container */
  display: flex;
  flex-direction: column;
`;
const BodyTitle = styled.div`
  /* flex container */
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 4rem;
  padding-left: 3.6rem;

  /* font */
  font-family: Poppins;
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4rem; // 가운데 정렬
  letter-spacing: -0.36px;
  text-align: left;
  color: ${colors.RaffleGrey};
`;
// rank
const Rank = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;

  /* font */
  font-family: Poppins;
  font-size: 1.2rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: center;
  color: ${colors.RaffleWhite};

  height: 4.8rem;

  &:hover {
    background: #434c22;
    cursor: pointer;
  }
`;
const RankNumber = styled.div`
  align-self: center;

  padding-left: 3.8rem;
`;

const RankUser = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;

  width: 28rem;

  margin-left: 3.8rem;
`;

const RankUserImg = styled.img`
  align-self: center;

  width: 2.4rem;
  height: 2.4rem;
`;

const RankUsername = styled.div`
  align-self: center;

  margin-left: 1rem;

  width: 13rem;

  text-align: left;
`;
const RankHands = styled.div`
  align-self: center;

  margin-left: 1.2rem;

  height: 2.4rem;
`;
const RankEMVContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  width: 12.6rem;
  margin-left: 0.6rem;
`;

const RankEstMarketValue = styled.div`
  align-self: center;

  width: 10rem;

  margin-left: 2rem;

  text-align: right;
`;
const RankNfts = styled.div`
  align-self: center;
  width: 5rem;
  margin-left: 3.34rem;

  text-align: right;
`;
const RankEarnings = styled.div`
  align-self: center;
  width: 6rem;
  margin-left: 4rem;

  text-align: right;
`;

const Footer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: auto;
  height: 3rem;
`;
const FooterMore = styled.div`
  position: relative;
  cursor: pointer;

  align-self: center;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: center;
  color: #d8d8d8;
`;
const MoreImg = styled.img`
  margin-left: 1.4rem;
  align-self: center;

  width: 1.1rem;
  height: 0.5rem;
`;
const FooterDone = styled.div`
  align-self: center;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: center;
  color: #d8d8d8;
`;

const StandardOptionBox = styled.div`
  margin-left: 8rem;

  width: 12rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 2rem;
  border-radius: 0.8rem;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};

  /* font */
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: ${colors.RaffleGrey};

  cursor: pointer;
  &:hover {
    background-color: ${colors.RaffleBtnStrokeGrey};
  }
`;

const TitleItems = styled.div`
  cursor: pointer;
  &:hover {
    color: ${colors.RaffleNeon};
  }
`;

export default function Ranking() {
  const [rankData, setRankData] = useState(null);
  const [rankList, setRankList] = useState([]);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState("Collector");
  const [rangeOption, setRangeOption] = useState(0);
  const [more, setMore] = useState(false);

  const renderCollectorTab = () => {
    setTab("Collector");
  };
  const renderProjectTab = () => {
    setTab("Project");
  };

  const selectRangeOption_0 = () => {
    setRangeOption(0);
  };
  const selectRangeOption_1 = () => {
    setRangeOption(1);
  };
  const selectRangeOption_2 = () => {
    setRangeOption(2);
  };
  const selectRangeOption_3 = () => {
    setRangeOption(3);
  };

  //   const initRanking = async () => {
  //     const wallets = [];
  //     wallets.push("0x4a570CC168caf8eA07eaD7f5DA34e28BBaE44B29");
  //     wallets.push("0x922b8d9803a6cfc60fa6bfb32ac9c4a8fce4ec57");
  //     wallets.push("0x036eff96a00b461bf86cdfb6cf1fbee08e9e3be6");
  //     wallets.push("0x138b9057d61e893b72b33ab2d17f24ac87bd33cb");
  //     wallets.push("0x0bf75cc9f0755cc211ca968cb722cdf472430fb8");
  //     wallets.push("0x6facad44e126f2cacde44a0b2b85ce1b643495d1");
  //     wallets.push("0x9678619db86cb846c3a91c960cbf85bff7db842d");
  //     wallets.push("0x7194397dd015f731a36a30cdca4627ffbde79a72");
  //     wallets.push("0x11a8e8670970ef4782c90a2af8ccf20f9889c803");
  //     wallets.push("0x2f2f237d2e655cc0a6f6fef761e5aef13087e71f");

  //     const nicknames = [];
  //     nicknames.push("alice");
  //     nicknames.push("brown");
  //     nicknames.push("fuller");
  //     nicknames.push("davaron");
  //     nicknames.push("spencer");
  //     nicknames.push("aaron");
  //     nicknames.push("landwher");
  //     nicknames.push("ancheta");
  //     nicknames.push("robert");
  //     nicknames.push("stephanie");

  //     for (let i = 0; i < 10; i++) {
  //       const params = {
  //         chain_id: 1,
  //         address: wallets[i],
  //         nickname: nicknames[i],
  //       };
  //       const response = await axios.post(
  //         "https://nftranks.xyz:8888/v1/users",
  //         params,
  //       );

  //       console.log(response);
  //     }
  //   };

  const getRankList = async () => {
    const params = {
      page: page - 1,
      standard: "v1",
    };

    const response = await axios.get(
      "https://nftranks.xyz:8888/v1/rankings/v1",
      {
        params,
      },
    );

    setRankData(response);
    setPage((prev) => prev + 1);

    response.data.result.map((data) => {
      setRankList((prev) => [...prev, data]);
    });

    if (Math.floor(response.data.total / 10) >= page) {
      setMore(true);
    } else {
      setMore(false);
    }
  };

  useEffect(() => {
    console.log("[+] Rank Data : ", rankData);
  }, [rankData]);

  useEffect(() => {
    console.log("[+] Rank List : ", rankList);
  }, [rankList]);

  useEffect(() => {
    getRankList();
    // initRanking();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderButton
          onClick={renderCollectorTab}
          style={
            (tab === "Collector" && {
              borderBottom: "solid 0.5rem #d6f866",
            }) || {
              borderBottom: null,
            }
          }
        >
          Collector
        </HeaderButton>
        <HeaderButton
          onClick={renderProjectTab}
          style={
            (tab === "Project" && { borderBottom: "solid 0.5rem #d6f866" }) || {
              borderBottom: null,
            }
          }
        >
          Project
        </HeaderButton>
      </Header>
      <RangeOptionContainer>
        <RangeOption
          onClick={selectRangeOption_0}
          style={
            (rangeOption === 0 && { background: "#626262" }) || {
              background: "#2f2f2f",
            }
          }
        >
          1 ~ 50
        </RangeOption>
        <RangeOption
          onClick={selectRangeOption_1}
          style={
            (rangeOption === 1 && { background: "#626262" }) || {
              background: "#2f2f2f",
            }
          }
        >
          5001 ~ 5050
        </RangeOption>
        <RangeOption
          onClick={selectRangeOption_2}
          style={
            (rangeOption === 2 && { background: "#626262" }) || {
              background: "#2f2f2f",
            }
          }
        >
          10001 ~ 10050
        </RangeOption>
        <RangeOption
          onClick={selectRangeOption_3}
          style={
            (rangeOption === 3 && { background: "#626262" }) || {
              background: "#2f2f2f",
            }
          }
        >
          20001 ~ 20050
        </RangeOption>
        <StandardOptionBox>정렬 기준</StandardOptionBox>
      </RangeOptionContainer>
      <Body>
        <BodyTitle>
          <div>#</div>
          <div style={{ marginLeft: "3.6rem" }}>User</div>
          <TitleItems style={{ marginLeft: "29rem" }}>
            Est. Market Value
          </TitleItems>
          <TitleItems style={{ marginLeft: "5.8rem" }}>NFTs</TitleItems>
          <TitleItems style={{ marginLeft: "5.6rem" }}>Earning</TitleItems>
        </BodyTitle>

        {/* Rank 일단 하나 만듦... 추후 map 으로 여러개 만들어야 함 */}
        {rankList === null
          ? null
          : rankList.map((data) => {
              return (
                <div
                  onClick={() => {
                    sessionStorage.setItem("walletAddress", data.address);
                    console.log(sessionStorage.getItem("walletAddress"));
                  }}
                >
                  <Link to="portfolio">
                    <Rank>
                      <RankNumber>{data.ranking}</RankNumber>
                      <RankUser>
                        <RankUserImg
                          src={
                            "img/profile_picture_" +
                            String(
                              (String(data.nickname).charCodeAt(0) % 4) + 1,
                            ) +
                            ".png"
                          }
                          alt="pfp"
                        ></RankUserImg>
                        <RankUsername>{data.nickname}</RankUsername>
                        <RankHands>
                          <img
                            style={{ width: "9.2rem" }}
                            src={
                              (data.hands === "dia" && "img/Tag_Diamond.png") ||
                              (data.hands === "normal" &&
                                "img/Tag_Normal.png") ||
                              (data.hands === "paper" && "img/Tag_Paper.png")
                            }
                            alt="hands img"
                          />
                        </RankHands>
                      </RankUser>
                      <RankEMVContainer>
                        <RankEstMarketValue>
                          {String(data.est_market_value).substring(0, 8)}
                        </RankEstMarketValue>
                        <div
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "-0.36px",
                            textAlign: "left",
                            color: "#bdbebe",
                            alignSelf: "center",
                          }}
                        >
                          &nbsp;ETH
                        </div>
                      </RankEMVContainer>
                      <RankNfts>{data.nft_holdings}</RankNfts>
                      <RankEarnings>{data.earning}</RankEarnings>
                    </Rank>
                  </Link>
                </div>
              );
            })}
      </Body>
      <Footer>
        {more ? (
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={getRankList}
          >
            <FooterMore>More</FooterMore>
            <MoreImg src="img/more_button.png" alt="more img"></MoreImg>
          </div>
        ) : (
          <FooterDone></FooterDone>
        )}
      </Footer>
    </Container>
  );
  //   return (
  //     <div style={styles.title}>
  //       <div>Ranking Page...</div>
  //       <br />
  //       <p>준비중입니다.</p>
  //       <br />
  //       <p>대신 귀여운 알파카가 있습니다. 😉</p>
  //       <img
  //         src="https://dimg.donga.com/ugc/CDB/29STREET/Article/5e/7d/47/d6/5e7d47d613d0d2738de6.gif"
  //         alt=" "
  //       />
  //     </div>
  //   );
}
