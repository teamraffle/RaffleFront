import React, { useState, useEffect } from "react";
import styles from "./ConnectWallet.module.css";
import axios from "axios";

export default function ConnectWallet() {
  /** -------------------- State Variables -------------------- */
  const [currentAccount, setCurrentAccount] = useState();
  const [pageStep, setPageStep] = useState(1); // 1[select], 2[signing], 3[setNickName], 4[failed]
  const [chainID, setChainID] = useState(); // 버튼 클릭 감지 [MetaMask] Click
  // const [isConnected, setIsConnected] = useState(false);  // 지갑 연결에 성공했는지 체크하는 상태 변수

  /** -------------------- Functions -------------------- */
  // const checkIfWalletIsConnected = async () => {
  //   try {
  //     const { ethereum } = window;
  //     const accounts = await ethereum.request({ method: "eth_accounts" });
  //     if (accounts.length !== 0) {
  //       const account = accounts[0];
  //       console.log(account);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const connectMetamaskWallet = async () => {
  //   try {
  //     const { ethereum } = window;

  //     if (!ethereum) {
  //       alert("Get MetaMask!");
  //       return;
  //     }
  //     const accounts = await ethereum.request({
  //       method: "eth_requestAccounts",
  //     });

  //     console.log("Connected", accounts[0]);
  //     setCurrentAccount(accounts[0]);
  //     console.log("Connected Complete:", currentAccount);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const btnClick = async () => {
    const params = {
      chain_id: chainID,
      address: "0x415e380a6bbee81a59FA73465fb83727396Dcf18",
    };
    const response = await axios.get(
      "https://nftranks.xyz:3033/v1/users?chain_id=1&address=0x415e380a6bbee81a59FA73465fb83727396Dcf18",
    );
    console.log(params.chain_id);
    console.log(params.address);
    console.log(response);
  };

  /**  -------------------- 렌더링 함수들 -------------------- */
  /** 지갑 선택하는 화면 */
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
              onClick={async () => {
                setChainID(1);
                // await hasMetamaskWallet();
                // 메타마스크 있는지 여부로 아래에 삼항 연산을 통해 진행 / 돌려보내기 결정해야함
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

  /** 지갑 연결하는 화면 */
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
          <img src="img/metamaskLoadingIcon.svg" alt=" " />
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

  const renderingSetNickNamePage = () => {
    return (
      <div>
        <div>test</div>
      </div>
    );
  };

  const renderingFailedConnectionPage = () => {
    return (
      <div>
        <div>test</div>
      </div>
    );
  };

  /** -------------------- useEffect 함수들 -------------------- */
  // useEffect(() => {
  //   checkIfWalletIsConnected();
  // }, []);

  useEffect(() => {
    console.log(chainID);
  }, [chainID]);

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
