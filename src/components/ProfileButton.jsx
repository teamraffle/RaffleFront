import styles from "./ProfileButton.module.css";
import { useState } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

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

      {/* grey split line */}
      <div className={styles.splitLine}>━━━━━━━━━━━</div>

      <div className={styles.options}>
        {/* Button Portfolio */}
        <Menu.Item className={styles.optionsBox} key="/portfolio">
          <NavLink to="/portfolio">Porfolio</NavLink>
        </Menu.Item>
        {/* Button Switch Wallet */}
        <Menu.Item className={styles.optionsBox} key="/connectWallet">
          <NavLink to="/connectWallet">switch wallet</NavLink>
        </Menu.Item>
        {/* Dark Toggle switch */}
        <div className={styles.optionsBox}>
          dark mode
          <div className={styles.toggleSwitch}></div>
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
      <div
        className={styles.profileButton}
        onMouseOver={() => {
          setMouseEnter(true);
        }}
        // onMouseLeave={() => {
        //   setMouseEnter(false);
        // }}
      >
        a
      </div>
      {mouseEnter ? (
        <ProfileMiniBox
          onMouseOver={() => {
            setMouseEnter(true);
          }}
          onMouseLeave={() => {
            setMouseEnter(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default ProfileButton;
