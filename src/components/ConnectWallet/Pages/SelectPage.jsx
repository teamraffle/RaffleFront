import styled from "styled-components";

const SelectPageContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 8.4rem;

  font-family: Poppins;
  font-size: 2.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f5f5f5;
`;

const SubTitle = styled.div`
  font-family: Poppins;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f5f5f5;

  margin-top: 0.8rem;
  margin-bottom: 3.6rem;
`;

const WalletButton = styled.button`
  /*flex container properties */
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 20rem;
  height: 4rem;
  border-radius: 0.8rem;
  border: solid 0.1rem #e8faad;
  opacity: 0.2;
  cursor: default;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.4rem;

  background-color: #d6f866;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const WalletButtonIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  margin-left: 2.8rem;
`;

const WalletButtonText = styled.div`
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.042rem;
  text-align: left;
  color: #151517;

  margin-left: 1.4rem;
`;

const LinkMetamask = styled.a`
  font-family: Poppins;
  font-size: 1.6rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.048rem;
  text-align: left;
  color: #d8d8d8;

  margin-top: 4.9rem;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: #f5f5f5;
  }
`;

export default function SelectPage(props) {
  return (
    <SelectPageContainer>
      <Title>Connect Your Wallet</Title>

      <SubTitle>Let’s start a journey to NFT’s World</SubTitle>

      <WalletButton
        onClick={() => {
          props.changeChainID(1);
          props.changePageStep(2);
        }}
      >
        <WalletButtonIcon src="img/metamaskIcon.png" alt="metamask icon" />
        <WalletButtonText>Metamask</WalletButtonText>
      </WalletButton>

      <WalletButton
        onMouseOver={() => console.log("HELLO?")}
        onClick={() => {
          props.changeChainID(2);
        }}
      >
        <WalletButtonIcon src="img/coinbaseIcon.png" alt="metamask icon" />
        <WalletButtonText>Coinbase</WalletButtonText>
      </WalletButton>

      <WalletButton
        onClick={() => {
          props.changeChainID(3);
        }}
      >
        <WalletButtonIcon src="img/kaikasIcon.png" alt="kaikas icon" />
        <WalletButtonText>KaiKas</WalletButtonText>
      </WalletButton>

      <LinkMetamask
        href="https://metamask.io/"
        target="_blank"
        rel="noreferrer"
      >
        <u>I don't have any wallet</u>
      </LinkMetamask>
    </SelectPageContainer>
  );
}
