import React, { useState, useEffect } from "react";
import styles from "./ConnectWallet.module.css";

/** pages */
import SelectPage from "./Pages/SelectPage";
import SigningPage from "./Pages/SigningPage";
import SetNicknamePage from "./Pages/SetNicknamePage";

export default function ConnectWallet() {
  /** -------------------- State Variables -------------------- */
  // 1[select], 2[signing], 3[setNickName], 4[failed]
  const [pageStep, setPageStep] = useState(1);

  /** <1> */
  const [chainID, setChainID] = useState(); // 버튼 클릭 감지 [MetaMask] Click
  /** <2> */
  const [currentAccount, setCurrentAccount] = useState(0);

  /** <3> */

  console.log("[*] Page Rendered...");
  console.log("[ConnectWallet] pageStep :", pageStep);
  console.log("[ConnectWallet] chainID :", chainID);
  console.log("[ConnectWallet] currentAccount :", currentAccount);

  /** ---- functions for state variables ---- */
  const changeChainID = (_chainID) => {
    setChainID(_chainID);
  };

  const changePageStep = (_pageStep) => {
    setPageStep(_pageStep);
  };

  const changeCurrentAccount = (_currentAccount) => {
    setCurrentAccount(_currentAccount);
  };
  /** -------------------- Functions -------------------- */

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

  return (
    <div>
      <div>
        {(pageStep === 1 && (
          <SelectPage
            changeChainID={changeChainID}
            changePageStep={changePageStep}
          />
        )) ||
          (pageStep === 2 && (
            <SigningPage
              chainID={chainID}
              currentAccount={currentAccount}
              changePageStep={changePageStep}
              changeCurrentAccount={changeCurrentAccount}
            />
          )) ||
          (pageStep === 3 && (
            <SetNicknamePage
              chainID={chainID}
              currentAccount={currentAccount}
            />
          )) ||
          (pageStep === 4 && renderingFailedConnectionPage())}
      </div>
    </div>
  );
}
