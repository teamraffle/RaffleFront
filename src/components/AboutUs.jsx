import React, { useRef, useState } from "react";
import styles from "./AboutUs.module.css";
import styled from "styled-components";

const Block1GradationBox = styled.div`
  position: absolute;
  z-index: 2;
  width: 102.4rem;
  height: 10rem;
  background: linear-gradient(
    to bottom,
    rgba(21, 21, 23, 0) 3%,
    rgba(21, 21, 23, 0.5) 30%,
    rgba(21, 21, 23, 0.7) 75%,
    rgba(21, 21, 23, 1) 100%,
    rgba(21, 21, 23, 1) 100%,
    rgba(21, 21, 23, 1) 100%
  );
  opacity: 0.5;

  margin-top: 45rem;
`;

const Block4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  position: relative;
  margin-top: 50px;

  width: 78.4rem;
  margin-left: 14.8rem;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Block4Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: auto;
  margin-top: 15rem;
  margin-left: 14.8rem;
`;

const Block4Title = styled.div`
  font-family: Poppins;
  font-size: 48px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -1.08px;
  line-height: 66px;
  color: #fff;
  text-align: left;
  left: 120px;

  animation: fadein 3s ease-in-out;
`;

const Block4ScrollIndicator = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 3.2rem;

  margin-right: 9.8rem;
`;

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  overflow: scroll;
  width: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const TeamMemberBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 50rem;
  margin-right: 5.4rem;
`;

const TeamMemberIcon = styled.img`
  width: 18rem;
  height: 30rem;
`;

const TeamMemberRole = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.28px;
  text-align: left;
  color: #626262;
`;
const TeamMemberName = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.4px;
  text-align: left;
  color: #f5f5f5;
`;
const TmeaMemberDescription = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.28px;
  text-align: left;
  color: #f5f5f5;
`;

const Block5Title = styled.div`
  font-family: Poppins;
  font-size: 4.4rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: -0.088rem;
  text-align: center;
  color: #fff;

  margin-top: 16rem;
`;
const Block5Button = styled.button`
  width: 19rem;
  height: 4rem;
  background-color: #d6f866;
  border: solid 1px #e8faad;
  border-radius: 0.8rem;

  margin-top: 4.8rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 22rem;

  /* text */
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.042rem;
  text-align: center;
  color: #151517;

  cursor: pointer;

  /* animation */
  animation: fadein 3s ease-in-out;
`;

export default function AboutUs() {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState();
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    console.log("DRAG!");
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    console.log("DRAG DONE..");
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      console.log("[+] scrollWidth : ", scrollWidth);
      console.log("[+] clientWidth : ", clientWidth);
      console.log("[+] scrollLeft : ", scrollLeft);
      scrollRef.current.scrollLeft = startX - e.pageX;
      console.log("[_] ", scrollRef.current.scrollLeft);

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollWidth) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  const delay = 50;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.aBlock1}>
        <div className={styles.bgImage}>
          <img src="img/LandingPageBGImage2.png" alt=" " />
        </div>
        <div className={styles.title}>
          Change <br />
          the NFT Culture
        </div>
        <button className={styles.DocsBtn}>Go to Docs</button>
        <Block1GradationBox></Block1GradationBox>
      </div>

      <div className={styles.aBlock2}>
        <div className={styles.aBlock2LeftVid}>
          <video
            poster
            loop="loop"
            autoPlay="autoplay"
            src="vid/aBlock2LeftVids.mp4"
            type="video/mp4"
            muted="muted"
            playsInline="playsinline"
            width={1000}
          ></video>
        </div>

        <div className={styles.aBlock2Right}>
          <div className={styles.aBlock2RightTitle}>
            Improve <br />
            the NFT investment <br />
            culture <br />
          </div>
          <div className={styles.aBlock2RightContent}>
            We seek to improve the nft investment culture by helping manage and
            track the nft portfolio of all sizes NFT holders from newbies to
            Whales by giving credit ratings according to trading patterns,
            majorly based on average holding Period .
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
          gathered together to share the goal.
        </div>
        <div className={styles.aBlock3Content2}>
          Since our project considers building DAO with service users, we have
          registered our twitter, discord and web domain . Here, we are not only
          coding the service, but also working to build a community.
        </div>
        <div className={styles.aBlock3Content3}>
          Finish UI/UX design and spurring the front-end . While the front-end
          progresses, API development ongoes. Also, DB design will be finished.
        </div>
        <div className={styles.aBlock3Content4}>
          Actual test with pre-service model ( prototype ) will be ready and be
          done with community members. With the feedback, we will modify
          accordingly.
        </div>
        <div className={styles.aBlock3Content5}>
          NFT portfolio analysis and ranking parameters will be more specified
          with details . Any errors and issues will be handled for better
          services.
        </div>
        <div className={styles.aBlock3Content6}>
          At the end of TRON Hackathon, users will be able to actaully connect
          their wallet and check their portfolio and ranking. Depending on their
          ranking, they will get the chance to participate in diamond hands DAO.
        </div>
      </div>

      <Block4Header>
        <Block4Title>Our Team</Block4Title>

        <Block4ScrollIndicator>
          <img
            src="img/leftarrow.png"
            alt=""
            style={{ width: "4.8rem", height: "1.6rem" }}
          />
          <img
            src="img/rightarrow.png"
            alt=""
            style={{ width: "4.8rem", height: "1.6rem" }}
          />
        </Block4ScrollIndicator>
      </Block4Header>

      <Block4
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onThrottleDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        <TeamMemberContainer>
          <TeamMemberBox>
            <TeamMemberIcon src="img/Summer.png" alt=" " />
            <TeamMemberRole>Developer</TeamMemberRole>
            <TeamMemberName>Summer</TeamMemberName>
            <TmeaMemberDescription>
              Summer is the GOAT Developer <br />
              Summer is the GOAT Developer <br />
              Summer is the GOAT Developer <br />
              Summer is the GOAT Developer <br />
            </TmeaMemberDescription>
          </TeamMemberBox>

          <TeamMemberBox>
            <TeamMemberIcon src="img/Blockcodes.png" alt=" " />
            <TeamMemberRole>Developer</TeamMemberRole>
            <TeamMemberName>Blockcodes</TeamMemberName>
            <TmeaMemberDescription>
              Blockcodes is the GOAT Developer <br />
              Blockcodes is the GOAT Developer <br />
              Blockcodes is the GOAT Developer <br />
              Blockcodes is the GOAT Developer <br />
            </TmeaMemberDescription>
          </TeamMemberBox>
          <TeamMemberBox>
            <TeamMemberIcon src="img/Koko.png" alt=" " />
            <TeamMemberRole>Developer</TeamMemberRole>
            <TeamMemberName>Koko</TeamMemberName>
            <TmeaMemberDescription>
              Koko is the GOAT Developer <br />
              Koko is the GOAT Developer <br />
              Koko is the GOAT Developer <br />
              Koko is the GOAT Developer <br />
            </TmeaMemberDescription>
          </TeamMemberBox>
          <TeamMemberBox>
            <TeamMemberIcon src="img/Panna.png" alt=" " />
            <TeamMemberRole>Developer</TeamMemberRole>
            <TeamMemberName>Panna</TeamMemberName>
            <TmeaMemberDescription>
              Panna is the GOAT Developer <br />
              Panna is the GOAT Developer <br />
              Panna is the GOAT Developer <br />
              Panna is the GOAT Developer <br />
            </TmeaMemberDescription>
          </TeamMemberBox>
          <TeamMemberBox>
            <TeamMemberIcon src="img/Mean.png" alt=" " />
            <TeamMemberRole>Designer</TeamMemberRole>
            <TeamMemberName>Mean</TeamMemberName>
            <TmeaMemberDescription>
              Mean is the GOAT Designer <br />
              Mean is the GOAT Designer <br />
              Mean is the GOAT Designer <br />
              Mean is the GOAT Designer <br />
            </TmeaMemberDescription>
          </TeamMemberBox>
        </TeamMemberContainer>
      </Block4>

      <Block5Title>Wanna Be Together?</Block5Title>
      <Block5Button>CHECK MY RANK</Block5Button>
    </div>
  );
}
