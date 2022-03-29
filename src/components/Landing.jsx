import React from "react";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.Landing}>
      <div className={styles.Block1}>
        <div className={styles.Blur1}>
          <img src="img/Blur_1.png" alt=" "></img>
        </div>
        <div className={styles.Block1Title}>
          Track Your Position <br />
          in NFT World
        </div>
        <div className={styles.Block1Content}>
          NFT Ranks was created by NFT Degens who are highly <br />
          interested in building service to provide ranking system <br />
          of wallets and NFT projects in addition to NFT portfolio analysis.{" "}
        </div>
        <div>
          <button className={styles.Block1Btn}>Check My Rank</button>
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
            <br />
            <br />
            The ranking parameters are set to comprehend whether the owner
            contributes to NFT eco-system or not. As we aim to help build sound
            NFT culture , the criterion for the ranking varies and do not focus
            on profit one has made. <br />
          </div>
        </div>
        <div className={styles.Block2Right}>
          <div className={styles.Block2RightContents}>
            <img src="img/Mask_group.png" alt=" "></img>
          </div>
        </div>
      </div>
      <div className={styles.Block3}>
        <div className={styles.Blur2}>
          <img src="img/Blur_2.png" alt=" "></img>
        </div>
        <div className={styles.Block3Title}>Check out your portfolio</div>
        <div className={styles.Block3Image}>
          <img src="img/Block3_Portfolio_Image.png" alt=" " />
        </div>
        <div className={styles.Block3Content}>
          <div className={styles.B3CLeft}>
            NFT Ranks was created by NFT Degens who are <br /> highly interested
            in building service to provide <br /> ranking system of wallets and
            NFT projects in <br /> addition to NFT portfolio analysis.
          </div>
          <div className={styles.B3CRight}>
            NFT Ranks was created by NFT Degens who are <br /> highly interested
            in building service to provide <br /> ranking system of wallets and
            NFT projects in <br /> addition to NFT portfolio analysis.
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
            Rankings are indicators of how your choices have <br />
            influenced your portfolio and NFT culture in positive <br />
            way. Investment credit ratings will be granted <br />
            according to specific criteria. People above a certain <br />
            score get an honorable role called Diamond Hands. <br />
            On the contrary, people with low scores receive a roll <br />
            called Paper Hands.
          </div>
        </div>
        <div className={styles.Block4Right}>
          <img src="img/Block4_Rank_Image.png" alt=" " />
        </div>
      </div>
      <div className={styles.Block5}>
        <div className={styles.Blur3}>
          <img src="img/Blur_3.png" alt=" "></img>
        </div>
        <div className={styles.Block5Left}>
          <img src="img/Block_5_Hand_Image.png" alt=" " />
        </div>
        <div className={styles.Block5Right}>
          <div className={styles.Block5RightTitle}>
            Be Shining <br />
            Like a Diamond
          </div>
          <div className={styles.Block5RightContent}>
            We can sort out wallets into three levels: diamond <br />
            hands, normal hands, and paper hands. We also have <br />
            further plan to create community with diamond hands <br />
            and adopt DAO system.
          </div>
        </div>
      </div>
      <div className={styles.Block6}>
        <div className={styles.Block6Title}>Wanna Be Together?</div>
        <div className={styles.Block6Btn}>
          <div>
            <button className={styles.Block1Btn}>Check My Rank</button>
          </div>
        </div>
      </div>
    </div>
  );
}
