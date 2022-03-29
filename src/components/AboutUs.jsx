import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.bgImage}>
        <img src="img/LandingPageBGImage.png" alt=" " />
      </div>
      <div className={styles.title}>
        Change <br />
        the NFT Culture
      </div>
      <button className={styles.DocsBtn}>Go to Docs</button>
    </div>
  );
}
