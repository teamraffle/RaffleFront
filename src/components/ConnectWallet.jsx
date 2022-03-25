import React, { useState, useEffect } from "react";
import styles from "./ConnectWallet.module.css";

import axios from "axios";

export default function ConnectWallet({ setIsLogin_Appjsx }) {
  const { ethereum } = window;
  /** -------------------- State Variables -------------------- */
  // 1[select], 2[signing], 3[setNickName], 4[failed]
  const [pageStep, setPageStep] = useState(1);
  /** <1> */
  const [chainID, setChainID] = useState(); // 버튼 클릭 감지 [MetaMask] Click
  /** <2> */
  const [userInfo, setUserInfo] = useState();
  const [currentAccount, setCurrentAccount] = useState(0);

  /** <3> */
  const [nickname, setNickname] = useState("");
  const [nicknameAvailable, setNicknameAvailable] = useState(false);
  const [cssInputStyle, setCssInputStyle] = useState(
    styles.setNickNamePageInputNickname,
  );

  console.log("[*] Page Rendered...");
  console.log("[ConnectWallet] pageStep : ", pageStep);
  console.log("[ConnectWallet] chainID : ", chainID);
  console.log("[ConnectWallet] currentAccount : ", currentAccount);

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

  // 닉네임을 입력했을 때 중복검사 + 버튼 상태 바꾸는 함수
  const checkNicknameOverlappingAPICalling = async (_nickname) => {
    let filteringCondition = /^[a-zA-Z+]{3,20}$/;
    let willUpdate = true;
    try {
      willUpdate = filteringCondition.test(_nickname);

      if (willUpdate) {
        setNicknameAvailable(true);
      } else {
        setNicknameAvailable(false);
      }

      const params = {
        check_value: nickname,
        chain_id: chainID,
      };

      await axios.get("https://nftranks.xyz:8888/v1/register/nickname", {
        params,
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 409) {
        setNicknameAvailable(false);
      }
    }
  };

  // 신규 유저 등록하는 함수
  const sendPostToRegisterNewUser = async () => {
    try {
      const registerData = {
        chain_id: chainID,
        address: currentAccount,
        nickname: nickname,
      };

      await axios.post("https://nftranks.xyz:8888/v1/users", registerData);

      const url = await window.location.href;
      const targetURL = url.slice(0, url.indexOf("connectWallet"));
      window.location.href = targetURL;
    } catch (ex) {
      console.log("[sendPostToRegisterNewUser] Error : ", ex);
    }
  };

  /** ---------- 컴포넌트 ----------- */
  const buttonSendPostActive = () => {
    return (
      <button
        className={styles.setNickNamePageInputDoneButtonActivate}
        onClick={sendPostToRegisterNewUser}
      >
        DONE
      </button>
    );
  };

  const buttonSendPostInactive = () => {
    return (
      <button className={styles.setNickNamePageInputDoneButton}>DONE</button>
    );
  };

  /**  -------------------- 페이지 렌더링하는 함수  -------------------- */
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
            {chainID === 1 && "metamask"}
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
            <img src="img/SetNickName_Avatar_Image.png" alt="basic img" />
          </div>
          <div className={styles.setNickNamePageUserAddress}>
            {currentAccount}
          </div>
          <div className={styles.setNickNamePageInputNicknameBox}>
            <input
              type="text"
              onChange={(event) => {
                setNickname(event.target.value);

                // console.log(cssInputStyle);
              }}
              className={cssInputStyle}
              placeholder="Nickname (max. 20 characters)"
            ></input>
          </div>
          <div className={styles.setNickNamePageInputDoneButtonBox}>
            {nicknameAvailable
              ? buttonSendPostActive()
              : buttonSendPostInactive()}
          </div>
        </div>
      </div>
    );
  };

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

  useEffect(() => {
    checkNicknameOverlappingAPICalling(nickname);
  }, [nickname]);

  useEffect(() => {
    if (nickname === "") {
      setCssInputStyle(styles.setNickNamePageInputNickname);
    } else {
      if (nicknameAvailable) {
        setCssInputStyle(styles.setNickNamePageInputNicknameAvailable);
      } else {
        setCssInputStyle(styles.setNickNamePageInputNicknameDenied);
      }
    }
  }, [nicknameAvailable, nickname]);

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
