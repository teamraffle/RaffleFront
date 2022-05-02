import NFTSearchBar from "./NFTSearchBar.jsx";
import NFTOptionBox from "./NFTOptionBox.jsx";

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

const NFTsContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;

  border-radius: 1.4rem;

  width: auto;
  min-height: 45rem;

  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;

  margin-top: 1.2rem;

  border: solid 0.1rem ${colors.RaffleCharcoal};
  background-color: ${colors.RaffleDeepDark};
`;

//-Header----------------------------------------------------------------------------------------------
const NFTsHeader = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 4rem;
`;
const HeaderSearchBar = styled.div`
  width: 51.2rem;
  height: auto;
  border-bottom: solid 0.1rem #626262;

  padding-top: 10px;
`;
const HeaderOptionButton = styled.button`
  width: 12rem;
  height: auto;
`;
//-----------------------------------------------------------------------------------------------

//-Body----------------------------------------------------------------------------------------------
const NFTsBody = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;

  margin-top: 2.8rem;
`;
const BodyCountResults = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: var(--raffle-white);

  margin-bottom: 2rem;
`;

// NFTWindow
const NFTWindow = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  column-gap: 0.8rem;
  row-gap: 0.8rem;
  flex-wrap: wrap;

  width: 66.4rem;
  min-height: ${(props) => 27 * Math.ceil(props.nftCount / 4) + "rem"};

  background: ${colors.RaffleDeepDark};
`; // 4x3 들어갈 큰 창

const NFTBox = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;

  width: 16rem;
  height: 26.4rem;

  border-radius: 0.8rem;

  background: ${colors.RaffleCharcoal};
`;
const BoxImg = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;

  border-radius: 0.8rem 0.8rem 0rem 0rem;
  background: rgba(21, 21, 23, 0.8);
`;

const BoxDescription = styled.div`
  margin: 1.2rem;
`;

const BoxSymbol = styled.div`
  position: absolute;
  width: 3.8rem;

  top: 14rem;
  left: 1.2rem;

  background: rgba(255, 255, 255, 0);
`; // absolute
const BoxProjectName = styled.div`
  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: ${colors.RaffleGrey};

  white-space: nowrap;
  overflow: hidden;
  text-verflow: ellipsis;
`;
const BoxNFTName = styled.div`
  width: 137px;
  height: 44px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: ${colors.RaffleWhite};
`;
const BoxOwnedDate = styled.div``;
const BoxLastPrice = styled.div`
  display: flex;

  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: right;
`;

//-----------------------------------------------------------------------------------------------

//-Footer----------------------------------------------------------------------------------------------
const NFTsFooter = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 0.8rem;

  margin-top: 4rem;

  width: auto;

  font-family: Poppins;
  font-size: 3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: center;
  color: ${colors.RaffleBtnStrokeGrey};
`;

const FooterIndexButton = styled.div`
  cursor: pointer;

  &hover: {
    color: ${colors.RaffleNeon};
  }
`;

//-----------------------------------------------------------------------------------------------

export default function PortfoiloNFT() {
  const [searching, setSearching] = useState(); // 검색 시작하면 돋보기, 문구 사라져야 함
  const [page, setPage] = useState(1);
  const [nftData, setNftData] = useState(null);
  const [nftDataResult, setNftDataResult] = useState(null);

  const images = ["jpg", "png", "gif"];
  const videos = ["mp4", "3gp", "ogg"];

  /**
   * 처음 NFT 탭을 클릭하거나, page 값이 바뀔 때 호출
   */
  const getNftData = async () => {
    const params = {
      page: page - 1,
      chain_id: 1,
      // 일단은 특정 주소를 이용해서 값 불러오는 것을 확인함
      address: sessionStorage.getItem("walletAddress"),
    };

    const response = await axios.get(
      "https://nftranks.xyz:8888/v1/portfolios/nft",
      {
        params,
      },
    );

    setNftData(response);
    setNftDataResult(response.data.result);
  };

  const pageDecrease = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const pageIncrease = () => {
    if (nftData !== null) {
      if (page < Math.ceil(nftData.data.total / 12)) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    console.log("[NFT data] : ", nftData);
  }, [nftData]);

  useEffect(() => {
    console.log("[NFT data result] : ", nftDataResult);
  }, [nftDataResult]);

  useEffect(() => {
    console.log("[+] page : ", page);
    setNftData(null);
    setNftDataResult(null);
    getNftData();
  }, [page]);

  useEffect(() => {
    getNftData();
  }, []);

  return (
    <NFTsContainer>
      <NFTsHeader>
        <HeaderSearchBar>
          <NFTSearchBar />
        </HeaderSearchBar>
        {/* <NFTOptionBox /> */}
      </NFTsHeader>
      <NFTsBody>
        <BodyCountResults>
          {nftData === null ? 0 : nftData.data.total} Results
        </BodyCountResults>
        <NFTWindow nftCount={1}>
          {/* map 함수로 자동으로 여러개 띄워줘야 함. */}
          {/* 4개가 한 칸에 들어가도록 해야함. */}
          {/* Flex box 이용해서 wrap 으로 할지?? */}
          {nftDataResult === null ? (
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: "14rem", height: "17rem", alignSelf: "center" }}
                src="img/no_data.png"
                alt="no data img"
              />
            </div>
          ) : (
            nftDataResult.map((data) => {
              return (
                <div>
                  <NFTBox>
                    <BoxImg>
                      {/* ---------------------일단 적당히 돌아가는 코드임--------------------- */}

                      {String(data.nft_image).substring(
                        String(data.nft_image).length - 4,
                        String(data.nft_image).length,
                      ) === ".mp4" ||
                      String(data.nft_image).substring(
                        String(data.nft_image).length - 4,
                        String(data.nft_image).length,
                      ) === ".MP4" ? (
                        <video
                          src={
                            "https://ipfs.io/ipfs/" +
                            String(data.nft_image).substring(6)
                          }
                          loop="loop"
                          autoPlay="autoplay"
                          style={{ width: "100%", height: "100%" }}
                        />
                      ) : (
                        <img
                          src={
                            //  "ipfs://" 로 시작하는 경우
                            (String(data.nft_image).substring(0, 7) ===
                              "ipfs://" &&
                              "https://ipfs.io/ipfs/" +
                                String(data.nft_image).split("://")[1]) ||
                            // "ar://"로 시작하는 경우
                            (String(data.nft_image).substring(0, 5) ===
                              "ar://" &&
                              "https://arweave.net/" +
                                String(data.nft_image).substring(5)) ||
                            // "https://"로 시작하며, url 따라가면 그냥 이미지 보이는 경우
                            (String(data.nft_image).substring(0, 4) ===
                              "http" &&
                              String(data.nft_image).search("ipfs") >= 0 &&
                              "https://ipfs.io/ipfs/" +
                                String(data.nft_image).split("/ipfs/")[1]) ||
                            (String(data.nft_image).substring(0, 4) ===
                              "http" &&
                              data.nft_image)
                          }
                          alt="nft img"
                          style={{ height: "100%", width: "100%" }}
                        />
                      )}
                      {/* ---------------------일단 적당히 돌아가는 코드임--------------------- */}
                      <BoxSymbol>
                        <img
                          src={data.collection.collection_icon}
                          alt="symbol"
                          style={{
                            borderRadius: "0.8rem 0.8rem 0.8rem 0.8rem",
                            width: "3.2rem",
                            height: "3.2rem",
                          }}
                        />
                      </BoxSymbol>
                    </BoxImg>
                    <BoxDescription>
                      <BoxProjectName>
                        {nftData === null ? null : data.collection.name}
                      </BoxProjectName>
                      <BoxNFTName>
                        #
                        {nftData === null
                          ? null
                          : (String(data.token_id).length > 5 &&
                              String(data.token_id).substring(0, 5) + "...") ||
                            (String(data.token_id).length <= 5 &&
                              data.token_id)}
                      </BoxNFTName>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <BoxOwnedDate>Date</BoxOwnedDate>
                        <BoxLastPrice>
                          <img
                            style={{
                              width: "1rem",
                              height: "1rem",
                              marginTop: "0.2rem",
                              marginRight: "0.4rem",
                            }}
                            src="img/mini_eth.png"
                            alt="mini eth"
                          />
                          {data.collection.fp}&nbsp;ETH
                        </BoxLastPrice>
                      </div>
                    </BoxDescription>
                  </NFTBox>
                </div>
              );
            })
          )}
        </NFTWindow>
      </NFTsBody>
      {nftData === null ? null : (
        <NFTsFooter>
          <FooterIndexButton onClick={pageDecrease}>{"<"}</FooterIndexButton>
          <FooterIndexButton>{page}</FooterIndexButton>
          <FooterIndexButton onClick={pageIncrease}>{">"}</FooterIndexButton>
        </NFTsFooter>
      )}
    </NFTsContainer>
  );
}
