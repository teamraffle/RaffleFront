import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.bgImage}>
        <img src="img/LandingPageBGImage.png"></img>
        <div className={styles.title}>
          We Seek to Improve <br />
          the NFT Investment Culture
        </div>
        <div className={styles.subTitle}>
          You can read the documentation <br />
          about NFT Ranks and how we have built
        </div>
        <button className={styles.DocsBtn}>Go to Docs</button>
      </div>
    </div>
  );
}
