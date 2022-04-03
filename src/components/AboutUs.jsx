import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aBlock1}>
        <div className={styles.title}>
          Change <br />
          the NFT Culture
        </div>
        <div className={styles.bgImage}>
          <img src="img/LandingPageBGImage.png" alt=" " />
        </div>
        <button className={styles.DocsBtn}>Go to Docs</button>
      </div>

      <div className={styles.aBlock2}>
        <div className={styles.aBlock2LeftVid}>
          <video
            poster
            loop="loop"
            autoPlay="autoplay"
            src="vid/aBlock2LeftVid.mp4"
            type="video/mp4"
            muted="muted"
            playsInline="playsinline"
            width={1500}
          ></video>
        </div>

        <div className={styles.aBlock2Right}>
          <div className={styles.aBlock2RightTitle}>
            Improve <br />
            the NFT investment <br />
            culture <br />
          </div>
          <div className={styles.aBlock2RightContent}>
            We seek to improve the nft investment culture by <br />
            helping manage and track the nft portfolio of all sizes <br />
            NFT holders from newbies to Whales by giving credit <br />
            ratings according to trading patterns, majorly based <br />
            on average holding Period .
          </div>
        </div>
      </div>

      <div className={styles.aBlock3}>
        <div className={styles.aBlock3CenterTitle}>
          To Infinity and <br />
          Beyond <br />
        </div>
        <div className={styles.aBlock3RmapYearTop}>2022</div>
        <div className={styles.aBlock3RmapYearBottom}>2023</div>
        <div className={styles.aBlock3RmapBar}>
          <img src="img/Sidebar.png" alt=" "></img>
        </div>
        <div className={styles.aBlock3ContentT1}>Feb. 07</div>
        <div className={styles.aBlock3ContentT2}>Mar. 13</div>
        <div className={styles.aBlock3ContentT3}>Mar. 31</div>
        <div className={styles.aBlock3ContentT4}>Apr. 13</div>
        <div className={styles.aBlock3ContentT5}>Apr. 30</div>
        <div className={styles.aBlock3ContentT6}>May. 13</div>
        <div className={styles.aBlock3Content1}>
          Start of NFT Ranks , four blockchain developers and a designer
          gathered <br />
          together to share the goal.
        </div>
        <div className={styles.aBlock3Content2}>
          Since our project considers building DAO with service users, we have{" "}
          <br />
          registered our twitter, discord and web domain . Here, we are not only{" "}
          <br />
          coding the service, but also working to build a community.
        </div>
        <div className={styles.aBlock3Content3}>
          Finish UI/UX design and spurring the front-end . While the front-end{" "}
          <br />
          progresses, API development ongoes. Also, DB design will be finished.
        </div>
        <div className={styles.aBlock3Content4}>
          Actual test with pre-service model ( prototype ) will be ready and be
          done <br />
          with community members. With the feedback, we will modify accordingly.
        </div>
        <div className={styles.aBlock3Content5}>
          NFT portfolio analysis and ranking parameters will be more specified
          with <br />
          details . Any errors and issues will be handled for better services.
        </div>
        <div className={styles.aBlock3Content6}>
          At the end of TRON Hackathon, users will be able to actaully connect
          their <br />
          wallet and check their portfolio and ranking. Depending on their
          ranking, <br />
          they will get the chance to participate in diamond hands DAO.
        </div>
      </div>

      <div className={styles.aBlock4}>
        <div className={styles.aBlock4Title}>Our Team</div>
        <div className={styles.aBlock4Row}>
          <div className={styles.aBlock4Summer}>
            <img src="img/Summer.png" alt=" "></img>
          </div>
          <div className={styles.aBlock4SummerCont1}>Developer</div>
          <div className={styles.aBlock4SummerCont2}>Summer</div>
          <div className={styles.aBlock4SummerCont3}>
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer
          </div>
          <div className={styles.aBlock4Blockcodes}>
            <img src="img/Blockcodes.png" alt=" "></img>
          </div>
          <div className={styles.aBlock4BlockcodesCont1}>Developer</div>
          <div className={styles.aBlock4BlockcodesCont2}>Blockcodes</div>
          <div className={styles.aBlock4BlockcodesCont3}>
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer
          </div>
          <div className={styles.aBlock4Koko}>
            <img src="img/Koko.png" alt=" "></img>
          </div>
          <div className={styles.aBlock4KokoCont1}>Developer</div>
          <div className={styles.aBlock4KokoCont2}>Koko</div>
          <div className={styles.aBlock4KokoCont3}>
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer
          </div>
          <div className={styles.aBlock4Panna}>
            <img src="img/Panna.png" alt=" "></img>
          </div>
          <div className={styles.aBlock4PannaCont1}>Developer</div>
          <div className={styles.aBlock4PannaCont2}>Panna</div>
          <div className={styles.aBlock4PannaCont3}>
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer
          </div>
          <div className={styles.aBlock4Mean}>
            <img src="img/Mean.png" alt=" "></img>
          </div>
          <div className={styles.aBlock4MeanCont1}>Designer</div>
          <div className={styles.aBlock4MeanCont2}>Mean</div>
          <div className={styles.aBlock4MeanCont3}>
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer <br />
            KOKO is the GOAT Developer
          </div>
        </div>
      </div>
    </div>
  );
}
