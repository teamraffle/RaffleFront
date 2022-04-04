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
  overflow: hidden;
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  /* (temporary) % for small screen */
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  animation: ${fadein} 3s ease-in-out;
`;

export default function Landing() {
  return (
    <>
      <Blur
        src="img/Blur_1.png"
        alt=" "
        width="49.7rem"
        height="60rem"
        marginLeft="0rem"
        marginRight="0rem"
        left="0rem"
        top="0rem"
      />
      <Blur
        src="img/Blur_2.png"
        alt=" "
        width="137.7rem"
        height="166.2rem"
        marginLeft="30rem"
        marginRight="80rem"
        top="112.3rem"
      />
      <div className={styles.Blur3}>
        <img src="img/Blur_3.png" alt=" "></img>
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

          <button className={styles.Block1Btn}>Check My Rank</button>
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
              <br />
              <br />
              The ranking parameters are set to comprehend whether the owner
              contributes to NFT eco-system or not. As we aim to help build
              sound NFT culture , the criterion for the ranking varies and do
              not focus on profit one has made. <br />
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
            <div className={styles.B3CLeft}>
              NFT Ranks was created by NFT Degens who are highly interested in
              building service to provide ranking system of wallets and NFT
              projects in addition to NFT portfolio analysis.
            </div>
            <div className={styles.B3CRight}>
              NFT Ranks was created by NFT Degens who are highly interested in
              building service to provide ranking system of wallets and NFT
              projects in addition to NFT portfolio analysis.
            </div>
          </div>
        </div>
        <div className={styles.Block4}>
          <div className={styles.Block4Left}>
            <div className={styles.Block4LeftTitle}>
              Do You <br />
              Rank on?
            </div>
            <div className={styles.Block4LeftContent}>
              Rankings are indicators of how your choices have influenced your
              portfolio and NFT culture in positive way. Investment credit
              ratings will be granted according to specific criteria. People
              above a certain score get an honorable role called Diamond Hands.
              On the contrary, people with low scores receive a roll called
              Paper Hands.
            </div>
          </div>
          <div className={styles.Block4Right}>
            <img src="img/Block4_Rank_Image.png" alt=" " />
          </div>
        </div>
        <div className={styles.Block5}>
          <div className={styles.Block5Left}>
            <img src="img/Block_5_Hand_Image.png" alt=" " />
          </div>
          <div className={styles.Block5Right}>
            <div className={styles.Block5RightTitle}>
              Be Shining <br />
              Like a Diamond
            </div>
            <div className={styles.Block5RightContent}>
              We can sort out wallets into three levels: diamond hands, normal
              hands, and paper hands. We also have further plan to create
              community with diamond hands and adopt DAO system.
            </div>
          </div>
        </div>
        <div className={styles.Block6}>
          <div className={styles.Block6Title}>Wanna Be Together?</div>

          <button className={styles.Block6Btn}>Check My Rank</button>
        </div>
      </div>
    </>
  );
}
