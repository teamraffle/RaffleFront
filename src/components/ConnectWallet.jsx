import React, { useState, useEffect } from "react";
import styles from "./ConnectWallet.module.css";

export default function ConnectWallet() {
  const [currentAccount, setCurrentAccount] = useState();
  /** Connect Wallet Button Click */
  const [metamaskBtnClick, setMetamaskBtnClick] = useState(false);

  /** 지갑 연결에 성공했는지 체크하는 상태 변수 */
  const [isConnected, setIsConnected] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log(account);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectMetamaskWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      console.log("Connected Complete:", currentAccount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  /** 메타마스크 버튼 누르면 띄우는 화면*/
  const renderMetamaskLoadingPage = () => {
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

  /** 지갑 선택하는 화면 */
  const renderSelectPage = () => {
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
                setMetamaskBtnClick(true);
                connectMetamaskWallet();
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
            <button className={styles.btnDisable}>
              <img
                className={styles.btnIcon}
                src="img/coinbaseIcon.png"
                alt="metamask icon"
              />
              CoinBase
            </button>
          </div>
          <div>
            <button className={styles.btnDisable}>
              <img
                className={styles.btnIcon}
                src="img/kaikasIcon.png"
                alt="metamask icon"
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

  return metamaskBtnClick ? renderMetamaskLoadingPage() : renderSelectPage();
}
