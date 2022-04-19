import styles from "./ProfileButton.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Blockies from "react-blockies";

const DropdownArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  top: 6.5rem;
  width: 214px;
  min-height: 32rem;
  border-radius: 8px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #626262;
  background-color: #2f2f2f;
  padding-top: 0.5rem;
  padding-left: 2.2rem;
  padding-right: 2.2rem;

  cursor: default;
`;

const DropdownNickname = styled.div`
  margin-top: 1.6rem;

  /* font properties */
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #f5f5f5;
`;

const DropdownWalletAddress = styled.div`
  margin-top: 17px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #bdbebe;
`;

const DropdownOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #f5f5f5;
`;

const DropdownOption = styled.div`
  padding: 0;
  height: 5.2rem;
  line-height: 5.2rem;
  cursor: pointer;

  &:hover {
    color: #d6f866;
  }
`;

const DropdownLink = styled(Link)`
  color: #f7f7f7;
  &:hover {
    color: #d6f866;
  }
`;

const ProfileMiniBox = () => {
  const nickname = sessionStorage.getItem("nickname");
  const walletAddress = sessionStorage.getItem("walletAddress");
  return (
    <DropdownArea>
      {/* nick name */}
      <DropdownNickname>{nickname}</DropdownNickname>
      {/* wallet address */}
      <DropdownWalletAddress>
        {walletAddress.substring(0, 6) +
          "........." +
          walletAddress.substring(38)}
      </DropdownWalletAddress>

      {/* split line in grey */}
      <div className={styles.splitLine}>━━━━━━━━━━</div>

      {/* Buttons */}
      <DropdownOptionsContainer>
        {/* Button Portfolio */}
        <DropdownOption key="/portfolio">
          <DropdownLink to="/portfolio">Portfolio</DropdownLink>
        </DropdownOption>

        {/* Button Switch Wallet */}
        <DropdownOption
          key="/connectWallet"
          onClick={() => {
            // window.location.reload();
            // sessionStorage.setItem("user", "");
            // sessionStorage.setItem("nickname", "");
            // sessionStorage.setItem("walletAddress", "");
          }}
        >
          <DropdownLink to="/connectWallet">Switch Wallet</DropdownLink>
        </DropdownOption>
        {/* Dark Toggle switch */}
        <DropdownOption>
          Dark Mode
          {/* <div className={styles.toggleSwitch}></div> */}
        </DropdownOption>
        {/* Sign out */}
        <DropdownOption
          onClick={() => {
            sessionStorage.setItem("user", "");
            sessionStorage.setItem("nickname", "");
            sessionStorage.setItem("walletAddress", "");
            window.location.reload();
          }}
        >
          Sign Out
        </DropdownOption>
      </DropdownOptionsContainer>
    </DropdownArea>
  );
};

const ProfileArea = styled.div`
  cursor: pointer;
  padding-top: 1rem;
`;

const ProfileButton = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div>
      <ProfileArea
        onMouseOver={() => {
          setMouseEnter(true);
        }}
        onMouseLeave={() => {
          setMouseEnter(false);
        }}
      >
        <Blockies
          seed={sessionStorage.getItem("walletAddress")}
          size={12}
          scale={4}
          color="#1f8203"
          bgColor="#ffe"
          spotColor="#abc"
        ></Blockies>
        {mouseEnter ? <ProfileMiniBox /> : null}
      </ProfileArea>
    </div>
  );
};

export default ProfileButton;
