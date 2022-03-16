import React, { useState, useEffect } from "react";
import styles from "./ConnectWallet.module.css";

import axios from "axios";

export default function ConnectWallet() {
  const { ethereum } = window;
  /** -------------------- State Variables -------------------- */
  // 1[select], 2[signing], 3[setNickName], 4[failed]
  const [pageStep, setPageStep] = useState(1);
  /** <1> */
  const [chainID, setChainID] = useState(); // 버튼 클릭 감지 [MetaMask] Click
  /** <2> */
  const [userInfo, setUserInfo] = useState();
  const [currentAccount, setCurrentAccount] = useState(0);
  // const [isConnected, setIsConnected] = useState(false);  // 지갑 연결에 성공했는지 체크하는 상태 변수

  // console.log("[*] Page Rendered...");
  // console.log("[ConnectWallet] pageStep : ", pageStep);
  // console.log("[ConnectWallet] chainID : ", chainID);
  // console.log("[ConnectWallet] currentAccount : ", currentAccount);

  /** -------------------- Functions -------------------- */
  const checkIfMetamaskWalletIsConnected = async () => {
    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        // console.log("[checkIfMetamaskWalletIsConnected] account : ", account);
        /**
         * 특정 페이지로 이동할 수 있게 코딩해야함
         */
        // <NavLink to="/"></NavLink>;
      }
    } catch (error) {
      console.log(error);
    }
  };
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
      // console.log("[useEffect, chainID] accounts : ", accounts);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      // console.log("[connectMetamaskWallet] ERROR : ", error);
    }
  };

  const getUsersAPICalling = async () => {
    const params = {
      chain_id: chainID,
      address: currentAccount,
    };

    // TEST Payload for arbitary address value
    const payload =
      "https://nftranks.xyz:3033/v1/users" +
      "?" +
      "chain_id" +
      "=1" +
      "&" +
      "address" +
      "=0x415e380a6bbee81a59FA73465fb83727396Dcf17"; // 테스트를 위한 가짜 주소
    //   "=0x415e380a6bbee81a59FA73465fb83727396Dcf18"; // 정상 지갑 주소

    try {
      // 기존 유저 일 때
      const response = await axios.get(payload);

      // const response = await axios.get("https://nftranks.xyz:3033/v1/users", {
      //   params,
      // });

      // console.log("[getUsersAPICalling] response : ", response);
      // console.log("Welcome Back " + response.data.nickname + " !");
      setUserInfo(response.data);

      /** targetURL로 이동함 */
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

  /** API test w/ axios */
  // const btnClick = async () => {
  //   const params = {
  //     chain_id: chainID,
  //     address: "0x415e380a6bbee81a59FA73465fb83727396Dcf18",
  //   };
  //   const response = await axios.get(
  //     "https://nftranks.xyz:3033/v1/users?chain_id=1&address=0x415e380a6bbee81a59FA73465fb83727396Dcf18",
  //   );
  //   console.log(params.chain_id);
  //   console.log(params.address);
  //   console.log(response);
  // };

  /**  -------------------- 렌더링 함수들 -------------------- */
  /** [Step 1] 지갑 연결하는 화면 */
  const renderingSelectPage = () => {
    return (
      <div className={styles.title}>
        <div
          style={{
            fontSize: "36px",
            fontWeight: "600",
            fontStretch: "normal",
            fontStyle: "normal",
            letterSpacing: "normal",
            color: "#f5f5f5",
          }}
        >
          Connect Your Wallet
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            color: "#f5f5f5",
            marginBottom: "58px",
          }}
        >
          Let’s start a journey to NFT’s World
        </div>

        <div>
          <div>
            <button
              onClick={() => {
                setChainID(1);
                // await hasMetamaskWallet();
                setPageStep(2);
              }}
              className={styles.btnDefault}
            >
              <img
                className={styles.btnIcon}
                src="img/metamaskIcon.png"
                alt="metamask icon"
              />
              Metamask
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setChainID(2);
              }}
              className={styles.btnDefault}
            >
              <img
                className={styles.btnIcon}
                src="img/coinbaseIcon.png"
                alt="metamask icon"
              />
              CoinBase
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setChainID(3);
              }}
              className={styles.btnDefault}
            >
              <img
                className={styles.btnIcon}
                src="img/kaikasIcon.png"
                alt="kaikas icon"
              />
              KaiKas
            </button>
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "300",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "-0.6px",
              margin: "56px",
            }}
          >
            <a
              style={{ color: "#f5f5f5" }}
              href="https://metamask.io/"
              target="_blank"
              rel="noreferrer"
            >
              <u>I don't have any wallet</u>
            </a>
          </div>
        </div>
      </div>
    );
  };

  /** [Step 2] 지갑 연결하는 화면 */
  const renderingSigningPage = () => {
    return (
      <div className={styles.connectionLoading}>
        <div
          style={{
            fontSize: "36px",
            fontFamily: "Poppins",
            marginTop: "155px",
            marginBottom: "89px",
          }}
        >
          Your Connecting is in Progress with:
        </div>
        <div align="center">
          {chainID === 1 && <img src="img/metamaskLoadingIcon.svg" alt=" " />}
          {chainID === 2 && <img src="img/" alt="coinbase icon" />}
          {chainID === 2 && <img src="img/" alt="coinbase icon" />}
        </div>

        <div
          style={{
            fontSize: "24px",
            fontFamily: "Poppins",
            textAlign: "center",
            marginTop: "88px",
          }}
        >
          please check your browser modal.
        </div>
      </div>
    );
  };

  /** [Step 3] 닉네임 설정하는 화면 */
  const renderingSetNickNamePage = () => {
    return (
      <div className={styles.setNickNamePage}>
        <div className={styles.setNickNamePageTitle}>Create Your Nickname</div>
        <div className={styles.setNickNamePageBox}>
          <div className={styles.setNickNamePageWalletSymbol}>
            <img
              src="img/SetNickName_metamask_symbol.png"
              alt="set nickname page wallet symbol"
            />
          </div>
          <div className={styles.setNickNamePageWalletName}>
            {" "}
            {chainID === 1 && "metamask"}{" "}
          </div>
          <div
            style={{
              position: "absolute",
              top: "4.6%",
              left: "26.4%",
              color: "#4f4f54",
            }}
          >
            |
          </div>
          <div className={styles.setNickNamePageChainName}>
            {" "}
            {chainID === 1 && "ethereum"}{" "}
          </div>
          <div className={styles.setNickNamePageRandomAvatar}>
            <img
              src="img/SetNickName_Avatar_Image.png"
              alt="set nickname page"
            />
          </div>
          <div className={styles.setNickNamePageUserAddress}>
            {currentAccount}
          </div>
          <div className={styles.setNickNamePageInputNicknameBox}>
            <input
              className={styles.setNickNamePageInputNickname}
              placeholder="Nickname (max. 20 characters)"
            ></input>
          </div>
          <div className={styles.setNickNamePageInputDoneButtonBox}>
            <button className={styles.setNickNamePageInputDoneButton}>
              DONE
            </button>
          </div>
        </div>

        <div
          style={{
            fontSize: "24px",
            fontFamily: "Poppins",
            textAlign: "center",
            marginTop: "88px",
          }}
        >
          please check your browser modal.
        </div>
      </div>
    );
  };

  /** [Step 4] 에러 발생 화면 */
  const renderingFailedConnectionPage = () => {
    return (
      <div>
        <div>test</div>
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

  return (
    <div>
      <div>
        {(pageStep === 1 && renderingSelectPage()) ||
          (pageStep === 2 && renderingSigningPage()) ||
          (pageStep === 3 && renderingSetNickNamePage()) ||
          (pageStep === 4 && renderingFailedConnectionPage())}
      </div>
    </div>
  );
}
