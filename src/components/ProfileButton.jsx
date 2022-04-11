import styles from "./ProfileButton.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Blockies from "react-blockies";

const ProfileBoxLinkButton = styled.div`
  position: relative;
  padding: 0;
  margin-top: 10px;
  height: 52px;
  color: #f5f5f5;

  &:hover {
    cursor: pointer;
  }
`;

const ProfileMiniBox = () => {
  const nickname = sessionStorage.getItem("nickname");
  const walletAddress = sessionStorage.getItem("walletAddress");
  return (
    <div className={styles.profileMiniBox}>
      {/* nick name */}
      <div className={styles.profileNickname}>{nickname}</div>
      {/* wallet address */}
      <div className={styles.profileWalletAddress}>
        {walletAddress.substring(0, 10) +
          "........" +
          walletAddress.substring(35)}
      </div>

      {/* split line in grey */}
      <div className={styles.splitLine}>━━━━━━━━━━━</div>

      {/* Buttons */}
      <div className={styles.options}>
        {/* Button Portfolio */}
        <ProfileBoxLinkButton key="/portfolio">
          Portfolio
          <Link to="/portfolio"></Link>
        </ProfileBoxLinkButton>

        {/* Button Switch Wallet */}
        <ProfileBoxLinkButton key="/connectWallet">
          Switch Wallet
          <Link to="/connectWallet"></Link>
        </ProfileBoxLinkButton>
        {/* Dark Toggle switch */}
        <div className={styles.darkModeBox}>
          <div className={styles.darkModeText}>Dark Mode</div>
          {/* <div className={styles.toggleSwitch}></div> */}
        </div>
        {/* Sign out */}
        <div className={styles.optionsBox}>Sign Out</div>
      </div>
    </div>
  );
};

const ProfileButton = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div>
      <Blockies
        seed={sessionStorage.getItem("walletAddress")}
        size={15}
        scale={3}
        color="#1f8203"
        bgColor="#ffe"
        spotColor="#abc"
        onMouseOver={() => {
          setMouseEnter(true);
          console.log("Mouse Entered");
        }}
        onMouseLeave={() => {
          setMouseEnter(false);
          console.log("Mouse Leave");
        }}
      >
        a
      </Blockies>

      {mouseEnter ? (
        <ProfileMiniBox
          onMouseOver={() => {
            setMouseEnter(true);
            console.log("Mouse Entered");
          }}
          onMouseLeave={() => {
            setMouseEnter(false);
            console.log("Mouse Leave");
          }}
        />
      ) : null}
    </div>
  );
};

export default ProfileButton;
