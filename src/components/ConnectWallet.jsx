import React, { useState, useEffect } from "react";
import styles from "./ConnectWallet.module.css";

export default function ConnectWallet() {
  const [currentAccount, setCurrentAccount] = useState();

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
      } else {
        alert("Rendering Loading Page");
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
          <button onClick={connectMetamaskWallet} className={styles.btnDefault}>
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
}
