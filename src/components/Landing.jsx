import { Link } from "react-router-dom";
import React from "react";
import styles from "./Landing.module.css";
import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  0% {
    opacity: 0;
    transform: none;
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Blur = styled.img`
  z-index: 1;

  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  /* (temporary) % for small screen */
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  animation: ${fadein} 3s ease-in-out;
`;

export default function Landing() {
  sessionStorage.setItem("origin", window.location.href);
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "164.4rem",
          height: "auto",
        }}
      >
        <Blur
          src="img/Blur_1.png"
          alt=" "
          width="70.3rem"
          left="12rem"
          height="60rem"
          top="-7.2rem"
        />
      </div>

      <div
        style={{
          position: "relative",
          width: "164.4rem",
          height: "auto",
        }}
      >
        <Blur
          src="img/Blur_2.png"
          alt=" "
          width="61.2rem"
          height="73.9rem"
          top="79.4rem"
          left="28rem"
        />
      </div>

      <div
        style={{
          position: "relative",
          width: "164.4rem",
          height: "auto",
        }}
      >
        <Blur
          src="img/Blur_3.png"
          alt=" "
          width="63.9rem"
          height="55.9rem"
          top="193.8rem"
          left="84rem"
        />
      </div>

      <div className={styles.LandingContainer}>
        <div className={styles.Block1}>
          <div className={styles.Block1Title}>
            Track Your Position in NFT World
          </div>
          <div className={styles.Block1Content}>
            Get accurate data and <br />
            build reliable whitelists with NFT Ranks
          </div>

          <div className={styles.Block6Btn} style={{ marginTop: "4.8rem" }}>
            <Link
              style={{
                fontSize: "1.4rem",
                color: "#151517",
                fontWeight: "bold",
              }}
              to="/connectWallet"
            >
              CHECK MY RANK
            </Link>
          </div>
        </div>

        <div className={styles.Block2}>
          <div className={styles.Block2Left}>
            <div className={styles.Block2LeftTitle}>
              Welcome <br />
              to the Jungle <br />
            </div>
            <div className={styles.Block2LeftContents}>
              NFT Ranks was created by NFT Degens who are highly interested in
              building service to provide ranking system of wallets and NFT
              projects in addition to NFT portfolio analysis.
            </div>
          </div>
          <div className={styles.Block2Right}>
            <div className={styles.Block2RightContents}>
              <img src="img/Mask_group.png" alt=" "></img>
            </div>
          </div>
        </div>
        <div className={styles.Block3}>
          <div className={styles.Block3Title}>Check out your portfolio</div>
          <div className={styles.Block3Image}>
            <img src="img/Block3_Portfolio_Image.png" alt=" " />
          </div>
          <div className={styles.Block3Content}>
            The ranking parameters are set to comprehend whether the owner
            contributes to NFT eco-system or not. As we aim to help build sound
            NFT culture, the criterion for the ranking varies and do not focus
            on profit one has made.
          </div>
        </div>
        <div className={styles.Block4}>
          <div className={styles.Block4Left}>
            <img src="img/Block4_Rank_Image.png" alt=" " />
          </div>
          <div className={styles.Block4Right}>
            <div className={styles.Block4RightTitle}>Do You Rank on?</div>
            <div className={styles.Block4RightContent}>
              Rankings are indicators of how your choices have influenced your
              portfolio and NFT culture in positive way. Investment credit
              ratings will be granted according to specific criteria. People
              above a certain score get an honorable role called Diamond Hands.
              On the contrary, people with low scores receive a roll called
              Paper Hands.
            </div>
          </div>
        </div>
        <div className={styles.Block5}>
          <div className={styles.Block5Left}>
            <div className={styles.Block5LeftTitle}>Shine Like a Diamond</div>
            <div className={styles.Block5LeftContent}>
              We can sort out wallets into three levels: diamond hands, normal
              hands, and paper hands. We also have further plan to create
              community with diamond hands and adopt DAO system.
            </div>
          </div>
          <div className={styles.Block5Right}>
            <img src="img/Block_5_Hand_Image.png" alt=" " />
          </div>
        </div>
        <div className={styles.Block6}>
          <div className={styles.Block6Title}>Wanna Be Together?</div>

          <div className={styles.Block6Btn}>
            <Link
              style={{
                fontSize: "1.4rem",
                color: "#151517",
                fontWeight: "bold",
              }}
              to="/connectWallet"
            >
              CHECK MY RANK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
