import styled from "styled-components";

const SigningPageContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: Poppins;
  font-size: 2.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f5f5f5;

  margin-top: 8.4rem;
  margin-bottom: 2.8rem;
`;

const WalletIconBox = styled.div`
  width: 17rem;
  height: 17rem;

  margin-left: auto;
  margin-right: auto;

  margin-bottom: 3.2rem;
`;

const Text = styled.div`
  font-family: Poppins;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f5f5f5;
`;

export default function SigningPage(props) {
  return (
    <SigningPageContainer>
      <Title>In Progress with:</Title>
      <WalletIconBox>
        {props.chainID === 1 && (
          <img src="img/Metamask_Loading_Icon.png" alt=" " />
        )}
        {props.chainID === 2 && <img src="img/" alt="coinbase icon" />}
        {props.chainID === 2 && <img src="img/" alt="coinbase icon" />}
      </WalletIconBox>

      <Text>please check your browser modal.</Text>
    </SigningPageContainer>
  );
}
