import React from "react";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.Landing}>
      <div className={styles.Track}>
        Track Your Position <br />
        in NFT World
      </div>

      <div className={styles.Browser}>
        <img src="img/Mask_group.png"></img>
      </div>

      <div className={styles.Blur1}>
        <img src="img/Blur_1.png"></img>
      </div>

      <div className={styles.Lets}>Let's start a journey to NFT World!</div>
      <button className={styles.Component}>Check My Rank</button>

      <div className={styles.Jungle}>
        Welcome <br />
        to the Jungle
      </div>

      <div className={styles.Junglecontent}>
        Welcomesdfsdfsd <br />
        to the Junglefsdf
      </div>

      {/* <div className={styles.Prortfolio}>
        <img src="img/Mask_group.png"></img>
      </div>

      <div className={styles.Portfolio2}>
        <img src="img/Blur_1.png"></img>
      </div> */}
    </div>
  );
}
