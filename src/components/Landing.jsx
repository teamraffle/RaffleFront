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

      <div className={styles.Lets}>Let's start a journey to NFT World!</div>
      <button className={styles.Component}>Check My Rank</button>
    </div>
  );
}
