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

const ActitivityContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;

  width: auto;
  min-height: 60rem;

  padding-top: 2.4rem;
  padding-bottom: 2.4rem;

  padding-right: 3.2rem;

  //   border: solid 0.1rem ${colors.RaffleCharcoal};
`;

const Header = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;

  width: auto;
`;
const HeaderText = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: ${(props) => props.color || colors.RaffleWhite};
`;

const Body = styled.div`
  margin-top: 3rem;
`;
const LogContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  padding-left: 3.2rem;
  padding-right: 3.2rem;
  margin-bottom: 0.4rem;

  width: auto;
  height: 5rem;
  border-radius: 0.8rem;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;
const LogTime = styled.div`
  align-self: center;

  margin-right: 3.2rem;

  font-family: Poppins;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: center;
  color: ${colors.RaffleWhite};
`;
const LogAction = styled.div`
  align-self: center;

  margin-right: 3.2rem;

  min-width: 8rem;
  height: 3rem;
  line-height: 2.5rem;

  padding: 0.1rem 1.6rem;
  border-radius: 0.6rem;
  border: solid 1px ${colors.RaffleBtnStrokeGrey};
  background-color: ${colors.RaffleCharcoal};

  text-align: center;
  color: ${colors.RaffleWhite};
`;

const LogSymbol = styled.div`
  align-self: center;

  margin-right: 3.2rem;

  width: 3.2rem;
  height: 3.2rem;
`;

const LogDescription = styled.div`
  display: flex;
  align-self: center;
`;

const DescriptText = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: left;

  color: ${colors.RaffleGrey};
`;

const DescriptNeonText = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: left;

  color: ${colors.RaffleNeon};
`;

const DescriptWhiteText = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: left;

  color: ${colors.RaffleWhite};
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

const NodataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 728px;
  height: 344px;
  border-radius: 14px;
  border: solid 1px ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

export default function PortfoiloActivity() {
  const [activityData, setActivityData] = useState(null);
  const [activityLogs, setActivityLogs] = useState([]);
  const [more, setMore] = useState(false);
  const [count, setCount] = useState(1);

  const getActivityData = async () => {
    const params = {
      page: count - 1,
      chain_id: 1,
      // 일단은 특정 주소를 이용해서 값 불러오는 것을 확인함
      address: sessionStorage.getItem("walletAddress"),
    };

    // This code is only for presentation
    if (params.address === "0x415e380a6bbee81a59fa73465fb83727396dcf18") {
      params.address = "0x256640f9FCc6A81f96649A7A45cb62d997838949";
    }

    const response = await axios.get(
      "https://nftranks.xyz:8888/v1/portfolios/activity",
      {
        params,
      },
    );

    setActivityData(response);
    //   setActivityLogs(response.data.result);
    setCount((prev) => prev + 1);
    response.data.result.map((data) => {
      setActivityLogs((prev) => [...prev, data]);
    });

    //   More 버튼 렌더링 여부 결정
    if (Math.floor(response.data.total / 10) >= count) {
      setMore(true);
    } else {
      setMore(false);
    }
  };

  useEffect(() => {
    console.log("[+] activity data : ", activityData);
  }, [activityData]);

  useEffect(() => {
    console.log("[+] activity logs : ", activityLogs);
  }, [activityLogs]);

  useEffect(() => {
    getActivityData();
  }, []);

  return (
    <div>
      <ActitivityContainer>
        <Header>
          <HeaderText>{"During the past "}</HeaderText>
          <HeaderText color={colors.RaffleNeon}>
            &nbsp;{" 365 "}&nbsp;
          </HeaderText>
          <HeaderText>{" Days,"}</HeaderText>
          <HeaderText color={colors.RaffleNeon}>
            &nbsp;
            {String(sessionStorage.getItem("walletAddress")).substring(0, 5) +
              "..." +
              String(sessionStorage.getItem("walletAddress")).substring(37, 42)}
            &nbsp;
          </HeaderText>
          <HeaderText>generated</HeaderText>
          <HeaderText color={colors.RaffleNeon}>
            &nbsp;{activityData ? activityData.data.total : null}&nbsp;
          </HeaderText>
          <HeaderText>activities.</HeaderText>
        </Header>
        <Body>
          {activityLogs.length === 0 ? (
            <NodataContainer>
              <img
                style={{
                  width: "14rem",
                  height: " 18rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  alignSelf: "center",
                }}
                src="img/no_data.png"
                alt="no data img"
              />
            </NodataContainer>
          ) : (
            activityLogs.map((data) => {
              return (
                <div key={data.transaction_hash}>
                  <LogContainer>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <LogTime>
                        {
                          String(data.in_timestamp).substring(0, 10) + " "
                          // + String(data.in_timestamp).substring(11, 19)
                        }
                      </LogTime>

                      <LogAction>
                        {(data.action === 0 && "Bought") ||
                          (data.action === 1 && "Minted") ||
                          (data.action === 2 && "Sold") ||
                          (data.action === 3 && "Burned") ||
                          (data.action === 4 && "Sent") ||
                          (data.action === 5 && "Received")}
                      </LogAction>

                      <LogSymbol>
                        <img src={data.collection.icon} alt="nft symbol" />
                      </LogSymbol>
                      <LogDescription>
                        <DescriptWhiteText>
                          {(data.token_id.length <= 5 &&
                            "#" + String(data.token_id)) ||
                            (data.token_id.length > 5 &&
                              "#" +
                                String(data.token_id).substring(0, 5) +
                                "...")}
                        </DescriptWhiteText>
                        {(data.action === 0 && (
                          <div style={{ display: "flex" }}>
                            <DescriptText>&nbsp;from</DescriptText>
                            <DescriptNeonText>
                              {" "}
                              &nbsp;
                              {String(data.from_address).substring(0, 5) +
                                "....." +
                                String(data.from_address).substring(37, 42)}
                            </DescriptNeonText>
                            <DescriptText>&nbsp;at</DescriptText>
                            <DescriptWhiteText>
                              &nbsp;
                              {String(data.value / Math.pow(10, 19)).substring(
                                0,
                                6,
                              )}
                            </DescriptWhiteText>
                            <DescriptText>ETH</DescriptText>
                            <DescriptText>(Gas: __)</DescriptText>
                          </div>
                        )) ||
                          (data.action === 1 && (
                            <DescriptText>(Gas: __)</DescriptText>
                          )) ||
                          (data.action === 2 && (
                            <div style={{ display: "flex" }}>
                              <DescriptText>&nbsp;to</DescriptText>
                              <DescriptNeonText>
                                {" "}
                                &nbsp;
                                {String(data.to_address).substring(0, 5) +
                                  "....." +
                                  String(data.to_address).substring(37, 42)}
                              </DescriptNeonText>
                              <DescriptText>&nbsp;at</DescriptText>
                              <DescriptWhiteText>
                                &nbsp;
                                {String(
                                  data.value / Math.pow(10, 19),
                                ).substring(0, 6)}
                              </DescriptWhiteText>
                              <DescriptText>ETH</DescriptText>
                              <DescriptText>(Gas: __)</DescriptText>
                            </div>
                          )) ||
                          (data.action === 3 && (
                            <DescriptText>(Gas: __)</DescriptText>
                          )) ||
                          (data.action === 4 && (
                            <div style={{ display: "flex" }}>
                              <DescriptText>&nbsp;to</DescriptText>
                              <DescriptNeonText>
                                &nbsp;
                                {String(data.to_address).substring(0, 5) +
                                  "....." +
                                  String(data.to_address).substring(37, 42)}
                              </DescriptNeonText>
                              <DescriptText>(Gas: __)</DescriptText>
                            </div>
                          )) ||
                          (data.action === 5 && (
                            <div style={{ display: "flex" }}>
                              <DescriptText>&nbsp;from</DescriptText>
                              <DescriptNeonText>
                                &nbsp;
                                {String(data.from_address).substring(0, 5) +
                                  "....." +
                                  String(data.from_address).substring(37, 42)}
                              </DescriptNeonText>
                              <DescriptText>(Gas: __)</DescriptText>
                            </div>
                          ))}
                      </LogDescription>
                    </div>

                    <a
                      href={
                        "https://etherscan.io/tx/" +
                        String(data.transaction_hash)
                      }
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        alignSelf: "center",
                        width: "2rem",
                        height: "2rem",
                        cursor: "pointer",
                      }}
                    >
                      <img src="img/link_button.png" alt="link button" />
                    </a>
                  </LogContainer>
                </div>
              );
            })
          )}
          {/* 테스트용으로 하나 넣음 */}
          {/* <LogContainer>
            <LogTime>Time</LogTime>
            <LogAction>Action</LogAction>
            <LogSymbol></LogSymbol>
            <LogDescription>asdasd</LogDescription>
          </LogContainer> */}
        </Body>
        <Footer>
          {more ? (
            <div
              style={{ display: "flex", cursor: "pointer" }}
              onClick={getActivityData}
            >
              <FooterMore>More</FooterMore>
              <MoreImg src="img/more_button.png" alt="more img"></MoreImg>
            </div>
          ) : (
            <FooterDone></FooterDone>
          )}
        </Footer>
      </ActitivityContainer>
    </div>
  );
}
