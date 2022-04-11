import React, { useState, useEffect } from "react";
import styles from "./ConnectWallet.module.css";

/** pages */
import SelectPage from "./Pages/SelectPage";
import SigningPage from "./Pages/SigningPage";
import SetNicknamePage from "./Pages/SetNicknamePage";

import axios from "axios";

export default function ConnectWallet() {
  /** -------------------- State Variables -------------------- */
  // 1[select], 2[signing], 3[setNickName], 4[failed]
  const [pageStep, setPageStep] = useState(1);

  /** <1> */
  const [chainID, setChainID] = useState(); // 버튼 클릭 감지 [MetaMask] Click
  /** <2> */
  const [currentAccount, setCurrentAccount] = useState(0);

  /** <3> */
  const [nickname, setNickname] = useState("");
  const [cssInputStyle, setCssInputStyle] = useState(
    styles.setNickNamePageInputNickname,
  );

  console.log("[*] Page Rendered...");
  console.log("[ConnectWallet] pageStep : ", pageStep);
  console.log("[ConnectWallet] chainID : ", chainID);
  console.log("[ConnectWallet] currentAccount : ", currentAccount);

  /** ---- functions for state variables ---- */
  const changeChainID = (_chainID) => {
    setChainID(_chainID);
  };

  const changePageStep = (_pageStep) => {
    setPageStep(_pageStep);
  };

  const changeNickname = (_nickname) => {
    setNickname(_nickname);
  };
  /** -------------------- Functions -------------------- */
  const connectMetamaskWallet = async () => {
    const { ethereum } = window;
    try {
      if (!ethereum) {
        alert("저런.. Metamask가 없으시군요?\n선택화면으로 돌아가세요.");
        setPageStep(1);
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("[connectMetamaskWallet] ERROR : ", error);
    }
  };

  // 지갑이 연결되면, 바로 기존 유저인지 확인함
  const getUsersAPICalling = async () => {
    const params = {
      chain_id: chainID,
      address: currentAccount,
    };

    try {
      const response = await axios.get("https://nftranks.xyz:8888/v1/users", {
        params,
      });

      // targetURL로 이동함
      console.log(response.data.user_id);
      sessionStorage.setItem("user", response.data.user_id);
      sessionStorage.setItem("nickname", response.data.nickname);
      sessionStorage.setItem("walletAddress", currentAccount);
      const url = await window.location.href;
      const targetURL = url.slice(0, url.indexOf("connectWallet"));
      window.location.href = targetURL;
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        // 신규 유저 등록하러 가야함
        setPageStep(3);
      }
    }
  };

  /**  -------------------- 페이지 렌더링하는 함수  -------------------- */
  /** [Step 1] 지갑 연결하는 화면 */
  /** [Step 2] 지갑 연결하는 화면 */
  /** [Step 3] 닉네임 설정하는 화면 */
  /** [Step 4] 에러 발생 화면 */
  const renderingFailedConnectionPage = () => {
    return (
      <div className={styles.failedConnectionPage}>
        <div className={styles.bigXLogo}>
          <img src="img/bigXLogo.png" alt="big x logo" />
        </div>
        <div className={styles.textConnectionFailed}>Connection Failed</div>

        <button
          className={styles.buttonTryAgain}
          onClick={() => {
            setPageStep(1);
          }}
        >
          TRY AGAIN
        </button>
        <div className={styles.textGoGetAMetamask}>
          <a
            style={{ color: "#f5f5f5" }}
            href="https://metamask.io/"
            target="_blank"
            rel="noreferrer"
          >
            <u>Don't you have a wallet?</u>
          </a>
        </div>
      </div>
    );
  };

  /** -------------------- useEffect 함수들 -------------------- */
  useEffect(() => {
    if (chainID === 1) {
      connectMetamaskWallet();
    }
  }, [chainID]);

  useEffect(() => {
    if (currentAccount !== 0) {
      getUsersAPICalling();
    }
  }, [currentAccount]);

  // 닉네임 체크가 setNicknamePage 에서 끝난 뒤, 부모의 state는 업데이트만 시켜줌
  //   useEffect(() => {
  //     checkNicknameOverlappingAPICalling(nickname);
  //     console.log("Nickname :", nickname);
  //   }, [nickname]);

  return (
    <div>
      <div>
        {(pageStep === 1 && (
          <SelectPage
            changeChainID={changeChainID}
            changePageStep={changePageStep}
          />
        )) ||
          (pageStep === 2 && <SigningPage chainID={chainID} />) ||
          (pageStep === 3 && (
            <SetNicknamePage
              currentAccount={currentAccount}
              chainID={chainID}
              changeNickname={changeNickname}
            />
          )) ||
          (pageStep === 4 && renderingFailedConnectionPage())}
      </div>
    </div>
  );
}
